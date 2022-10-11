const { v4 } = require('uuid');
const AWS = require('aws-sdk');

const addTask = async event => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();

  const { title, description } = event.body;
  const createdAt = new Date();
  const id = v4();
};

module.exports = {
  addTask
};
