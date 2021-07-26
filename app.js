//jshint esversion:6
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB"), { useNewUrlParser: true };

const fruitSchema = new mongoose.Schema ({
    name: String,
    rating: Number,
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
});

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", peopleSchema);

const person = new Person({
   name:'John',
   age: 30
});
person.save();
//fruit.save();

