
const contactform =document.querySelector('.contact-form')
console.log(contactform)
const email = document.getElementById('email')

contactform.addEventListener('submit', (e)=>{
  window.alert('email is send')
  e.preventDefault();
  let userEmail = email.value;

  return fetch('/email', {
    method:'post',
    headers:{
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userEmail})
  })




})