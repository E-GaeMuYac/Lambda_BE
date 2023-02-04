const AWS = require("aws-sdk");
const sharp = require("sharp");
const s3 = new AWS.S3({ apiVersion: "2006-03-01" });
URLDecoder.decode()
exports.helloFromLambdaHandler = async (event) => {
  console.log(event.Records[0].s3.object.key)
  console.log(URLDecoder.decode(event.Records[0].s3.object.key))
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(key)
  const path = key.replace(process.env.ORIGIN, process.env.RESIZE);

  const s3Object = await s3
    .getObject({
      Bucket: bucket,
      Key: key,
    })
    .promise();

  const resizingImage = await sharp(s3Object.Body).resize(200).toBuffer();

  await s3
    .putObject({
      Bucket: bucket,
      Key: path,
      Body: resizingImage,
      ContentType: "image/png",
      ACL: "public-read",
    })
    .promise();
};
