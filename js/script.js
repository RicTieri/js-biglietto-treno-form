const buttonElement = document.querySelector('button')

buttonElement.addEventListener('click', function(){
  const userName = document.getElementById('user_name').value;
  const roadMapLength = parseFloat(document.getElementById('user_distance').value);
  const guestAge = parseFloat(document.getElementById('user_age').value);
  let tripCost = roadMapLength * 0.1976;
  let tripPrice;
  let discount;
  
  if (guestAge < 18) {
    tripPrice = tripCost * 0.8235
    discount = '17,65%'
  } else if (guestAge > 65) {
    tripPrice = tripCost * 0.4673
    discount = '53,27%'
  } else {
    tripPrice = tripCost
    discount = '0%'
  }
  console.log(tripPrice.toFixed(2)); 
  console.log(userName)
})


