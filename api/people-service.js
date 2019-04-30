const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    updatePeople(id, people) {
        console.log(this.peoples);
        for(var i = 0; i < this.peoples.length;i++){

            if(this.people[i].id === id ){

            }
        }

        return {
            isFind: result.matchedCount === 1,
            isModified: result.modifiedCount === 1
        };
    }
    
    getPeople(filters) {
        let result;
        if(filters){
            result = this.peoples.filter(element =>{
                if(element.gender === filters.gender){
                    return element;
                }
                if(element.name === filters.name){
                    return element;
                }
            })

        }
        else{
            result = this.peoples;
        }
        return result
    }

}
