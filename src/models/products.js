'use strict';

const Category = require('./categories-schema'); //PULL IN MODEL

class Categories {

  //CREATE
  create(object) {
    let newCategory = new Category(object);
    return newCategory.save();
  }
  //READ
  get(id) {
    if (id) {
      return Category.findOne({ _id: id });
    }
    else {
      return Category.find({ });
    }
  }
  //UPDATE
  update(id, change) {
    return Category.findByIdAndUpdate(id, change, { new: true });
  }
  //DELETE
  delete(id) {
    return Category.deleteOne({ _id: id });
  }
}

module.exports = Categories;
