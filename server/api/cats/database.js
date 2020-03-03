const cats = require("../../database/catModel");

module.exports = {
  get: () => cats.find({}).populate("toys"),
  createNew: createParams => {
    return cats.create(createParams);
  },
  findBy: condition => {
    return cats.find(condition);
  },
  findById: id => {
    return cats.findById(id);
  },
  countBy: () => {
    return cats.count(condition);
  },
  updateAll: (id, whatToUpdate) => {
    return cats.findByIdAndUpdate(id, whatToUpdate, {
      new: true,
      useFindAndModify: false
    });
  },
  updateOne: (id, whatToUpdate) => {
    return cats.findByIdAndUpdate(id, whatToUpdate, {
      new: true,
      useFindAndModify: false
    });
  },
  deleteOne: id => {
    return cats.findByIdAndDelete(id);
  },
  showToys: id => {
    return cats.findById(id).populate("toys");
  },
  addToy: (cat, toy) => {
    return cats
      .findById(cat, (err, result) => {
        result.toys.push(toy);
      })
      .populate("toys");
  }
};
