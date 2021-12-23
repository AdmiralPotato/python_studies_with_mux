goat_count = 5

def add_some_goats(number_of_goats_to_add):
    global goat_count
    goat_count += number_of_goats_to_add

add_some_goats(2)
add_some_goats(7)
add_some_goats(12)
add_some_goats(54)
add_some_goats(34)
add_some_goats(25)

print("We have " + str(goat_count) + " py goats")

def add_two_numbers_and_give_me_the_result(a, b):
    return a + b


orange_count = 54
banana_count = 21
total_fruits = add_two_numbers_and_give_me_the_result(
    orange_count,
    banana_count
)

print(
    "We have " 
    + str(orange_count) + " py oranges, "
    + str(banana_count) + " py bananas, and "
    + str(total_fruits) + " py total fruits"
)

goose_count = 74
blue_bird_count = 631
total_birds = add_two_numbers_and_give_me_the_result(
    goose_count,
    blue_bird_count
)

print(
    "We have " 
    + str(goose_count) + " py gooses, "
    + str(blue_bird_count) + " py bluebirds, and "
    + str(total_birds) + " py total bird"
)

