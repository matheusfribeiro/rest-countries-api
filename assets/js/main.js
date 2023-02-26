const countryList = document.querySelector('.countries')
let searchInput = document.querySelector('#input-country')

import countries from './data.json' assert {type: 'json'}

countries.forEach((country) => {
  const {name, population, region, capital} = country

  countryList.innerHTML += `
      <div class ="country">
        <img src="${country.flags.png}" class="flag"></img>
        <div class="info">
        <h5>${name}</h5>
        <p><b>Population:</b> ${population}</p>
        <p><b>Region:</b> ${region}</p>
        <p><b>Capital:</b> ${capital}</p>
      </div>
  `
  
})

searchInput.addEventListener('input', () => {
  const filter = searchInput.value.toLowerCase()
  const listCountries = document.querySelectorAll('.country')
  
  listCountries.forEach((country) => {
    let text = country.lastChild.previousSibling.childNodes[1].innerHTML
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      country.style.display = ''
    } else {
      country.style.display = 'none'
    }
    
  })
})



