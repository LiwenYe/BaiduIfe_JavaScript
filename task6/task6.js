var input = document .getElementsByTagName('textarea')[0];
var ul = document.getElementById("display");

var list = ul.getElementsByTagName('li');
var searchMsg = document.getElementsByTagName('input')[0];

function leftIn() {
    if (input.value!="") {
        var str = input.value.replace(/[^0-9a-zA-z]/g," ");
        var arr = str.split(" ");
        for (var i=arr.length-1;i>=0;i--) {
            if (arr[i]!="") {
                var li = document.createElement('li');
                li.innerHTML = arr[i];
                ul.insertBefore(li, ul.firstChild);
            }
        }
    }
}

function rightIn() {
    if (input.value != "") {
        var str = input.value.replace(/[^0-9a-zA-Z]/g, " ");
        var arr = str.split(" ");
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] != "") {
                var li = document.createElement('li');
                li.innerHTML = arr[i];
                ul.appendChild(li);
            }
        }
    }
}

function leftOut() {
    var first = ul.firstChild;
    while (first.nodeType != 1){
        first = first.nextSibling;
    }
    ul.removeChild(first);
}

function rightOut() {
    var last = ul.lastChild;
    while (last.nodeType != 1){
        last = last.previousSibling;
    }
    ul.removeChild(last);
}

function search() {
    for (var i=0;i<list.length;i++){
        var d = list[i].innerHTML;
        var search = searchMsg.value;
        list[i].innerHTML = d.replace(new RegExp(search,'g'),function(match){
            return match.fontcolor('yellow');
        });
        if (d.indexOf(search) >= 0){
            list[i].style.backgroundColor = 'black';
        }
}
}