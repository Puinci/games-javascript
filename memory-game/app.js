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
    const optionOneId=cardsChosenId
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