import React from "react";
import "./index.css";
import * as Ramda from "ramda";
import Card from "%component/Card"
import List from "%model/List";

function Component({cardList}) {
  const Cards = () =>
    Ramda.map(
      (card) => <Card key={card.id} card={card} list={cardList} />,
      List.getCards(cardList),
    );

  return (
    <div className="card-list">
      <div className="name">
        {List.getName(cardList)}
      </div>
      <div className="cards">
        <Cards />
      </div>
    </div>)
}

export default Component;