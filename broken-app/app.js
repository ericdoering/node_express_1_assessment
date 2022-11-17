const express = require('express');
const axios = require('axios');


const app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  let responseAg = [];
    for(let dev of req.body.developers){
      let out = await axios.get(`https://api.github.com/users/${dev}`)
      .then(response => {
        return {name: response.data.name, bio: response.data.bio }
      })
      .catch(err =>
      { 
        console.log(err);
        next(err);
      });
      responseAg.push(out);
    }
    
    return res.send(JSON.stringify(responseAg));
  
});

app.listen(3000);
