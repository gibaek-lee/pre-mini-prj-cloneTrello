//private
function initListText(element){
  //document.getElementById('addList').value = '+Add another list';
  element.value = '+Add another list';
}
function makeNode(element){
  var node = document.createElement("DIV");
  //var text = document.getElementById('addList').value;
  var text = element.value;
  var textnode = document.createTextNode(text);
  node.appendChild(textnode);
  return node;
}
function setListBoxStyle(node){
  node.style.backgroundColor = "lightgray";
  node.style.margin = "4px";
  //node.style.position = "absolute";//draggable html element
}
function clearListText(element){
  //document.getElementById('addList').value = '';
  element.value = '';
}
//public
function addListBox(element){
  if(element.value === '+Add another list')return;
  var newNode = makeNode(element);
  //document.getElementById("listBoxContainer").appendChild(newNode);//appendChilde를 목적지에!!
  element.parentNode.childNodes[3].appendChild(newNode);
  setListBoxStyle(newNode);
  initListText(element);
}
