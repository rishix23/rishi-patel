// var name = ['Ed', 'John'];

// var counter = 5;

// function sayName() {
//     var name = "Ed";
//     console.log(name);
// }

// sayName();

const list = {
    named: 'Shopping list',
    items: ['Milk', 'Cow']
};

// deconstructing 
const { named, items } = list;

console.log(named);

console.log(items);


const getName = (fname, lname) => fname + " " + lname;


console.log(getName('Rishi', 'Patel')); 

const shoppingList = ['Milk', 'Juice', 'Eggs', 'Butter']

shoppingList.forEach((item, i) => {
    console.log(`I have ${item} in my shopping list and it has an index of ${i}`)
});

// map returns updated item to the new shopping list
const newShoppingList = shoppingList.map((item => "new " + item));

newShoppingList.forEach((item, i) => {
    console.log(`I have ${item} in my shopping list and it has an index of ${i}`)
});

const filterList = shoppingList.filter((item => {
    return item === "Eggs"
}))

console.log(filterList)
console.log(shoppingList)
console.log(newShoppingList)


class ShoppingList{
    constructor(name, items){
        this.name = name
        this.items = items
    }

    sayList() {
        console.log(`${this.name} has the following in their shopping list: ${this.items}`)
    }
}

const myList = new ShoppingList('Rishi', ['Milk', 'Bread', 'Butter'])

myList.sayList()

class Product extends ShoppingList {
    constructor(name, items, amount, cost) {
        super(name, items)
        this.amount = amount
        this.cost = cost
    }
}

const newProduct = new Product('Rishi', ['Milk', 'Bread'], 3, 5)

console.log(newProduct.amount)

newProduct.sayList()
