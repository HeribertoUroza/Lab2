const fs = require('fs')


const classADD = (newClass) => {
    console.log("I ran")

    let classObj = 
    {
        students: [
    { name: 'John', age: 30, city: 'NYC', grade: 75 },
    { name: 'Emily', age: 28, city: 'LA', grade: 80 }
    ] }
    ;
    
    fs.writeFile(`./classes/${newClass}.json`, `${JSON.stringify(classObj)}`, (err) => {

        if (err) throw err;
        console.log("file written", data)

    })

}

const studentADD = (className, studentName, age, city, grade) => {
    console.log("I am running");

    fs.readFile(`./classes/${JSON.parse(className)}.json`, `utf8` , (err , data)=> {
        console.log("is data ",JSON.parse(data).students[0])
        console.log("yeoeoeo " ,err)

    })
}



module.exports = {
    classADD,
    studentADD
}