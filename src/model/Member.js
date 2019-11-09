function empty() {
  return {
    id: "",
    name: "Unknown Member",
    avatar: "https://www.redbankplazamedical.com.au/wp-content/uploads/2017/05/silhouette-11-300x277.jpg",
  }
}

function create(id, name, avatar) {
  return { id, name, avatar };
}

function getName(member) {
  return member.name;
}

function setName(name, member) {
  return { ...member, name };
}

function getAvatar(member) {
  return member.avatar;
}

function setAvatar(avatar, member) {
  return { ...member, avatar };
}

const publicFunctions = {
  empty,
  getName,
  setName,
  getAvatar,
  setAvatar,
  new: create,
};

export default publicFunctions;