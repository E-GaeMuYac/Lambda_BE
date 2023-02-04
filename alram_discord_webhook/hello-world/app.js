const axios = require("axios");

exports.lambdaHandler = async (event) => {
  try {
    console.log(event.Records[0].Sns.Message)
    await axios.post(process.env.URL, {
      embeds: [
          {
            title: "Auto-Scaling",
            description: event.Records[0].Sns.Message
          }
        ],
    });
    console.info("성공");
  } catch (err) {
    console.log(err)
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
};
