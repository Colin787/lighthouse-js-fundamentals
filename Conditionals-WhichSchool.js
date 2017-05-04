function whichSchool(age) {

    if (age < 13) {
        //First condition for if age is less that 13
        return "Elementary School";
        console.log("Elementary School");
    }
    else if (age >= 13 && age <= 18) {
        //Second condition for if age is between 13 and 18(inclusive)
        return "Secondary School";
        console.log("Secondary School");
    }
    else {
        //Last condition for if age is above 18(any other age besides above)
        return "Lighthouse Labs";
        console.log("Lighthouse Labs");
    }
}

console.log(whichSchool(35));
console.log(whichSchool(8));
console.log(whichSchool(14));

