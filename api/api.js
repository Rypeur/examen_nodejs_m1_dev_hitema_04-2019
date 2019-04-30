const express = require('express');
const bodyParser = require('body-parser');
const PeopleService = require('./people-service');
const HttpStatus = require('http-status-codes');
const peopleService = new PeopleService();
const app = express();
const v1 = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

v1.put('/people/:id', async (request, response) => {
    try {
        const id = request.params.id;
        const people = request.body;
        const result = await peopleService.updatePeople(id, people);
        if (result){return response.sendStatus(HttpStatus.OK);} 
        else {response.sendStatus(HttpStatus.NOT_FOUND);} 
    }
    catch(error) {
        console.log('error occurs: ', error);
        response.sendStatus(HttpStatus.BAD_REQUEST).end(error);
    }
});

v1.get('/people',async (request, response)=>{
    const data = await peopleService.getPeople();
    response.send(data);
});

module.exports = app;