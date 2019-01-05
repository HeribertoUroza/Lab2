const fs = require("fs");

const load = (className, cb) => {
    console.log("does this work, load")

    fs.readFile(`./classes/${className}.json`, (err, data)=> {
        if(err){
            console.log(`Broken`);
            return "not found"
        }
        cb(data)
    })

}


const save = (className, cb) => {
    console.log(` is this saving?`)

    fs.writeFile(`./classes/${className}.json`, (err, data) => {
        cb(err , res)
    });
}


const add = (className , cb) => {
    load(className, (data)=> {
        
    })
}