import * as Ramda from 'ramda';

function empty() {
  return {
    id: "",
    name: "Untitled List",
    cards: []
  };
}

function create(id, name, cards) {
  return { id, name, cards };
}

function findCard(cardId, list) {
  return Ramda.compose(
    Ramda.find(Ramda.propEq('id', cardId)),
    getCards
  )(list);
}

function getCards(list) {
  return list.cards;
}

function setCards(cards, list) {
  return { ...list, cards };
}

function getName(list) {
  return list.name;
}

function setName(name, list) {
  return { ...list, name };
}

function createCard(card, list) {
  return [...list.cards, card];
}

function deleteCard(cardId, list) {
  const cards = getCards(list);
  const newCards = Ramda.filter((card) => card.id !== cardId, cards);
  return setCards(newCards, list);
}

function getCardPosById(cardId, list) {
  const cards = getCards(list);
  const index = Ramda.findIndex(Ramda.propEq('id', cardId))(cards)
  return index > 0 ? index : undefined;
}

function isCardIndexUnderflow(index, _) {
  return index < 0;
}

function isCardIndexOverflow(index, list) {
  return index >= Ramda.length(getCards(list));
}

function getListWithoutCard(cardId, list) {
  return Ramda.compose(
    getCards,
    Ramda.curry(deleteCard(cardId))
  )(list);
}

function moveBetweenLists(cardId, pos, sender, receiver) {
  const card = findCard(cardId, sender);
  const newSender = deleteCard(cardId, sender);
  const newReceiver = Ramda.compose(
    Ramda.curry(moveCard(pos, cardId)),
    Ramda.curry(createCard(card)),
  )(receiver);
  return { sender: newSender, receiver: newReceiver };
}

function moveCard(pos, cardId, list) {
  const cardCurrentPos = getCardPosById(cardId, list);

  if (cardCurrentPos === undefined)
    return list;

  const cardsLength = Ramda.length(getCards(list));
  const withoutCard = getListWithoutCard(cardId, list);
  const card = findCard(cardId, list);

  if (isCardIndexOverflow(pos, list))
    return setCards([...withoutCard, card], list);

  if (isCardIndexUnderflow(pos, list))
    return setCards([card, ...withoutCard], list);

  const pre = Ramda.slice(0, pos, withoutCard);
  const after = Ramda.slice(pos, cardsLength, withoutCard);

  return setCards([...pre, card, ...after], list);
}


const publicFunctions = {
  empty,
  getCards,
  setCards,
  getName,
  setName,
  moveCard,
  findCard,
  createCard,
  deleteCard,
  moveBetweenLists,
  new: create,
};

export default publicFunctions;