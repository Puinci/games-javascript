document.addEventListener('DOMContentLoaded',()=>{
//card options

const cardArray=[
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'blank',
        img:'images/blank.png'
    },
    {
        name:'blank',
        img:'images/blank.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'white',
        img:'images/white.png'
    },
    {
        name:'white',
        img:'images/white.png'
    }
]

const grid= document.querySelector('.grid');
const resultDisplay-document.querySelector('#result')
var cardsChosen=[];
var cardsChosenId=[];
var cardsWon=[];
//create the board
function createBoard(){
    for (let i=0; i<cardArray.length;i++){
        var card=document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}

//check for matches
function checkForMath(){
    var cards= document.querySelectorAll('img')
    const optionOneId=cardsChosenId[0]
    const optionTwoId=cardsChosenId[1]

    if (cardsChosen[0]===cardsChosen[1]){
        alert('you found a match')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src', 'images/black.png')
        cards[optionTwoId].setAttribute('src', 'images/black.png')
        alert('sorry, try it again')
    }
    cardsChosen=[]
    cardsChosenId=[]
    resultDisplay.textContent=cardsWon.length

    if(cardsWon.length=== cardArray.length/2){
        resultDisplay.textContent='congratulations'
    }
}


//flip your card
function flipCard(){
    var cardId=this.getAttribute('data-id')
    cardsChosen.push(cardId)
    this.setAttribute('src', cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length ===2){
        setTimeout(checkForMath,500)
    }
}

createBoard()

});