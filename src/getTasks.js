const AWS = require('aws-sdk');

const getTasks = async () => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const result = await dynamoDb.scan({ TableName: 'taskTable' }).promise();

  const tasks = result.Items;

  return { status: 200, body: { tasks } };
};

module.exports = {
  getTasks
};
