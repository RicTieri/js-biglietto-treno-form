const roadMapLength = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
const guestAge = parseInt(prompt('Quanti anni hai?'));
let tripCost = roadMapLength * 0.21;
let discount;
document.getElementById('guest_age').innerHTML = 'Età passeggiero è ' + guestAge;
document.getElementById('trip_length').innerHTML = 'I km da percorrere sono ' + roadMapLength;
document.getElementById('trip_cost').innerHTML = 'Il totale lordo è ' + tripCost.toFixed(2);

if (guestAge < 18){
  tripCost = tripCost * 0.8
  discount = '20%'
} else if(guestAge > 65){
  tripCost = tripCost * 0.6
  discount = '40%'
} else{
  tripCost = tripCost
  discount = '0%'
}

document.getElementById('trip_discount').innerHTML = 'Lo sconto applicato è ' + discount;
document.getElementById('trip_discount').innerHTML = 'Il totale effettivo è ' + tripCost.toFixed(2);
 