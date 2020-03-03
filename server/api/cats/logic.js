var database = require("./database");

module.exports = {
  get: database.get,
  createNew: database.createNew,
  findBy: database.findBy,
  countBy: database.countBy,
  updateAll: database.updateAll,
  updateOne: database.updateOne,
  deleteOne: database.deleteOne,
  showToys: database.showToys,
  addToy: database.addToy,
  findById: database.findById
};
