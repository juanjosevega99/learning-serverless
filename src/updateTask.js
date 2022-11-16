const AWS = require('aws-sdk');

const updateTask = async event => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;
  const { done, title, description } = JSON.parse(event.body);

  await dynamodb
    .update({
      TableName: 'taskTable',
      Key: { id },
      UpdateExpression: 'set done = :done',
      ExpressionAttributeValues: {
        ':done': done,
        ':title': title,
        ':description': description
      },
      ReturnValues: 'ALL_NEW'
    })
    .promise();

  return {
    status: 200,
    body: JSON.stringify({ message: 'Task updated successfully' })
  };
};

module.exports = {
  updateTask
};