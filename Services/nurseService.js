const db = require('../lib/nurseModel');

class Nurse
{
    constructor () {        

    }

    static #nIdBase = 'nId';

    static #convertToNurseId(id) {
        return this.#nIdBase +id;
    }

    static #validateIdRange(id)
    {

    }

    static GetAll()
    {
        const nurses = db;
        return nurses;
    }

    static getOne(id)
    {
        const nurseId = this.#convertToNurseId(id);
        const nurse = db[nurseId];
        return {nurseId, nurse};
    }

    static create(data)
    {
        const dbLength = Object.keys(db).length;
        const newNurseId= this.#convertToNurseId(dbLength+1);
        db[newNurseId] = data;
        return true;

    }

    static updateName(id, name)
    {
        const nurseId = this.#convertToNurseId(id);
        db[nurseId].name = name;
        return true;
    }

    static updateNurseName(id,name)
    {
        const dbLength = Object.keys(db).length;
        if(id > dbLength)
        {
            return false;
        }
        else{
            const {nurseId} = this.getOne(id);
            db[nurseId].name = name;
            return true;
        }
    }

    static delete(id)
    {
        const {nurseId} = this.getOne(id)
        delete db[nurseId];
        return true;
    }


}

module.exports = Nurse;