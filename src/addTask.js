const { v4 } = require('uuid');

const addTask = async event => {
  const { title, description } = event.body;
  const createdAt = new Date();
  const id = v4();
};

module.exports = {
  addTask
};
