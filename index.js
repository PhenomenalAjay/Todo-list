var a = document.getElementById("listcontainer")
var b = document.getElementById("inputvalue");
function add() {
    var listitem = document.createElement("li")
    listitem.innerHTML = b.value+"<button onclick='deleteitem(event)'>delete</button>";
    a.append(listitem);
}
function deleteitem(event) {
    event.target.parentElement.remove()
}  