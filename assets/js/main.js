let http = new XMLHttpRequest()

http.open('get', 'data.json', true)

http.send()

http.onload = function() {

  if (this.readyState == 4 && this.status == 200) {
    let countries = JSON.parse(this.responseText)

    let output = ''

    for (let country of countries) {
      
    }
  }


}