var button = document.getElementsByTagName("button");
var ul = document.getElementById('display');
var input = document.getElementById('inputNum');
input.focus();

//左侧入
button[0].onclick = function () {
    if (!isNaN(parseInt(input.value)) && input.value != " ") {
        var li = document.createElement('li');
        li.innerHTML = input.value;li.onclick = function () {
            this.parentNode.removeChild(this);
        };
        ul.insertBefore(li, ul.firstChild);
        input.value = "";
        input.focus();
    }else if (input.value == "") {
        alert("输入不可为空！");
        input.value = " ";
        input.focus();
    }else{
        alert("请输入数字!");
        input.value = " ";
        input.focus();
    }
}
//右侧入
button[1].onclick = function () {
    if (!isNaN(parseInt(input.value)) && input.value != " ") {
        var li = document.createElement('li');
        li.innerHTML = input.value;
        //给li添加点击属性，点击时删除自身。
        li.onclick = function () {
            this.parentNode.removeChild(li);
        };
        ul.appendChild(li);
        input.value = "";
        input.focus();
    }else if (input.value == "") {
        alert("输入不可为空！");
        input.value = " ";
        input.focus();
    }else{
        alert("请输入数字!");
        input.value = " ";
        input.focus();
    };
}
//左侧出
button[2].onclick = function () {
    var li = ul.firstChild;
    //判断ul的第一个子节点是否为元素节点
    while (li && li.nodeType!=1){
        li =li.nextSibling;
    }
    ul.removeChild(li);

}

//右侧出
button[3].onclick = function () {
    var li = ul.lastChild;
    //判断ul的最后一个子节点是否为元素节点
    while (li && li.nodeType!=1){
        li = li.previousSibling;
    }
    ul.removeChild(li)
}

