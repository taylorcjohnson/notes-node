//cmd for debugging in node 8: node inspect playground/debugging.js
//cmd for continuous debugging: nodemon inspect playground/debugging.js
//cmd for dev-tools: node --inspect-brk playground/debugging.js

var person = {
    name: 'Taylor'
};

person.age = 31;

//add a breakpoint for node 8 debugging
debugger;

person.name = 'Mike';

console.log(person);