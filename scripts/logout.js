let showSignUp = () => {
  console.log('Sign Up');
}
let businessNavbarNavItems = document.querySelectorAll('.businessNavbar');
let logout = () => {
  localStorage.removeItem('currentUser');
  window.location.reload();
}