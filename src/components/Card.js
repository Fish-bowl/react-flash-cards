import React from 'react';

class Card extends React.Component {
  changeText(id){
    document.getElementById(card).addEventListener('click', function(){
      card.innerHTML = 'new card'
    })
  }

  render() {
    return (
      <div 
      id="card" 
      MenuTrigger style={{ cursor: 'pointer' }}>
      this is the first (1) side of the flash card
      </div>
    )
  }
}

export default Card;