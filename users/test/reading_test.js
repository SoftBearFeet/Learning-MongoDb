const assert = require('assert');
const User = require('../src/user');

describe('Reading users out of the database', () => {

  let joe;

  /* Before each `it()` statement, this `beforeEach()` gets executed to save an acutal user to the database, so that we have something to query, because in 'test_helper.js' the User collection gets dropped. */
  beforeEach((done) => {
    joe = new User({ name: 'Joe' });
    joe.save()
      .then(() => done());
  });

  it('finds all users with the name of "joe"', (done) => {
    /* Uses `.find()` method from `User()` model to find all instances of 'Joe' */
    User.find({ name: 'Joe' })
      .then((user) => {

        /* The returned value for user & joe is an object that as a string {ObjectId( *then some string*)}; We need to Stringify the value to read it correctly, so that JS knows how to make the comparison. Aso when the Instance that `joe()` is created, Mongoose assigns it an ID before it gets saved to the Database as well. */
        assert(user[0]._id.toString() === joe._id.toString())
        done();
      })
  });

  it('find a user with aparticular id', (done) => {

    /* `.findOne` finds the first instance in the Database. It expects an object, not a string. We don't need to Stringify the id, because Mongoose knows how to work/deal with the ID Object. */
    User.findOne({ _id: joe._id })
      .then((user) => {
        assert(user.name === 'Joe');
        done();
      });
  });
});