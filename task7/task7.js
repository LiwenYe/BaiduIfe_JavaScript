var order = [];//遍历后的顺序数组
var timer = null;

//前序遍历 中-左-右
function preOrder(node) {
    if (node != null){
        order.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}

//中序遍历 左-中-右
function inOrder(node) {
    if (node!=null){
        inOrder(node.firstElementChild);
        order.push(node);
        inOrder(node.lastElementChild);
    }
}

//后序遍历 左-右-中
function postOrder(node) {
    if (node!=null){
        postOrder(node.firstElementChild);
        postOrder(node.lastElementChild);
        order.push(node);
    }
}

function changeBgColor() {
    var i = 0;
    order[i].style.backgroundColor = 'blue';
    timer = setInterval(function () {
        i++;
        if (i<order.length){
            order[i-1].style.backgroundColor = '#fff';
            order[i].style.backgroundColor = 'blue';
        } else{
            clearInterval(timer);
            order[i-1].style.backgroundColor = '#fff';
        }
    },500);
}

function initial() {
    //在执行当前遍历时可以取消上一遍历，使得不会出现多重遍历的情况。
    order = [];
    clearInterval(timer);
}

function starPreOrder() {
    var root = document.getElementById('root');
    initial();
    preOrder(root);
    changeBgColor();
}

function starInOrder() {
    var root = document.getElementById('root');
    initial();
    inOrder(root);
    changeBgColor();
}

function startPostOrder() {
    var root = document.getElementById('root');
    initial();
    postOrder(root);
    changeBgColor();
}