function scuberGreetingForFeet(distance){
  console.log(distance)
  if(distance < 400) {
  return 'This one is on me!'} 
  if(distance > 400 && distance < 2000) {
  return 'That will be twenty bucks.'}
  else if(distance <= 2500) {
  return 'I will gladly take your thirty bucks.'}
  else if (distance > 2500) {
  return 'No can do.'}
}

function ternaryCheckCity(location){
  if (location === 'NYC') {
    return 'Ok, sounds good.'
  }
  else if (location === 'Pittsburgh') {
    return 'No go.'
  }
}

function switchOnCharmFromTip(money){
  switch(money){
  case "generous": 
  return 'Thank you so much.';
  break;
  case "not as generous":
  return 'Thank you.'
  break;
  default: 'thanks for everything'
  return 'Bye.'
}
}