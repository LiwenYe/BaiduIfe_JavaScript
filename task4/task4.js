var num = document.getElementById("inputNum");
var ul = document.getElementById('display');
num.focus();

function addLeft() {
    if(num.value!='' && !isNaN(num.value)){
        var li = document.createElement('li');
        li.innerHTML = num.value;
        ul.insertBefore(li,ul.firstChild);
    }else if(num.value == ''){
        alert('输入内容不得为空！');
    }else{
        alert('请输入数字！');
    }
    
    num.focus();
    num.value = '';
}

function addRight() {
    if(num.value!='' && !isNaN(num.value)){
        var li = document.createElement('li');
        li.innerHTML = num.value;
        ul.appendChild(li);
    }else if(num.value == ''){
        alert('输入内容不得为空！');
    }else{
        alert('请输入数字！');
    }

    num.focus();
    num.value = '';
}

function deletLeft() {
    var li = ul.firstChild;
    while(li.nodeType != 1){
        li = get_NextSibling(li);
    }
    ul.removeChild(li);
}

function get_NextSibling(n) {
    var m = n.nextSibling;
    if(m&&m.nodeType != 1){
        m = m.nextSibling;
    }
    return m;
}

function deletRight() {
    var li = ul.lastChild;
    while(li.nodeType != 1){
        li = get_PreviousSibling(li);
    }
    ul.removeChild(li);
}

function get_PreviousSibling(n) {
    var m = n.previousSibling;
    if(m && m.nodeType!=1){
        m = m.previousSibling;
    }
    return m;
}