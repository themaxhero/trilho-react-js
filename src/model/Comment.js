function empty() {
  return {
    id: "",
    name: "",
    content: "",
    authorAvatar: "",
    authorName: "",
  }
}

function create() {
  return { id, name, content, authorAvatar, authorName };
}

function getName(comment) {
  return comment.name;
}

function setName(name, comment) {
  return { ...comment, name };
}

function getContent(comment) {
  return comment.content;
}

function setContent(content, comment) {
  return { ...comment, content };
}

function getAuthorAvatar(comment) {
  return comment.authorAvatar;
}

function setAuthorAvatar(authorAvatar, comment) {
  return { ...comment, authorAvatar };
}

function getAuthorName(comment) {
  return comment.authorName;
}

function setAuthorName(authorName, comment) {
  return { ...comment, authorName };
}

const publicFunctions = {
  empty,
  getName,
  setName,
  getContent,
  setContent,
  getAuthorAvatar,
  setAuthorAvatar,
  getAuthorName,
  setAuthorName,
  new: create,
};

export default publicFunctions;