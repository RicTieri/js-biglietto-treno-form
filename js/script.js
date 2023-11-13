const buttonElement = document.querySelector('button')

buttonElement.addEventListener('click', function () {
  const userName = document.getElementById('user_name').value;
  const roadMapLength = parseFloat(document.getElementById('user_distance').value);
  const guestAge = parseFloat(document.getElementById('user_age').value);
  let tripCost = roadMapLength * 0.1976;
  let tripPrice;
  let discount;

  if (guestAge < 18) {
    tripPrice = tripCost * 0.8235
    discount = 'Sconto under18'
  } else if (guestAge > 64) {
    tripPrice = tripCost * 0.4673
    discount = 'Sconto over65'
  } else {
    tripPrice = tripCost
    discount = 'Tariffa base'
  }
  console.log(tripPrice.toFixed(2));
  console.log(userName)

  document.getElementById('passenger').innerHTML = userName;
  document.getElementById('offer').innerHTML = discount;
  document.getElementById('cp_code').innerHTML = Math.floor(Math.random() * 99999)+1;
  document.getElementById('carriage').innerHTML = Math.floor(Math.random() * 10);
  document.getElementById('lastprice').innerHTML = tripPrice.toFixed(2);
})


