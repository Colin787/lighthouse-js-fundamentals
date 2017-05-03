function ageCalculator(name, yearOfBirth, currentYear) {
    var age = currentYear - yearOfBirth;
    return name + " is " + age + " years old.";

}
console.log(ageCalculator("Colin", 1996, 2017));