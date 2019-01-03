const fs = require('fs')


const classADD = (newClass) => {
    console.log("I ran")
    fs.writeFile(`${newClass}.json`, data, (err)=> {
        if (err) throw err;
        console.log("file written")
    })

}


module.exports = {
    classADD
}