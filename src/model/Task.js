function empty() {
  return {
    id: "",
    name: "Untitled Task",
    checked: false,
  };
}

function create(name, checked){
  return {name, checked};
}

function getName(task){
  return task.name;
}

function setName(name, task){
  return {...task, name};
}

function getChecked(task){
  return task.checked;
}

function setChecked(checked, task){
  return {...task, checked};
}

function getColor(task){
  return task.color;
}

function setColor(color, task){
  return {...task, color};
}


const publicFunctions = {
  empty,
  getName,
  setName,
  getChecked,
  setChecked,
  new: create,
};

export default publicFunctions;