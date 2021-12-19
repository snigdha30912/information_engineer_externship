const axios = require('axios');

// async function which fetches data from the API
const fetchData = async () => {
    const response = await axios.get('http://localhost:8000/api/get/');
    let res = response.data.data;
    
    // sorting data by id
    res.sort((key1, key2) => {
        return key1.id-key2.id;
    });
    
    // iterating through the list and printing the id and the name of every object in the console.
    for(let i = 0; i<res.length; i++)
    {
        console.log('id : ' + res[i].id);
        console.log('name : '+ res[i].name);
    }
}

fetchData();





