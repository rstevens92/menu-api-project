const menuData = [
    {
        menuId: 1,
        isFood: true,
        menuSection: "Starter",
        menuName: "Prawn Cocktail",
        menuImg: "../../public\Images\Starters\Prawn-Cocktail.png",
        menuDescription: "Prawns in rose marie sauce on a bed of lettuce. Served with bread and butter.",
        menuPrice: "£4.99",
        menuCalories: 569,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 2,
        isFood: true,
        menuSection: "Starter",
        menuName: "Arancini",
        menuImg: "public\Images\Starters\arancini.png",
        menuDescription: "Deep fried risotto balls.",
        menuPrice: "£3.99",
        menuCalories: 698,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
            }
    },
    {
        menuId: 3,
        isFood: true,
        menuSection: "Starter",
        menuName: "Olives",
        menuImg: "public\Images\Starters\Olives.png",
        menuDescription: "Selection of olives.",
        menuPrice: "£4.99",
        menuCalories: 592,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            }
    },
    {
        menuId: 4,
        isFood: true,
        menuSection: "Starter",
        menuName: "Summer Salad",
        menuImg: "public\Images\Starters\Summer-salad.png",
        menuDescription: "Tomato and Mozzarella salad with pine nuts in an olive oil and balsamic vinegar dressing.",
        menuPrice: "£4.99",
        menuCalories: 620,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
            }
    },
    {
        menuId: 5,
        isFood: true,
        menuSection: "Starter",
        menuName: "Bruschetta",
        menuImg: "public\Images\Starters\Bruschetta.png",
        menuDescription: "Tomatoes and red onion on garlic toast.",
        menuPrice: "£4.99",
        menuCalories: 470,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
            }
    },
    {
        menuId: 6,
        isFood: true,
        menuSection: "Pizza",
        menuName: "Italiano Pizza",
        menuImg: "public\Images\Pizza\italiano-pizza.png",
        menuDescription: "Thin crust with mushrooms, pepperoni, peppers then topped with rocket",
        menuPrice: "£13.99",
        menuCalories: 975,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 7,
        isFood: true,
        menuSection: "Pizza",
        menuName: "Margarita Pizza",
        menuImg: "public\Images\Pizza\margarita-pizza.png",
        menuDescription: "Classic pizza tomato, cheese and basil",
        menuPrice: "£11.99",
        menuCalories: 793,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 8,
        isFood: true,
        menuSection: "Pizza",
        menuName: "Pepperoni Pizza",
        menuImg: "public\Images\Pizza\pepperoni-pizza.png",
        menuDescription: "Pizza topped with salty, crisp pepperoni.",
        menuPrice: "£15.99",
        menuCalories: 1083,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 9,
        isFood: true,
        menuSection: "Pizza",
        menuName: "Vegan Pizza",
        menuImg: "public\Images\Pizza\vegan-pizza.png",
        menuDescription: "Vegan cheese with tomatoes, mushrooms and topped with rocket.",
        menuPrice: "£11.99",
        menuCalories: 699,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
            }
    },
    {
        menuId: 10,
        isFood: true,
        menuSection: "Pasta",
        menuName: "Carbonara",
        menuImg: "public\Images\Pasta\Carbonara.png",
        menuDescription: "Spagetti with creamy carbonara sauce, made with parmasean, eggs and guanchale pork.",
        menuPrice: "£12.49",
        menuCalories: 1209,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 11,
        isFood: true,
        menuSection: "Pasta",
        menuName: "Chicken Alfredo",
        menuImg: "public\Images\Pasta\chicken-alfredo.png",
        menuDescription: "Tagliatelle with a Cream and cheese sauce, topped with grilled chicken",
        menuPrice: "£13.99",
        menuCalories: 1368,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 12,
        isFood: true,
        menuSection: "Pasta",
        menuName: "Penne Arrabiata",
        menuImg: "public\Images\Pasta\Penne-Arrabiata.png",
        menuDescription: "Penne with a spicy tomato sauce",
        menuPrice: "£10.99",
        menuCalories: 987,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
            }
    },
    {
        menuId: 13,
        isFood: true,
        menuSection: "Pasta",
        menuName: "Spagetti Bolognese",
        menuImg: "public\Images\Pasta\Spagetti-Bolognese.png",
        menuDescription: "Classic spagetti with a slow cooked tomato beef sauce with mushrooms",
        menuPrice: "£13.99",
        menuCalories: 1098,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 14,
        isFood: true,
        menuSection: "Dessert",
        menuName: "Chocolate Tart",
        menuImg: "public\Images\Dessert\chocolate tart.png",
        menuDescription: "Thin, buttery pastry filled with a rich thick chocolate ganache.",
        menuPrice: "£5.99",
        menuCalories: 709,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 15,
        isFood: true,
        menuSection: "Dessert",
        menuName: "Fruit Salad",
        menuImg: "public\Images\Dessert\fruit-salad.png",
        menuDescription: "Strawberry, Melon, Kiwi and grapes.",
        menuPrice: "£3.99",
        menuCalories: 367,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            }
    },
    {
        menuId: 16,
        isFood: true,
        menuSection: "Dessert",
        menuName: "Ice Cream",
        menuImg: "public\Images\Dessert\ice-cream.png",
        menuDescription: "Cold and Creamy Pistachio ice cream.",
        menuPrice: "£4.99",
        menuCalories: 499,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
            }
    },
    {
        menuId: 17,
        isFood: true,
        menuSection: "Dessert",
        menuName: "Panna Cotta",
        menuImg: "public\Images\Dessert\panna-cotta.png",
        menuDescription: "Vanilla geletan dessert.",
        menuPrice: "£5.99",
        menuCalories: 627,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: true,
            }
    },
    {
        menuId: 18,
        isFood: true,
        menuSection: "Dessert",
        menuName: "Tiramisu",
        menuImg: "public\Images\Dessert\tiramisu.png",
        menuDescription: "Coffee, chocolate and cream layered with lady fingers.",
        menuPrice: "£5.99",
        menuCalories: 699,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: false,
            }
    },
    {
        menuId: 19,
        isFood: false,
        menuSection: "Drinks",
        menuName: "Beer",
        menuImg: "public\Images\Drinks\beer.png",
        menuDescription: "Light and refreshing, 500ml",
        menuPrice: "£3.49",
        menuCalories: 206,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
            }
    },
    {
        menuId: 20,
        isFood: false,
        menuSection: "Drinks",
        menuName: "Coffee",
        menuImg: "public\Images\Drinks\coffee.png",
        menuDescription: "Coffee with almond milk.",
        menuPrice: "£2.99",
        menuCalories: 50,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            }
    },
    {
        menuId: 21,
        isFood: false,
        menuSection: "Drinks",
        menuName: "Cola",
        menuImg: "public\Images\Drinks\cola.png",
        menuDescription: "Cola with ice",
        menuPrice: "£1.99",
        menuCalories: 0,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            }
    },
    {
        menuId: 22,
        isFood: false,
        menuSection: "Drinks",
        menuName: "Lemonade",
        menuImg: "public\Images\Drinks\lemonade.png",
        menuDescription: "Still homemade lemonade",
        menuPrice: "£2.99",
        menuCalories: 400,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            }
    },
    {
        menuId: 23,
        isFood: false,
        menuSection: "Drinks",
        menuName: "Red Wine",
        menuImg: "public\Images\Drinks\red-wine.png",
        menuDescription: "Full bodied and fruity, 250ml",
        menuPrice: "£8.99",
        menuCalories: 267,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            }
    },
    {
        menuId: 24,
        isFood: false,
        menuSection: "Drinks",
        menuName: "Tea",
        menuImg: "public\Images\Drinks\tea.png",
        menuDescription: "English Breakfast tea",
        menuPrice: "£2.00",
        menuCalories: 30,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            }
    },
    {
        menuId: 25,
        isFood: false,
        menuSection: "Drinks",
        menuName: "White Wine",
        menuImg: "public\Images\Drinks\white-wine.png",
        menuDescription: "Dry and Crisp, 250ml",
        menuPrice: "£8.99",
        menuCalories: 300,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            }
    },
]

export default menuData;