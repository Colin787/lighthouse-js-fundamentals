var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
var item = 0;
while (item < ingredients.length) {
    console.log(ingredients[item]);
    item++;
}
console.log("All done!!");
//////////////////////////////////////
for (i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
console.log("All done again haha");
/////////////////////////////////////////

for (t = ingredients.length; t > 0; t--) {
    console.log(ingredients[t]);
}
console.log("And again!!!")
/////////////////////////////////////////
var theListItem = ingredients.length;
while (theListItem > 0) {
    console.log(ingredients[theListItem]);
    theListItem--;
}