var goat_count = 5;

var add_goats = function (new_goats) { 
    goat_count += new_goats;
};

add_goats(2);
add_goats(7);
add_goats(12);
add_goats(54);
add_goats(34);
add_goats(215);

console.log("We have " + goat_count + " js goats");

var sum = function (a, b) {
    return a + b;
};

var orange_count = 54;
var banana_count = 21;
var total_fruits = sum(
    orange_count,
    banana_count
);

console.log(
    "We have " 
    + orange_count + " js oranges, "
    + banana_count + " js bananas, and "
    + total_fruits + " js total fruits"
)

var goose_count = 74
var blue_bird_count = 631
var total_birds = sum(goose_count, blue_bird_count)




console.log(
    "We have " 
    + goose_count + " js gooses, "
    + blue_bird_count + " js bluebirds, and "
    + total_birds + " js total bird"
)