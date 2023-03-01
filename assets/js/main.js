const countryList = document.querySelector('.countries')
const selectContinent = document.querySelector('#select-continent')
const searchInput = document.querySelector('#input-country')
const darkMode = document.querySelector('.dark-button')




// DARK MODE 

darkMode.addEventListener('click', () => {
  let body = document.body
  let header = document.querySelector('#header')
  let selects = document.querySelectorAll('.inputs')

  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  selects.classList.toggle("dark-mode")
  
})

const displayCountries = (countries) => {
  
  countries.forEach((country) => {
    const {population, region, capital} = country
  
    countryList.innerHTML += `
        <div class ="country">
          <img src="${country.flags.png}" class="flag"></img>
          <div class="info">
          <h5>${country.name.common}</h5>
          <p><b>Population:</b> ${population}</p>
          <p><b>Region:</b> ${region}</p>
          <p><b>Capital:</b> ${capital}</p>
        </div>
    `
    countryList.addEventListener('click', () => {
      showDetailedCountry(capital)
    })
  })
}
// FILTER COUNTRIES 
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


// SELECT BY REGION

selectContinent.addEventListener('change', function () {
  const listCountries = document.querySelectorAll('.country')
  const filter = this.value

  listCountries.forEach((country) => {
    let text = country.lastChild.previousSibling.childNodes[5].innerHTML
    if(text.toLowerCase().includes(filter.toLowerCase())) {
      country.style.display = ''
    } else if (this.value === '') {
      country.style.display = ''
    } else {
      country.style.display = 'none'
    }
    
  })

})

const showDetailedCountry = (country) => {
  console.log(country)
} 


const getCountries = async () => {
  const data = await fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(displayCountries)
    .then(showDetailedCountry)
    
}

getCountries()