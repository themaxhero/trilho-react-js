function empty() {
    return {
      id: "",
      name: "Untitled Tag",
      color: "",
    };
  }
  
  function create(name, color){
    return {name, color};
  }
  
  function getName(tag){
    return tag.name;
  }
  
  function setName(name, tag){
    return {...tag, name};
  }
  
  function getColor(tag){
    return tag.color;
  }
  
  function setColor(color, tag){
    return {...tag, color};
  }
  
  function getColor(tag){
    return tag.color;
  }
  
  function setColor(color, tag){
    return {...tag, color};
  }
  
  
  const publicFunctions = {
    empty,
    getName,
    setName,
    getColor,
    setColor,
    new: create,
  };
  
  export default publicFunctions;