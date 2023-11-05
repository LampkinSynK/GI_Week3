class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }

    getExercise() {
        console.log(`It's time to run!`);
    }

    fetchJob(){
        console.log(`${this.name} is a ${this.job}.`)
    }

}


class Programmer extends Person {
    constructor(name, job, age, language) {
        super(name, job, age);
        this.language = language;
        this.busy = true;
    }

    completeTask() {
        this.busy = false;
    }

    acceptTask() {
        this.busy = true;
    }

    offerNewTask() {
        switch(this.busy) {
            case false:
                console.log(`${this.name} would love to take on a new responsibility.`);
                break;
            case true:
                console.log(`${this.name} can't accept any new tasks right now.`);
                break;
        }
    }

    learnLanguage(addLanguage) {

        if(this.language.includes(addLanguage)) {
            console.log(`${this.name} already knows this language please choose another langauge to learn`)
        }
        else {
            this.language.push(addLanguage);
            console.log(`${this.name} has learned the language ${addLanguage}`);
        }
    }

    listLanguage() {
        console.log(`${this.name} knows ${this.language}`);
    }

}

let person1 = new Person('Jaylin', 'Software Developer', '19');
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);
c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.listLanguage());
console.log(c2.listLanguage());
console.log(c3.listLanguage());
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.getExercise();
person1.fetchJob();
