$(function () {
    $(".search-icon").click(function () {
        var searchText=$(".search-text").val();
        console.log(searchText)
        if(searchText=="氯沙坦钾"){
            location.href="search1.html";
        }else if(searchText=="苯磺酸氨氯地平"){
            location.href="search2.html";
        }else if(searchText==""){
            alert("请输入搜索内容！")
        }else {
            location.href="search-no.html";
        }
    })
})