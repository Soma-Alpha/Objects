class Person {
  constructor(name, pets, residence, hobbies) {
    this.name = name;
    this.pets = pets;
    this.residence = residence;
    this.hobbies = hobbies;
  }
  info() {
    console.log(
      `${this.name} has ${this.pets} pets and lives in ${this.residence} and has these hobbies:  ${this.hobbies}.`
    );
  }
  greeting() {
    console.log(`Hello ${this.name}. Good to know your hobbies are ${this.hobbies}.`);
  }
}

class Coder extends Person {
  constructor(name, pets, residence, hobbies) {
    super(name, pets, residence, hobbies);
    this.occupation = "Full-Stack Web Developer";
  }
  greeting() {
    console.log(
      `Hello fellow Coder, ${this.name}. Good to know you are a ${this.occupation}`
    );
  }
}

let NewPerson = new Person("Soma",0, "Reading Road", [
  "reading books ",
  "painting ",
  "photography",
]);
let NewCoder = new Coder("Soma",0, "Reading Road", [
  "reading books ",
  "painting ",
  "photography",
]);

NewPerson.info();
NewPerson.greeting();
NewCoder.info();
NewCoder.greeting();
