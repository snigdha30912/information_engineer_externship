const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors());
const requestData = {
    data : [{
        id: 1,
        name: "Item 1"
        }, {
        id: 3,
        name: "Item 3"
        }, {
        id: 2,
        name: "Item 2",
        }, {
        id: 4,
        name: "Item 4"
        },{
        id: 6,
        name: "Item 6"
        },{
        id: 5,
        name: "Item 5"
        }]
} 

/*
created a REST API which returns a JSON output, 
containing a list of objects with id and name fields, 
when a GET request is performed. We used Node.js to create the API endpoint. 
*/

app.get('/',(req,res)=>{
    res.send('Backend Module');
});

app.get('/api/get',(req,res)=>{
    res.send(requestData);
});

const port = process.env.PORT || 8000;
app.listen(port,()=>console.log(`listening on port ${port}`));