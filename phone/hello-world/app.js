exports.lambdaHandler = async (event, context) => {
  const axios = require("axios");
  const CryptoJS = require("crypto-js");
  const user_phone_number = event.phoneNumber;
  const date = Date.now().toString();

  const serviceId = process.env.SENS_SERVICE_ID;
  const secretKey = process.env.SENS_SECRET_KEY;
  const accessKey = process.env.SENS_ACCESS_KEY;
  const my_number = process.env.SENS_MYNUM;

  const method = "POST";
  const space = " ";
  const newLine = "\n";
  const url = `https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`;
  const url2 = `/sms/v2/services/${serviceId}/messages`;

  const generateRandom = function (min, max) {
    const ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return ranNum;
  };
  const number = generateRandom(111111, 999999);

  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url2);
  hmac.update(newLine);
  hmac.update(date);
  hmac.update(newLine);
  hmac.update(accessKey);
  const hash = hmac.finalize();
  const signature = hash.toString(CryptoJS.enc.Base64);
  await axios({
    method: method,
    url: url,
    headers: {
      "Contenc-type": "application/json; charset=utf-8",
      "x-ncp-iam-access-key": accessKey,
      "x-ncp-apigw-timestamp": date,
      "x-ncp-apigw-signature-v2": signature,
    },
    data: {
      type: "SMS",
      countryCode: "82",
      from: my_number,
      content: `[PillNuts] 인증번호 [${number}]를 입력해주세요.`,
      messages: [{ to: `${user_phone_number}` }],
    },
  })
  return {
    message: `인증문자 전송에 성공하였습니다.`,
    code: number,
  };
};

