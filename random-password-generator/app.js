let passwordBox = document.querySelector('#password');
const alertBox = document.querySelector('.alertBox'); 

function getPassword() {
  const chars ='0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?<>:{}[]';
  const passwordLength = 12;
  let password = '';

  for(let i=0; i<passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber+1);
  }
  passwordBox.value = password;
  console.log(password)
  alertBox.innerHTML = `Copy Complete! <br/><br/> New Password : ${password}`;
}

function copyPassword() {
  passwordBox.select();
  passwordBox.setSelectionRange(0,9999);
  document.execCommand('copy');
  alertBox.classList.toggle('active');
  setTimeout(function(){
    alertBox.classList.toggle('active');
  },1500)
}