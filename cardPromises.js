const $draw = $('#draw')
const $drawArea = $('#drawArea')

let newDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

newDeck
    .then (data => axios.get(`https://deckofcardsapi.com/api/deck/${data.data.deck_id}/draw/`))
    .then (card => console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`))

let secondDeck = axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')

cardDrawn =[]

axios.get('https://deckofcardsapi.com/api/deck/new/draw')
    .then(data => {
        cardDrawn.push (data.data.cards[0])
        let deckID = data.data.deck_id
        return axios.get(`https://deckofcardsapi.com/api/deck/${deckID}/draw/`)
    })
    .then(data => {
        cardDrawn.push(data.data.cards[0])

    })
    .then(data  => {for (i = 0; i<2; i++){
        console.log(`${cardDrawn[i].value} of ${cardDrawn[i].suit}`)}})


$draw.on('click', drawACard)
let deck_id = null

newDeck
    .then(data => {
        deck_id = data.data.deck_id
    })
function drawACard(){
    axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/`)
    .then (data => {
        let card = `${data.data.cards[0].value} of ${data.data.cards[0].suit}`
        $drawArea.append(`<div>${card}</div>`)

        if (data.data.remaining === 0){
            $draw.remove()
        }

    })


}
