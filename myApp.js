require('dotenv').config();
const mongoose = require('mongoose');

const myUri = "mongodb+srv://ilker:123asd123@learningmongodb.duuyu.mongodb.net/database1?retryWrites=true&w=majority";

mongoose.connect(myUri, { useNewUrlParser: true, useUnifiedTopology: true });

//taking ages to load on replit
//console.log(process.env.PW, process.env.MONGO_URI)
//console.log(myUri)

let peopleSchema = new mongoose.Schema({
  name: { type:String, required:true},
  age: Number,
  favoriteFoods: [String]
})

 let Person = mongoose.model('Person', peopleSchema);
//an example
//  let ilker = new Person({name:'Ilker', age:27, favoriteFoods:['pasta', 'pizza']});
//  console.log(ilker);

const createAndSavePerson = (done) => {
  done(null /*, data*/);
  //I need to modify server.js to keep people 
  //in my database, fcc code automatically deletes it
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
