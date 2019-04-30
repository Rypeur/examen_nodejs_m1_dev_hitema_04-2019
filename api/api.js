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

v1.put('/people/{id}',(request, response) => {
    
    console.log('test');
    const id = request.params.id;
    const people = {...request.body};
    console.log('test');
    const result = peopleService.updatePeople(id, people);
    if (!result.isFind) return response.sendStatus(HttpStatus.NOT_FOUND);
    if (!result.isModified) return response.sendStatus(HttpStatus.NOT_MODIFIED);
    response.sendStatus(HttpStatus.OK);



});

v1.get('/people',(request, response)=>{
    const data = peopleService.getPeople();
    response.send(data);
});

module.exports = app;