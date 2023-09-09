const db = require('../lib/urgencyModel');
const nursesDB = require('../lib/nurseModel');
const patientDB = require('../lib/patientModel');

const nurseService = require('./nurseService');
const patientService = require('./patientService');

class Urgency
{
    constructor () {        

    }

    static #uIdBase = 'uId';
    static #rIdBase = 'r';


    static #convertToUrgencytId(id) {
        return this.#uIdBase +id;
    }

    static #convertToRoomtId(id) {
        return this.#rIdBase +id;
    }

    static GetAll()
    {
        const urgencies = db;
        return urgencies;
    }

    static getOne(id)
    {
        const urgencyId = this.#convertToUrgencytId(id);
        const urgency = db[urgencyId];
        return {urgencyId, urgency};
    }

    static create(data)
    {
        const dbLength = Object.keys(db).length;
        const newUrgencyId= this.#convertToUrgencytId(dbLength+1);
        db[newUrgencyId] = data;
        return true;

    }

    static delete(id)
    {
        const {urgencyId} = this.getOne(id)
        delete db[urgencyId];
        return true;
    }

    static updateNurse(urgencyIdP, roomIdP, nurseIdP)
    {
        const {nurseId, nurse} = nurseService.getOne(nurseIdP);
        const urgencyId = this.#convertToUrgencytId(urgencyIdP);
        const roomId = this.#convertToRoomtId(roomIdP);
        db[urgencyId].room[roomId].nurseName = nurse.name + " " + nurse.lastName;
        nursesDB[nurseId].module = db[urgencyId].name;
        return true;
    }

    static assignPatient(urgencyIdP, roomIdP, patientIdP)
    {
        const {patientId, patient} = patientService.getOne(patientIdP);
        const urgencyId = this.#convertToUrgencytId(urgencyIdP);
        const roomId = this.#convertToRoomtId(roomIdP);
        console.log('patien ' +patient);
        db[urgencyId].room[roomId].patientName = patient.name + " " +patient.lastName;
        db[urgencyId].room[roomId].status = 1;

        patientDB[patientId].module = db[urgencyId].name;
        return true;
    }
}

module.exports = Urgency;