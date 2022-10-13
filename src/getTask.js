const AWS = require('aws-sdk');

const getTask = async event => {
  const { id } = event.pathParameters;
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamodb
    .get({ TableName: 'taskTable', key: { id } })
    .promise();
  const task = result.Item;

  return { status: 200, body: task };
};

module.exports = {
  getTask
};
