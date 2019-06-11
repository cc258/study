function welcome(person: person) {
  return `hello, ${person.firstname} ${person.lastname}`;
}
interface person {
  firstname: string;
  lastname: string;
}
var person = {
  firstname: "Leo",
  lastname: "Chuang"
};
document.write(welcome(person));
