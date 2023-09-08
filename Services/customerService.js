const db = require('../lib/customerModel');

class Customer
{
    constructor () {        

    }

    static #cIdBase = 'cId';

    static #convertToCustomerId(id) {
        return this.#cIdBase +id;
    }

    static #validateIdRange(id)
    {

    }

    static GetAll()
    {
        const customers = db;
        return customers;
    }

    static getOne(id)
    {
        const customerId = this.#convertToCustomerId(id);
        const customer = db[customerId];
        return {customerId, customer};
    }

    static create(data)
    {
        const dbLength = Object.keys(db).length;
        const newCustomerId= this.#convertToCustomerId(dbLength+1);
        db[newCustomerId] = data;
        return true;

    }

    static updateName(id, name)
    {
        const customerId = this.#convertToCustomerId(id);
        db[customerId].name = name;
        return true;
    }

    static updateCustomerName(id,name)
    {
        const dbLength = Object.keys(db).length;
        if(id > dbLength)
        {
            return false;
        }
        else{
            const {customerId} = this.getOne(id);
            db[customerId].name = name;
            return true;
        }
    }

    static delete(id)
    {
        const {customerId} = this.getOne(id)
        delete db[customerId];
        return true;
    }


}

module.exports = Customer;