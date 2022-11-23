const menuData = [
    {
        menuId: 1,
        menuSection: "Starter",
        menuName: "Prawn Cocktail",
        menuImg: "https://images.unsplash.com/photo-1608176439783-556c7f59f263?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        menuDescription: "Prawns in rose marie sauce on a bed of lettuce. Served with bread and butter.",
        menuPrice: "4.99",
        menuCalories: 569,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            },
        isInBasket: false,
    },
    {
        menuId: 2,
        menuSection: "Starter",
        menuName: "Arancini",
        menuImg: "https://images.unsplash.com/photo-1632778140142-d62dee6e124c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        menuDescription: "Deep fried risotto balls.",
        menuPrice: "3.99",
        menuCalories: 698,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 3,
        menuSection: "Starter",
        menuName: "Olives",
        menuImg: "https://images.unsplash.com/photo-1622341357129-c460d41da93d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        menuDescription: "Selection of olives.",
        menuPrice: "4.99",
        menuCalories: 592,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 4,
        menuSection: "Starter",
        menuName: "Caprese Salad",
        menuImg: "https://images.unsplash.com/photo-1529312266912-b33cfce2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Tomato and Mozzarella salad with pine nuts in an olive oil and balsamic vinegar dressing.",
        menuPrice: "4.99",
        menuCalories: 620,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 5,
        menuSection: "Starter",
        menuName: "Bruschetta",
        menuImg: "https://plus.unsplash.com/premium_photo-1664971883349-8d84928253a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
        menuDescription: "Tomatoes and red onion on garlic toast.",
        menuPrice: "4.99",
        menuCalories: 470,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 6,
        menuSection: "Pizza",
        menuName: "Sourdough Pizza",
        menuImg: "https://images.unsplash.com/photo-1474600056930-615c3d706456?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
        menuDescription: "Sourdough crust topped with olives, pepperoni and rocket",
        menuPrice: "13.99",
        menuCalories: 975,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 7,
        menuSection: "Pizza",
        menuName: "Margarita Pizza",
        menuImg: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Classic pizza tomato, cheese and basil",
        menuPrice: "11.99",
        menuCalories: 793,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 8,
        menuSection: "Pizza",
        menuName: "Pepperoni Pizza",
        menuImg: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        menuDescription: "Pizza topped with salty, crisp pepperoni.",
        menuPrice: "15.99",
        menuCalories: 1083,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 9,
        menuSection: "Pizza",
        menuName: "Vegan Pizza",
        menuImg: "https://images.unsplash.com/photo-1562103608-104fa5589661?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Vegan cheese with tomatoes, mushrooms and topped with rocket.",
        menuPrice: "11.99",
        menuCalories: 699,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 10,
        menuSection: "Pasta",
        menuName: "Carbonara",
        menuImg: "https://images.unsplash.com/photo-1627207644206-a2040d60ecad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Spagetti with creamy carbonara sauce, made with parmasean, eggs and guanchale pork.",
        menuPrice: "12.49",
        menuCalories: 1209,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 11,
        menuSection: "Pasta",
        menuName: "Chicken Alfredo",
        menuImg: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menuDescription: "Tagliatelle with a Cream and cheese sauce, topped with grilled chicken",
        menuPrice: "13.99",
        menuCalories: 1368,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 12,
        menuSection: "Pasta",
        menuName: "Penne Arrabiata",
        menuImg: "https://images.unsplash.com/photo-1630151317550-db97d275ce2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menuDescription: "Penne with a spicy tomato sauce",
        menuPrice: "10.99",
        menuCalories: 987,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 13,
        menuSection: "Pasta",
        menuName: "Spagetti Bolognese",
        menuImg: "https://images.unsplash.com/photo-1572441713132-c542fc4fe282?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        menuDescription: "Classic spagetti with a slow cooked tomato beef sauce with mushrooms",
        menuPrice: "13.99",
        menuCalories: 1098,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 14,
        menuSection: "Dessert",
        menuName: "Chocolate Tart",
        menuImg: "https://images.unsplash.com/photo-1616031036658-1f2d8258eca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1161&q=80",
        menuDescription: "Thin, buttery pastry filled with a rich thick chocolate ganache.",
        menuPrice: "5.99",
        menuCalories: 709,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 15,
        menuSection: "Dessert",
        menuName: "Fruit Salad",
        menuImg: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Strawberry, Melon, Kiwi and grapes.",
        menuPrice: "3.99",
        menuCalories: 367,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 16,
        menuSection: "Dessert",
        menuName: "Ice Cream",
        menuImg: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80",
        menuDescription: "Cold and Creamy Vanilla ice cream.",
        menuPrice: "4.99",
        menuCalories: 499,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 17,
        menuSection: "Dessert",
        menuName: "Panna Cotta",
        menuImg: "https://images.unsplash.com/photo-1613505411792-208b15f862b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menuDescription: "Vanilla geletan dessert topped with strawberries.",
        menuPrice: "5.99",
        menuCalories: 627,
        menuDietryInformation: {
            isVegetarian: false,
            isVegan: false,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 18,
        menuSection: "Dessert",
        menuName: "Tiramisu",
        menuImg: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
        menuDescription: "Coffee, chocolate and cream layered with lady fingers.",
        menuPrice: "5.99",
        menuCalories: 699,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: false,
            isGlutenFree: false,
            },
            isInBasket: false,
    },
    {
        menuId: 19,
        menuSection: "Drinks",
        menuName: "Beer",
        menuImg: "https://images.unsplash.com/photo-1618183479302-1e0aa382c36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Light and refreshing, 500ml",
        menuPrice: "3.49",
        menuCalories: 206,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: false,
            },
            isInBasket: false,
    },    
    {
        menuId: 20,
        menuSection: "Drinks",
        menuName: "Red Wine",
        menuImg: "https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
        menuDescription: "Full bodied and fruity, 250ml",
        menuPrice: "8.99",
        menuCalories: 267,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            },
            isInBasket: false,
    },

    {
        menuId: 21,
        menuSection: "Drinks",
        menuName: "White Wine",
        menuImg: "https://images.unsplash.com/photo-1597905722448-a1df7c00000a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Dry and Crisp, 250ml",
        menuPrice: "8.99",
        menuCalories: 300,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 22,
        menuSection: "Drinks",
        menuName: "Coffee",
        menuImg: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1337&q=80",
        menuDescription: "Coffee with almond milk.",
        menuPrice: "2.99",
        menuCalories: 50,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            },
            isInBasket: false,
    },    
    {
        menuId: 23,
        menuSection: "Drinks",
        menuName: "Tea",
        menuImg: "https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        menuDescription: "English Breakfast tea",
        menuPrice: "2.00",
        menuCalories: 30,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 24,
        menuSection: "Drinks",
        menuName: "Cola",
        menuImg: "https://images.unsplash.com/photo-1621690233252-dd5f404dda2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Cola with ice",
        menuPrice: "1.99",
        menuCalories: 0,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
    {
        menuId: 25,
        menuSection: "Drinks",
        menuName: "Lemonade",
        menuImg: "https://images.unsplash.com/photo-1623084921164-4a8c5c37a912?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        menuDescription: "Still homemade lemonade",
        menuPrice: "2.99",
        menuCalories: 400,
        menuDietryInformation: {
            isVegetarian: true,
            isVegan: true,
            isGlutenFree: true,
            },
            isInBasket: false,
    },
]

export default menuData;