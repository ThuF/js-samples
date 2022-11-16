var response = require("http/v4/response");

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    Object.defineProperty(this, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        enumerable: true
    });
}

function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);

    this.enrolledCourses = [];

    this.enroll = function (course) {
        this.enrolledCourses.push(course);
    }

    this.getCourses = function () {
        return this.firstName + " " + this.lastName + " is enrolled in: " + this.enrolledCourses.join(", ");
    };
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let person = new Person("John", "Doe", 30);
let student = new Student("Jane", "Doe", 25);
student.enroll("Math");
student.enroll("CS");

response.println(student.getCourses());
response.println(JSON.stringify(student, null, 4));
