const people = {
  person01: {
    name: "Chris",
    age: 20,
    nationality: "Mexican",
  },

  person02: {
    name: "Joao",
    age: 22,
    nationality: "Brazilian",
  },

  person03: {
    name: "Maria",
    age: 23,
    nationality: "Brazilian",
  },
};

if (people.person01.nationality == "Brazilian") {
  console.log(people.person01.name + " is Brazilian");
} else {
  console.log(people.person01.name + " is not Brazilian");
}

if (people.person02.nationality == "Brazilian") {
  console.log(people.person02.name + " is Brazilian");
} else {
  console.log(people.person02.name + " is not Brazilian");
}

if (people.person03.nationality == "Brazilian") {
  console.log(people.person03.name + " is Brazilian");
} else {
  console.log(people.person03.name + " is not Brazilian");
}
