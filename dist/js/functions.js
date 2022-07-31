document.getElementById('menuBurger').onclick = function() {
  this.classList.toggle('open');
  document.getElementById('overlay').classList.add('active');
  

}

document.getElementById('closeMenu').onclick = function() {
  document.getElementById('menuBurger').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}