let btn = document.querySelector("button");
let inp = document.querySelector("input");
let lst = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete Task";
    delbtn.classList.add("del");

    
    lst.appendChild(item);
    item.append(delbtn);
    item.classList.add("center");
    inp.value = "";
});

lst.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});