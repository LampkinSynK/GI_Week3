class PII {
    #name;
    #SSN;

    constructor(name, ssn) {
        this.#name = name;
        this.#SSN = ssn;
    }

    getName() {
        return this.#name;
    }

    getSSN() {
        return this.#SSN;
    }
}

const patient2 = new PII("John Doe", '123-45-6789');

console.log(patient2.name);
console.log(patient2.SSN);

console.log(patient2.getName());
console.log(patient2.getSSN());