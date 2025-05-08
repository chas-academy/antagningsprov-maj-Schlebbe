

function uppg8(){

// skapa en array med fem person obkjet
// varje person objekt ska ha två properties, name och age

// skapa en fuktion som tar in en array som argument
// skapa ett konditionsvillkor som gör att det bara är namnet på personerna som är
//  över 30 år som skrivs ut i konsolen

// anropa funktionen och skicka med arrayen som argument

    var persons = [
        { name: "Jonas", age: 21 },
        { name: "John", age: 32 },
        { name: "Jane", age: 38 },
        { name: "Bob", age: 63 },
        { name: "Alice", age: 19 }
    ];

    function printNames(array) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].age > 30) {
                console.log(array[i].name);
            }
        }
    }

    printNames(persons);

}

module.exports = { uppg8 };