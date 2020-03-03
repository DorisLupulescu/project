const dogs = require("../../database/dogModel");

module.exports = {
  findBy: condition => {
    return dogs.find(condition);
  },
  createNew: createParams => {
    return dogs.create(createParams);
  }
};
