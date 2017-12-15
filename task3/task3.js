function getData() {
    var data = [];
    var list = document.getElementById("source").getElementsByTagName("li");

    for(var i = 0 ; i < list.length ; i++){
        var city = list[i].innerHTML.split('空气质量：')[0];
        var num = list[i].innerHTML.substr(10,2);
        data.push([city,num]);
    }

    return data;
}

function sortAqiData(data) {
    data.sort(function (a, b)
    {
        return a[1] - b[1];
    })
    return data;
}

function render(data) {
    var ul = document.getElementById("resort");
    var arr = ["一","二","三","四","五","六","七"];

    for(var i = 0 ; i < data.length ; i++){
        var li = document.createElement("li");
        li.innerHTML = '第' + arr[i] +'名：' + data[i][0] + "  空气质量：" + '<b>' + data[i][1] + '</b>';
        ul.appendChild(li);
    }
}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);

    var button = document.getElementById('sort-btn');
    button.disabled = 'true';
}

function init() {
    var button = document.getElementById('sort-btn');
    button.onclick = function(){
        btnHandle();
    }
}

init();