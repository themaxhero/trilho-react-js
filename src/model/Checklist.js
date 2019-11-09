import Ramda from "ramda";

function empty() {
  return {
    id: "",
    name: "Untitled List",
    taskList: []
  }
}

function create(id, name, taskList){
  return {id, name, taskList};
}

function getName(checkList) {
  return checkList.name;
}

function setName(name, checkList) {
  return {...checkList, name};
}

function getTaskList(checkList) {
  return checkList.taskList;
}

function setTaskList(taskList, checkList) {
  return {...checkList, taskList};
}

const publicFunctions = {
  empty,
  getName,
  setName,
  getTaskList,
  setTaskList,
  new: create,
};

export default publicFunctions;