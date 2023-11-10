const roadMapLength = parseInt(prompt('Quanti chilometri vuoi percorrere?'));
const guestAge = parseInt(prompt('Quanti anni hai?'));
let tripCost = roadMapLength * 0.21;
let tripPrice;
let discount;

if (guestAge < 18) {
  tripPrice = tripCost * 0.8
  discount = '20%'
} else if (guestAge > 65) {
  tripPrice = tripCost * 0.6
  discount = '40%'
} else {
  tripPrice = tripCost
  discount = '0%'
}

document.getElementById('guest_age').innerHTML = 'Età passeggiero: ' + guestAge;
document.getElementById('trip_length').innerHTML = 'La distanza da percorrere è ' + roadMapLength + ' km';
document.getElementById('trip_cost').innerHTML = 'Il totale lordo è ' + tripCost.toFixed(2) + '\u20AC';
document.getElementById('trip_discount').innerHTML = 'Lo sconto applicato è ' + discount;
document.getElementById('trip_price').innerHTML = 'Il totale effettivo è ' + tripPrice.toFixed(2) + '\u20AC';
