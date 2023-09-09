const db = require('../lib/patientModel');

class Patient
{
    constructor () {        

    }

    static #pIdBase = 'pid';

    static #convertToPatientId(id) {
        return this.#pIdBase +id;
    }

    static GetAll()
    {
        const patients = db;
        return patients;
    }

    static getOne(id)
    {
        const patientId = this.#convertToPatientId(id);
        const patient = db[patientId];
        console.log(patient.name);
        return {patientId, patient};
    }

    static create(data)
    {
        const dbLength = Object.keys(db).length;
        const newPatientId= this.#convertToPatientId(dbLength+1);
        db[newPatientId] = data;
        return true;

    }

    static updateName(id, name)
    {
        const nurseId = this.#convertToPatientId(id);
        db[nurseId].name = name;
        return true;
    }

    static updateDiagnosis(id, diagnosis)
    {
        const dbLength = Object.keys(db).length;
        if(id > dbLength)
        {
            return false;
        }
        else
        {
            const patientId = this.#convertToPatientId(id);
            db[patientId].diagnosis = diagnosis;
            return true;
        }
    }

    static updateUrgencyLevel(patientId, urgencyId)
    {

    }


    static updatePatientName(id,name)
    {
        const dbLength = Object.keys(db).length;
        if(id > dbLength)
        {
            return false;
        }
        else{
            const {patientId} = this.getOne(id);
            db[patientId].name = name;
            return true;
        }
    }

    static delete(id)
    {
        const {patientId} = this.getOne(id)
        delete db[patientId];
        return true;
    }


}

module.exports = Patient;