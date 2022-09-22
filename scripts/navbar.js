import MainNavbar from '../components/MainNavbar.js';
import BusinessNavbar from '../components/BusinessNavbar.js';
let prevContent = document.body.innerHTML;
// MainNavbar();
document.body.innerHTML = MainNavbar() + prevContent;
prevContent = document.querySelector('body>.container.bg-white');
prevContent.innerHTML = BusinessNavbar() + prevContent.innerHTML;
let userBtn = document.querySelector('#userBtn');

userBtn.addEventListener('mouseover', () => {
  let userBtnDropdownMenu = document.querySelector('#userBtnDropdownMenu');
  userBtnDropdownMenu.classList.add('show');
});
userBtn.addEventListener('mouseleave', () => {
  let userBtnDropdownMenu = document.querySelector('#userBtnDropdownMenu');
  userBtnDropdownMenu.addEventListener('mouseleave', () => {
    showMenu(userBtnDropdownMenu);
  });
});
let showMenu = (userBtnDropdownMenu) => {
  userBtnDropdownMenu.classList.remove('show');
}

// Creating Modal Components
import createModal from '../components/Modals.js';
// creating user 
class User {
  constructor(contact) {
    this.contact = contact;
  }
}
let generateOTP = (otpVerify) => {
  if (otpVerify.length > 0) {
    otpVerify = '';
  }
  for (let i = 0; i < 4; i++) {
    let num = Math.round(Math.random() * 10);
    if (num === 10) {
      num--;
    }
    otpVerify += num;
  }
  return otpVerify;
}
// console.log(createModal);
let loginModalSection = document.getElementById('loginModalSection');
loginModalSection.innerHTML = createModal('loginModal', 'loginModalLabel', 'Sign In', 'Mobile Number', 'phoneNumber', 'mobileInput', 'Enter Your Mobile Number', 'loginModalNumberToOTPBtn', 'otpModal');
let loginModalNumberToOTPBtn = document.getElementById('loginModalNumberToOTPBtn');
let contact;
let otpVerify = ''
loginModalNumberToOTPBtn.addEventListener('click', () => {
  // console.log('Hi');
  contact = document.getElementById('mobileInput').value;
  // console.log(contact);
  otpVerify = generateOTP(otpVerify);
  console.log('otpVerify:', otpVerify)
  alert("otp:",otpVerify)
});
let otpModalSection = document.getElementById('otpModalSection');
otpModalSection.innerHTML = createModal('otpModal', 'otpModalLabel', 'Login with One Time Password (OTP)', `Enter the 4 digit One Time Password (OTP) sent to your Mobile Number`, 'otp', 'otpInput', 'X-X-X-X', 'otpModalButton', '');
let otpModalButton = document.getElementById('otpModalButton');
otpModalButton.addEventListener('click', () => {
  let otp = document.getElementById('otpInput').value;
  // console.log(otp);
  if (otp === otpVerify) {
    let userExists = false;
    let userTemp = JSON.parse(localStorage.getItem('users')) || [];
    let user;
    userTemp.forEach((el) => {
      if (contact === el.contact) {
        userExists = true;
        user = el;
      }
    });
    if (userExists) {
      // console.log(user);
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.reload();
    }
    else {
      alert('user does not exist');
    }

  }
  else {
    alert('Invalid OTP');
  }
});

let signupModal = createModal('signupModal', 'signupModalLabel', 'Sign Up', 'Enter your mobileNumber', 'phoneNumber', 'signupPhoneNumber', 'Enter your phone number', 'signupModalButton', 'signupOtpModal');
let signupModalSection = document.getElementById('signupModalSection');
signupModalSection.innerHTML = signupModal;
let signupOtpModalSection = document.getElementById('signupOtpModalSection');
signupOtpModalSection.innerHTML = createModal('signupOtpModal', 'signupOtpModalLabel', 'Sign with One Time Password (OTP)', `Enter the 4 digit One Time Password (OTP) sent to your Mobile Number`, 'otp', 'otpInputSignup', 'X-X-X-X', 'signupOtpModalButton', '');
let signupModalButton = document.getElementById('signupModalButton');
signupModalButton.addEventListener('click', () => {
  contact = document.getElementById('signupPhoneNumber').value;
  otpVerify = generateOTP(otpVerify);
  console.log(otpVerify);
  alert(otpVerify);
});
let signupOtpModalButton = document.getElementById('signupOtpModalButton');
signupOtpModalButton.addEventListener('click', () => {
  let otp = document.getElementById('otpInputSignup').value;
  if (otp === otpVerify) {
    let user = new User(contact);
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.reload();
  }
});
