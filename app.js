var todolist = [];
var input = document.getElementById("input");
var list = document.getElementById("todolist");
var btn = document.getElementById("button");
btn.onclick = click;

function click() {
    todolist.push(input.value);
    console.log(todolist);
    input.value = "";
    showList();
}

function showList(){
    list.innerHTML = " ";

    todolist.forEach(function (n,i){
        list.innerHTML +=
        "<li>" +
        n +
        "<a onclick='editItem(" +
        i +
        ")'>Edit</a>" +
        "<a onclick='deleteItem("+
        i +")'>&times | </a></li>";

    });
}

{
    function deleteItem(i){
        todolist.splice(i, 1);
        showList();
    }

    function editItem(i){
        var newValue = prompt("Please insert your new value");
        todolist.splice(i,1,newValue);
        showList();
    }
}