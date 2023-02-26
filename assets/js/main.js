const countryDiv = document.querySelector('.countries')

import countries from './data.json' assert {type: 'json'}

countries.forEach((country) => {
  const {name, population, region, capital} = country

  countryDiv.innerHTML += `
      <div class ="country">
        <div class="flag"></div>
        <div class="info">
        <h5>${name}</h5>
        <p>Population: ${population}</p>
        <p>Region: ${region}</p>
        <p>Capital: ${capital}</p>
      </div>
  `
})
