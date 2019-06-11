function welcome(person) {
    return "hello, " + person.firstname + " " + person.lastname;
}
var person = {
    firstname: "Leo",
    lastname: "Chuang"
};
document.write(welcome(person));
