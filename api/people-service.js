const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {

        if (people) {
            let peopleUpdate = this.peoples.find(element => {
                return parseInt(element.id) === parseInt(id);
            });

            if (peopleUpdate) {
                peopleUpdate = {
                    ...peopleUpdate,
                    ...people
                };
                return peopleUpdate;
            }

        }
        return null;
    }
    
    getPeople(filters) {
        let result;
        if(filters){

        }
        else{
            result = this.peoples;
        }
        return result
    }

}
