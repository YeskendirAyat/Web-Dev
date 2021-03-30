// localStorage.clear();
document.addEventListener("DOMContentLoaded",saving());

function newTask(inputValue,data){

  // console.log(typeof(inputValue)+" "+inputValue);
  if(inputValue.trim() == '') {
    alert("Type something!");
    return;
  }
  let li=document.createElement("li");
  let inpuCheck=document.createElement("input");
  let btn=document.createElement("button");
  let paragraph=document.createElement("p");
  inpuCheck.setAttribute("type","checkbox");
  inpuCheck.setAttribute("onclick","checkedTask(this)")
  paragraph.innerHTML=inputValue;
  li.appendChild(inpuCheck);
  li.appendChild(paragraph);
  btn.classList.add("removeButton");
  // console.log(btn);
  btn.setAttribute("onclick","remove(this)");
  li.appendChild(btn);
  document.querySelector(".List").appendChild(li);
  if(data===true){
    saveSession(inputValue);
  }
}
function saveSession(inputValue){
  let list=getStorage();
  list.push(inputValue);
  localStorage.setItem("list",JSON.stringify(list));
}

function remove(element){
  let name=element.parentNode.childNodes[1].innerHTML;
  removeLocal(name);
  element.parentNode.remove();
}
function removeLocal(name){
  let list=getStorage();
  list.splice(list.indexOf(name),1);
  localStorage.setItem("list",JSON.stringify(list));
}
function checkedTask(element){
  // console.log(element.parentNode.childNodes[1]);
  if(element.checked){
    element.parentNode.childNodes[1].style.textDecoration="line-through";
    element.parentNode.childNodes[1].style.color="grey";

  }
  else{
    element.parentNode.childNodes[1].style.textDecoration="none";
    element.parentNode.childNodes[1].style.color="black";
  }
}
function getStorage(){
  let list;
  if(localStorage.getItem("list")==null){
    list=[];
  }
  else{
    list=JSON.parse(localStorage.getItem("list"));
  }
  return list;
}
function saving(){
  let list=getStorage();
  list.forEach(function(task){
    newTask(task,false);
  });
}
function addTask(){
  let inputValue=document.querySelector(".inputClass");
  newTask(inputValue.value,true);
  document.querySelector(".inputClass").value="";
}