import React from "react";
import "./index.css";
import Ramda from "ramda";
import { EmptyComponent } from "%component/common";
import Card from "%model/Card";
import Tag from "%model/Tag";

function Tag({tag}) {
  return (
    <div className="in-line-tag"
      key={tag.id}
      style={`{ background-color: ${Tag.getColor(tag)} }`}>
      {Tag.getName(tag)}
    </div>
  )
}

function Checkbox({checkboxEnabled}) {
  return checkboxEnabled
    ? (<input className="checkbox" />)
    : (<EmptyComponent />);
}

function ActionButtons({card, list}) {
  const variables = {
    cardId: card.id,
    listId: list.id
  }
  const [move, { loading, error, data }] = useMutation(MOVE_CARD);

  return (
    <div className="actions">
      <button
        className=""
        onClick={() => { }}>
        Merge
      </button>
      <button
        className="fa fa-arrow-up"
        onClick={() => move({ ...variables, direction: "up" })} />
      <button
        className="fa fa-arrow-down"
        onClick={() => move({ ...variables, direction: "down" })} />
    </div>
  )
}

function Component({card, list}) {
  const renderTags = ({tag}) => <Tag tag={tag} />;
  const Tags = () => Ramda.map(renderTags, Card.getTags(card));
  return (
    <div className="card-on-list">
      <div className="tags">
        <Tags />
      </div>
      <div>
        <Checkbox />
        <div className="name">{Card.getName(card)}</div>
        <ActionButtons card={card} list={list} />
      </div>
    </div>
  );
}

export default Component;