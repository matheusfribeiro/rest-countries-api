const countryList = document.querySelector('.countries')
const selectContinent = document.querySelector('#select-continent')
const searchInput = document.querySelector('#input-country')
const darkMode = document.querySelector('.dark-button')
const backBtn = document.querySelector('.button')
const container = document.querySelector('.container')
const countryModal = document.querySelector('.country-modal')
const countryInfo = document.querySelector('.modal')




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
    const { population, region, capital, flags: { png }, name: { common } } = country


    countryList.innerHTML += `
        <div class ="country">
          <img src="${png}" class="flag"></img>
          <div class="info">
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
      //const countryNative = country.name.native.ell.official
      const { population, region, subregion, capital, topLevelDomain, currencies, languages, flags: {png}  } = country
      
      console.log(country, currencies)
      const test = JSON.stringify(currencies)
      console.log(test)

      countryInfo.innerHTML += `
      <div class="country-flag">
      <img src="${png}" alt="">
      </div>
      <div class="country-info">
        <h1 id="countryName">${countryName}</h1>
        <div class="info-left">
          <p><b>Native Name:</b> }</p>
          <p><b>Population:</b> ${population}</p>
          <p><b>Region:</b> ${region}</p>
          <p><b>Sub-Region:</b> ${subregion}</p>
          <p><b>Capital:</b> ${capital}</p>
        </div>
        <div class="info-right">
          <p><b>Top Level Domain:</b> ${topLevelDomain}</p>
          <p><b>Currencies:</b> </p>
          <p><b>Languages:</b> ${languages}</p>
        </div>
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