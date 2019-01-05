const fs = require('fs')


const classADD = (newClass) => {
    console.log("I ran")

    let classObj = 
    {
        students: [], 
    }
    ;
    
    fs.writeFile(`./classes/${newClass}.json`, JSON.stringify(classObj), (err) => {

        if (err) throw err;
        console.log("file written", data)

    })

}

const studentADD = (className, studentName, age, city, grade) => {
    console.log("I am running");

    fs.readFile(`./classes/${className}.json`, `utf8` , (err , data)=> {
        console.log("is data ",JSON.parse(data).students)
        console.log("yeoeoeo " ,err)

        let studentObj = {
            "name" : studentName,
            "age" : age,
            "city" : city,
            "grade" : grade,
        };



        fs.writeFile(`./classes/${className}.json`, `${JSON.stringify(studentObj)}`, (err, data)=> {
            console.log("inside read, and write")
            console.log(err)
            console.log(data)
        
        } )

    })
}

//

module.exports = {
    classADD,
    studentADD
}