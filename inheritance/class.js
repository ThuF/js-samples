const response = require("http/v4/response");

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(fullName) {
        const tokens = fullName.toString().split(" ");
        this.firstName = tokens[0];
        this.lastName = tokens[1];
    }

    isAdult() {
        return this.age >= 18;
    }
}

class Student extends Person {

    constructor(firstName, lastName, age) {
        super(firstName, lastName, age);
        this.enrolledCourses = [];
    }

    static fromPerson(person) {
        return new Student(person.firstName, person.lastName, person.age);
    }

    enroll(course) {
        this.enrolledCourses.push(course);
    }

    getCourses() {
        return this.fullName + " is enrolled in " + this.enrolledCourses.join(", ");
    }
}

const person = new Person("John", "Doe", 30);
const student = new Student("Jane", "Doe", 25);
// const student = Student.fromPerson(person);
student.enroll("Math");
student.enroll("CS");

response.println(student.getCourses());
response.println(JSON.stringify(student, null, 4));
