const axios = require("axios");

exports.lambdaHandler = async (event) => {

    const info = event.detail.fullDocument
    const now = new Date();
    const utcNow = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
    const koreaTimeDiff = 9 * 60 * 60 * 1000;
    const koreaNow = new Date(utcNow + koreaTimeDiff); 
    const headers = {
  "Content-Type": "application/json",
    };
  try {
    const { data } = await axios({
      method: "post",
      url: process.env.URL,
      headers,
      data: {
        text: '채팅알람',
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text : `${info.user}님이 ${info.room} 방에서 상담을 요청 하셨습니다. \n\n 요청시간 : ${koreaNow}`
            },
          },
        ],
      },
    });
    return data;
    
  } catch (err) {
    console.log(err)
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
