function empty() {
  return {
    id: "Untitled Board",
    cardLists: [],
    background: "http://getwallpapers.com/wallpaper/full/e/e/6/403660.jpg",
    members: [],
  }
}

function create(cardLists, background, members) {
  return { cardLists, background, members };
}

function getCardLists(board) {
  return board.cardLists;
}

function setCardLists(cardLists, board) {
  return { ...board, cardLists };
}

function getBackground(board) {
  return board.background;
}

function setBackground(background, board) {
  return { ...board, background };
}

function getMembers(board) {
  return board.members;
}

function setMembers(members, board) {
  return { ...board, members };
}

const publicFunctions = {
  empty,
  getCardLists,
  setCardLists,
  getBackground,
  setBackground,
  getMembers,
  setMembers,
  new: create,
};

export default publicFunctions;