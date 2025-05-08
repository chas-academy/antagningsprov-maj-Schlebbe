

function uppg9 (){
    // skapa en funktion som heter sort och tar in en array av siffror som argument
    // i funktionen du loopa igenom arrayen och kolla med en if-sats om  talet är jämt eller udda
    // i if-sattsen skriv ut i konsolen resultatet
    // resultatet ska loggas i formatet: talet och sen ordet "jämt" eller "udda"

    // anropa funktionen och skicka med en array som argument

  var numbers = [5, 12, 7, 10, 20, 9, 11];
    sort(numbers);
    
    function sort(array) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                console.log(array[i]);
                console.log("jämt");
            } else {
                console.log(array[i]);
                console.log("udda");
            }
        }
    }
}

uppg9();
module.exports = { uppg9 };