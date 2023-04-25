import darkMode from "./darkMode.js"

const countryList = document.querySelector('.countries')
const selectContinent = document.querySelector('#select-continent')
const searchInput = document.querySelector('#input-country')
const backBtn = document.querySelector('.button')
const container = document.querySelector('.container')
const countryModal = document.querySelector('.country-modal')
const countryInfo = document.querySelector('.modal')

const displayCountries = (countries) => {


  countries.forEach((country) => {
    const { population, region, capital, flags: { png }, name: { common } } = country

    countryList.innerHTML += `
        <div class ="country">
          <img src="${png}" class="flag"></img>
          <div id="info" class="info">
          <h5>${common}</h5>
          <p><b>Population:</b> ${population}</p>
          <p><b>Region:</b> ${region}</p>
          <p><b>Capital:</b> ${capital}</p>
        </div>
    `
  })
  const elements = document.querySelectorAll('.country')
  for (const el of elements) {
    el.addEventListener('click', (e) => {
      container.classList.toggle('hidden')
      countryModal.classList.toggle('hidden')
      let text = e.target.nextElementSibling.children[0].innerHTML
      showDetailedCountry(text, countries)
    })
  }

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
    if (text.toLowerCase().includes(filter.toLowerCase())) {
      country.style.display = ''
    } else if (this.value === '') {
      country.style.display = ''
    } else {
      country.style.display = 'none'
    }

  })

})

const showDetailedCountry = (text, countries) => {

  countries.forEach((country) => {
    const countryName = country.name.common
    
    
    if (countryName === text) {
      
      const { population, region, subregion, capital, currencies, languages, flags: {png}, name: {official, common}, timezones, tld, borders   } = country
      console.log(country, borders)

      for(var currency in currencies) {
        if(currencies.hasOwnProperty(currency)) {
            var currencyValue = currencies[currency];
        }
      }

      for(var langName in languages) {
        if(languages.hasOwnProperty(langName)) {
            var langValue = languages[langName];        
        }
      }
  
      countryInfo.innerHTML += `
      <div class="country-flag">
      <img src="${png}" alt="">
      </div>
      <div>
      <div class="country-info">
        <h1 id="countryName">${common}</h1>
        <div class="info-left">
          <p><b>Native Name:</b>${official}</p>
          <p><b>Population:</b> ${population}</p>
          <p><b>Region:</b> ${region}</p>
          <p><b>Sub-Region:</b> ${subregion}</p>
          <p><b>Capital:</b> ${capital}</p>
        </div>
        <div class="info-right">
          <p><b>Timezone:</b> ${timezones}</p>
          <p><b>Top Level Domain:</b>${tld}</p>
          <p><b>Currencies:</b> ${currencyValue.name}</p>
          <p><b>Languages:</b> ${langValue}</p>
        </div>
       
      </div>
     
        <div class="borders"<p><b>Borders:</b>${borders}</p></div>
      </div>
      `
    }
  })
}

backBtn.addEventListener("click", () => {
  container.classList.toggle('hidden')
  countryModal.classList.toggle('hidden')
  countryInfo.innerHTML = ''
})

const getCountries = () => {
  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(displayCountries)
    .then(showDetailedCountry)

}

getCountries()
