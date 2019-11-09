function empty(){
  return {
    id: "",
    name: "Untitled Card",
    description: "",
    checkLists: [],
    comments: [],
    cards: [],
    tags: [],
  };
}

function create(id, name, description, checkLists, comments, cards, tags){
  return {id, name, description, checkLists, comments, cards, tags};
}

function getName(card) {
  return card.name;
}

function setName(name, card) {
  return {...card, name};
}

function getDescription(card){
  return card.description;
}

function setDescription(description, card){
  return {...card, description};
}

function getCheckLists(card){
  return card.checkLists;
}

function setCheckLists(checkLists, card){
  return {...card, checkLists};
}

function getCards(card){
  return card.cards;
}

function setCards(cards, card){
  return {...card, cards: cards};
}

function getTags(card){
  return card.tags;
}

function setTags(tags, card){
  return {...card, tags};
}


const publicFunctions = {
  empty,
  getName,
  setName,
  getDescription,
  setDescription,
  getCheckLists,
  setCheckLists,
  getCards,
  setCards,
  getTags,
  setTags,
  new: create,
};

export default publicFunctions;