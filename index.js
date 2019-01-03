const express = require("express");
const classADD = require("./services/classADD")



const app = express();
const port = 8000;



app.get('/', (request, response) => {
    response.send(`<h1>Welcome to the Homepage</h1>`)

});

app.get('/class', (request, response) => {
    let newClass = request.query.class 
    classADD.classADD(newClass)



});



/*

{
  students: [
    { name: 'John', age: 30, city: 'NYC', grade: 75 },
    { name: 'Emily', age: 28, city: 'LA', grade: 80 }
  ]
}

*/


app.listen(port, () => {
    console.log("Local Server is Active")
});