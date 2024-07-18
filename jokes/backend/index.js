const express=require('express')
const request = require('request');
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
const axios = require('axios');


app.listen(3000,()=>{
    console.log('Listening to port 3000')
})




const options = {
  method: 'GET',
  url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/coindesk',
  headers: {
    'x-rapidapi-key': 'af3c334112msh5a7dc68bdeba169p1f5acajsna8950a9c7f82',
    'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com'
  }
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	app.get('/',(req,res)=>{
        res.status(200).json(body)
    })
});