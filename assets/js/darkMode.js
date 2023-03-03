// DARK MODE 
const darkMode = document.querySelector('.dark-button')


function toggle() {
  const body = document.body
  const header = document.querySelector('#header')
  const selects = document.getElementById('select-continent')
  const inputCountry = document.getElementById('input-country')
  const info = document.querySelectorAll('#info')
  const box = document.querySelector('.box')
  const btn = document.querySelector('#btn')


  body.classList.toggle("dark-mode")
  header.classList.toggle("dark-mode")
  selects.classList.toggle("dark-mode")
  info.forEach(x => x.classList.toggle('dark-mode'))
  inputCountry.classList.toggle("dark-mode")
  box.classList.toggle('dark-mode')
  btn.classList.toggle('dark-mode')
}

darkMode.addEventListener('click', toggle)

export default darkMode;