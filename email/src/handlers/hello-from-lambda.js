const sesAccessKey = process.env.EMAIL;
const sesSecretKey = process.env.PASSWORD;

exports.handler = function (event, context, callback) {
  const sendTarget = event.email;

  const nodemailer = require("nodemailer");
  const smtpTransport = require("nodemailer-smtp-transport");
  console.log(sendTarget)
  const generateRandom = function (min, max) {
    const ranNum = Math.floor(Math.random()*(max-min+1)) + min;
    return ranNum;
  }

  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "Gmail",
      port: 465,
      auth: {
        user: sesAccessKey,
        pass: sesSecretKey,
      },
    })
  );
  

  const number = generateRandom(111111,999999)
  
        const mailOptions = {
            from: sesAccessKey,
            to: sendTarget,
            subject: "[pillnuts] 인증 관련 이메일 입니다",
            text: "오른쪽 숫자 6자리를 입력해주세요 : " + number,
            html: `<tbody>
  <tr>
    <td align="center" valign="top">
      <table border="0" cellpadding="20" cellspacing="0" width="600">
        <tbody>
          <tr>
            <td align="center" valign="top">
              <table
                border="0"
                cellpadding="0"
                cellspacing="0"
                width="100%"
                style="
                  background-color: #fff;
                  background-image: none;
                  background-repeat: repeat;
                  background-position: top left;
                  background-attachment: scroll;
                "
              >
                <tbody>
                  <tr>
                    <td align="center" valign="top">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        height="90"
                        width="100%"
                        style="
                          background-color: #fff;
                          background-image: none;
                          background-repeat: repeat;
                          background-position: top left;
                          background-attachment: scroll;
                        "
                      >
                        <tbody>
                          <tr>
                            <td align="center" valign="middle">
                              <a
                                href="https://pillnuts.store"
                                rel="noreferrer noopener"
                                target="_blank"
                                ><img
                                  src="https://egaemoyac.s3.ap-northeast-2.amazonaws.com/logo/logo-removebg-preview.png"
                                  width="228"
                                  height="60"
                                  alt="PillNuts"
                                  loading="lazy"
                              /></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <table
                        border="0"
                        cellpadding="0"
                        cellspacing="0"
                        height="1"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              valign="middle"
                              style="background-color: #eeeeee"
                              width="249"
                            ></td>
                            <td
                              align="center"
                              valign="middle"
                              style="background-color: #6991E1"
                              width="102"
                            ></td>
                            <td
                              align="center"
                              valign="middle"
                              style="background-color: #eeeeee"
                              width="249"
                            ></td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="center" valign="top">
                      <table
                        border="0"
                        cellpadding="1"
                        cellspacing="0"
                        height="0"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td align="center" valign="middle">
                              <div
                                style="
                                  text-align: left;
                                  padding: 20px 0 20px 0;
                                  font-size: 14px;
                                  line-height: 1.5;
                                  width: 80%;
                                  color: #6991E1;
                                  text-align: center;
                                "
                              >
                                안녕하세요 pillnuts입니다!
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="middle">
                              <div
                                style="
                                  text-align: left;
                                  padding: 0 0 20px 0;
                                  font-size: 14px;
                                  line-height: 1.5;
                                  width: 80%;
                                "
                              >
                                다음 인증코드를 입력해 회원가입 인증하세요
                              </div>
                              <div
                                style="
                                  background: #faf9fa;
                                  border: 1px solid #dad8de;
                                  text-align: center;
                                  padding: 5px;
                                  margin: 0 0 5px 0;
                                  font-size: 24px;
                                  line-height: 1.5;
                                  width: 80%;
                                "
                              >
                                ${number}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        align="center"
        style="
          background: 0 0 !important;
          border-collapse: collapse;
          border-spacing: 0;
          margin: 20px auto 0 auto;
          padding: 0;
          text-align: inherit;
          vertical-align: top;
          width: 580px;
        "
      >
        <tbody>
          <tr>
            <th colspan="1" rowspan="1">
              <table
                style="
                  border-collapse: collapse;
                  border-spacing: 0;
                  display: table;
                  padding: 0;
                  text-align: left;
                  vertical-align: top;
                  width: 100%;
                "
              >
                <tbody>
   
                  <tr style="padding: 0; text-align: left; vertical-align: top">
                    <th
                      colspan="1"
                      rowspan="1"
                      style="
                        margin: 0 auto;
                        color: #322f37;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 1.3;
                        margin: 0 auto;
                        padding: 0;
                        padding-bottom: 0 !important;
                        padding-left: 20px;
                        padding-right: 10px;
                        padding-top: 0 !important;
                        text-align: left;
                        width: 270px;
                      "
                    >
                      <a
                        href="https://forms.gle/VBFWucbis8uvwmgV8"
                        style="
                          margin: 0;
                          color: #9147ff;
                          font-family: helvetica, arial, sans-serif;
                          font-weight: 400;
                          line-: 1.3;
                          margin: 0;
                          padding: 0;
                          text-align: left;
                          text-decoration: none;
                        "
                        target="_blank"
                        rel="noreferrer noopener"
                        ><img
                          src="https://egaemoyac.s3.ap-northeast-2.amazonaws.com/logo/%EC%84%A4%EB%AC%B8%EC%A1%B0%EC%82%AC.png"
                          width="25"
                          height="25"
                          alt="twitch-twitter"
                          style="
                            border: none;
                            clear: both;
                            display: block;
                            float: right;
                            max-width: 100%;
                            outline: 0;
                            text-align: right;
                            text-decoration: none;
                            width: auto;
                          "
                          loading="lazy"
                      /></a>
                    </th>
                    <th
                      colspan="1"
                      rowspan="1"
                      style="
                        margin: 0 auto;
                        color: #322f37;
                        font-family: Helvetica, Arial, sans-serif;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 1.3;
                        margin: 0 auto;
                        padding: 0;
                        padding-bottom: 0 !important;
                        padding-left: 10px;
                        padding-right: 20px;
                        padding-top: 0 !important;
                        text-align: left;
                        width: 270px;
                      "
                    >
                      <a
                        href="mailto:pillnutsss@gmail.com"
                        style="
                          margin: 0;
                          color: #9147ff;
                          font-family: helvetica, arial, sans-serif;
                          font-weight: 400;
                          line-: 1.3;
                          margin: 0;
                          padding: 0;
                          text-align: left;
                          text-decoration: none;
                        "
                        target="_blank"
                        rel="noreferrer noopener"
                        ><img
                          src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
                          width="25"
                          height="25"
                          alt="gmail"
                          style="
                            border: none;
                            clear: both;
                            display: block;
                            float: left;
                            max-width: 100%;
                            outline: 0;
                            text-align: left;
                            text-decoration: none;
                            width: auto;
                          "
                          loading="lazy"
                      /></a>
                    </th>
                  </tr>
                </tbody>
              </table>
            </th>
          </tr>
          <tr style="padding: 0; vertical-align: top">
            <th
              colspan="1"
              rowspan="1"
              style="
                color: #322f37;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 16px;
                font-weight: 400;
                line-height: 1.3;
                margin: 0;
                padding: 0;
              "
            >
              <p
                style="
                  color: #322f37;
                  font-family: Helvetica, Arial, Verdana, 'Trebuchet MS';
                  font-size: 16px;
                  font-weight: 400;
                  line-height: 24px;
                  margin: 0;
                  margin-top: 5px;
                  margin-bottom: 10px;
                  padding: 0;
                  padding-bottom: 10px;
                  text-align: center;
                "
              >
                <small style="color: #706a7c; font-size: 14px"
                  >© 2023 pillnuts, All Rights Reserved<br />
                </small>
              </p>
            </th>
            <th
              colspan="1"
              rowspan="1"
              style="
                color: #322f37;
                font-family: Helvetica, Arial, sans-serif;
                font-size: 16px;
                font-weight: 400;
                line-height: 1.3;
                margin: 0;
                padding: 0 !important;
                text-align: left;
                visibility: hidden;
                width: 0;
              "
            ></th>
          </tr>
        </tbody>
      </table>
    </td>
  </tr>
</tbody>
`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error)
      const response = {
        statusCode: 500,
        body: {
          error: error.message,
        },
      };
      callback(null, response);
    }
    const response = {
      statusCode: 200,
      body: {
        message: `인증메일 전송에 성공하였습니다!`,
        code: number,
      },
    };
    callback(null, response);
  });
};
