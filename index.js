
// 1 Užduotis
console.log('-- Pirma užduotis --');
function multiplication(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number'){
        console.log('Įveskite skaičius')
    } else {
        console.log(a * b);
    }
};

multiplication(7, 8);

// 2 Užduotis
console.log('- Antra užduotis --');
const selectedNumber = 9;

switch (selectedNumber){
    case 1:
    case 2:
    case 3:
    case 4:
        console.log("Skaičius žemas");
        break;
    case 5:
    case 6:
        console.log("Skaičius vidutinis");
        break;
    case 7:
        console.log("Skaičius aukščiau vidurkio");
        break;
    case 8:
    case 9:
    case 10:
        console.log("Skaičius aukštas");
        break;
    default: console.log("Įveskite skaičių nuo 1 - 10");
}

// Trečia užduotis
console.log('-- Trečia užduotis --');
if(selectedNumber === 1 || selectedNumber === 2 || selectedNumber === 3 || selectedNumber === 4){console.log("Skaičius žemas");}
    else if (selectedNumber === 5 || selectedNumber === 6) {console.log("Skaičius vidutinis");} 
        else if(selectedNumber === 7) { console.log("Skaičius aukščiau vidurkio")}
            else if(selectedNumber === 8 || selectedNumber === 9 || selectedNumber === 10) {console.log("Skaičius aukštas")}
                else console.log("Įveskite skaičių nuo 1 - 10");

