const express = require('express');
const app = express();
const path = require('path');


const publicDirectoryPath = path.join(__dirname,'../public')

app.use(express.static(publicDirectoryPath))


app.get('/weather',(req,res)=>{
    res.json({
        forecast:"temperature",
        location:"tadipatri"
    })
})


const port = 3000;

app.listen(port,()=>{
    console.log(`App listening on port ${port} ...`);
});