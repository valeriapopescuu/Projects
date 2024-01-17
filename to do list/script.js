const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")


function addTask(){
    if(inputBox.value === ''){
        alert("You must write something")
    }else{
        let li = document.createElement("li")
        li.innerHTML=inputBox.value//se inscrie valoarea
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML="\u00d7"//se creeaza un el care e semnul x
        li.appendChild(span)//se adauga in lista
    }
    inputBox.value = "";//După ce este adaugat el in listă, valoarea de la introd este resetata la spatiu gol
    saveData()//se apeleaza pt a salva modif

}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){//target- elementul HTML pe care s-a produs un eveniment, .tagName- furniz numele elementului din html pe care s a facut click
        e.target.classList.toggle("checked")//codul adauga clasa checked daca nu este si o sterge daca este
        saveData()
    }
    else if(e.target.tagName==="SPAN"){///daca apeasa pe span/delete
        e.target.parentElement.remove();//inlatura elementul parinte, adica randul de lista 
        saveData()
    }
},false)
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)//salveaza datele in sistem sub den de data
}
function  showTask(){
listContainer.innerHTML=localStorage.getItem("data")
}
showTask();