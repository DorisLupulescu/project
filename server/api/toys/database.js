const toys = require("../../database/catToysModel");

module.exports = {
  findBy: condition => {
    return toys.find(condition);
  },
  countBy: condition => {
    return toys.count(condition);
  },
  create: condition => {
    return toys.create(condition);
  },
  addOwner: (toy, cat) => {
    return toys
      .findByIdAndUpdate(
        toy,
        { owner: cat },
        {
          new: true,
          useFindAndModify: false
        }
      )
      .populate("owner");
  }
};
