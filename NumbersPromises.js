const $favoriteNumber = $("#favoriteNumber")
const $firstList = $('#firstList')
const $secondList = $('#secondList')

const baseAPI = 'http://numbersapi.com/'
let favoriteNumber = (axios.get(`${baseAPI}8`))

favoriteNumber.then(data => $favoriteNumber.append(`<span>${data.data}</span>`))

fourNumberCalls =[]

for (let i =1; i <5; i++){
    fourNumberCalls.push(
        axios.get(`${baseAPI}${i}`)
    )
}

Promise.all(fourNumberCalls)
    .then(data => 
      data.forEach(fact => $firstList.append(`<li>${fact.data}</li>`))  )


favoritefourNumberCalls =[]

for (let i =1; i <5; i++){
    favoritefourNumberCalls.push(
    axios.get(`${baseAPI}8`)
    )
    }
      
 Promise.all(favoritefourNumberCalls)
    .then(data => 
      data.forEach(fact => $secondList.append(`<li>${fact.data}</li>`))  )
