'use strict';

const Categories = require('../src/models/categories'); //BRING IN THE MODEL 
let categories = new Categories(); //SET UP REPO FOR TESTING?

const supergoose = require('./supergoose.js'); //BRING IN OUR MEMORY SERVER 

describe('CRUD', () => {

  it('C', async () => {
    let testCategory = await categories.create({ name: 'test-category', description: 'testing out the ability to create a category w/ mongoose'});

    expect(testCategory).toHaveProperty('_id');
    expect(testCategory).toHaveProperty('name','test-category');
  });

  it('R', async () => {
    let testCategory1 = await categories.create({ name: 'test-category1', description: 'testing out the ability to create a category w/ mongoose 1'});
    let testCategory2 = await categories.create({ name: 'test-category2', description: 'testing out the ability to create a category w/ mongoose 2'});
    let testCategory3 = await categories.create({ name: 'test-category3', description: 'testing out the ability to create a category w/ mongoose 3'});

    let lookup = await categories.get(testCategory2._id);

    expect(lookup).toHaveProperty('_id', testCategory2._id);
    expect(lookup).not.toHaveProperty('_id', testCategory1._id);
    expect(lookup).toHaveProperty('name', 'test-category2');
  });

  it('U', async () => {
    let testCategory = await categories.create({ name: 'test-category', description: 'testing out the ability to create a category w/ mongoose'});

    let lookup = await categories.get(testCategory._id);

    expect(lookup).toHaveProperty('_id', testCategory._id);
    expect(lookup).toHaveProperty('name', 'test-category');

    let updateLookup = await categories.update(testCategory._id, { name: 'new-test-category' });
    let newLookup = await categories.get(testCategory._id);

    expect(newLookup).toHaveProperty('_id', testCategory._id);
    expect(newLookup).toHaveProperty('name', 'new-test-category');
  });

  it('D', async () => {
    let testCategory = await categories.create({ name: 'test-category', description: 'testing out the ability to create a category w/ mongoose'});

    let lookup = await categories.get(testCategory._id);

    expect(lookup).toBeDefined();
 
    let deleteLookup = await categories.delete(testCategory._id);

    let newLookup = await categories.get(testCategory._id);

    expect(newLookup).toBeNull();
  });

});