// 
// Object Destructuring
// 
const person = {
    name: "shraddha",
    age: 21,
    location : {
        city: "mehesana",
        state: "Gujarat"
    }
}

const { name:Firstname = "anonymous" , age } = person;
console.log(`My name is ${Firstname} and my age is ${age}`);

const { city, state } = person.location;
console.log(`I am live in ${city} ${state}.`);

// 
// Array Destructuring
// 

const address = ["radhanpur road", "mehesana", "gujarat", "india"];

const [street, citys, states, country ] = address;
console.log(`My address : 34 sahara township,${street},${citys}-${states},${country}`)