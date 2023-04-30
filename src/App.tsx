import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'

import './App.css'
import Cards from './Cards'

type Direction = 'left' | 'right' | 'up' | 'down'

function App() {
  const [ithacaCards, setIthacaCards] = useState([Cards[0]])
  // const [lastDirection, setLastDirection] = useState<Direction>('right')

  const swiped = (direction: Direction, cardNumber: number) => {
    if (direction === 'up') {
      return
    }
    console.log('removing: ' + cardNumber)
    var currCard = Cards[cardNumber]
    if (currCard != null) {
      var nextCard = currCard[direction]
      if (nextCard != null) {
        setIthacaCards([Cards[nextCard]])
        // ithacaCards.push(Cards[nextCard])
      }
    }
    // setLastDirection(direction)
  }

  const outOfFrame = (cardNumber: number) => {
    console.log(cardNumber + ' left the screen!')
  }

  return <div className='app'>
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>המסע לאיתקה</h1>
      <div className='cardRow'>
        <div className='nextCard'>
            {ithacaCards[0].left}
          </div>
        
        <div className='cardContainer'>
          {ithacaCards.map((card) =>
            <TinderCard
              className='swipe'
              key={card.num}
              onSwipe={(dir) => swiped(dir, card.num)}
              onCardLeftScreen={() => outOfFrame(card.num)}
              swipeRequirementType="position"
              swipeThreshold={100}
              preventSwipe={
                card.right != null ? 
                  (
                    card.left != null ? 
                    (
                      card.down != null ? ['up'] : ['up', 'down']
                    ) : 
                    ['up', 'down', 'left']
                  ) : 
                  ['up', 'down', 'left', 'right']
              }
            >
              {/* <img src={require(`images/${card.img}`).default} className='card' alt='' /> */}
              <div style={{ backgroundImage: 'url(/' + card.img + ')' }} className='card'>
                {/* <h3>{card.img}</h3> */}
              </div>
            </TinderCard>
          )}
        </div>
        <div className='nextCard'>
            {ithacaCards[0].right}
          </div>
      </div>
      <div className='cardRow'>
        <div className='nextCard'>
          {ithacaCards[0].down}
        </div>
      </div>
      {/* {
        lastDirection ?
          <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />
      } */}
    </div>
  </div>
}

export default App
