const roadMapLength = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
const guestAge = parseInt(prompt('Quanti anni hai?'));
let tripCost = roadMapLength * 0.21;

if (guestAge < 18){
  tripCost = tripCost * 0.8
} else if(guestAge > 65){
  tripCost = tripCost * 0.6
} else{
  tripCost = tripCost
}

