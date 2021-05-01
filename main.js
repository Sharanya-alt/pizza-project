
menu_list_array=["chicken pizza",
                 "cheese pizza",
                 "asss pizza",];

function getmenu(){
   var box;
    box="<ol class='menulist'>"
    
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        box=box+'<li>'+menu_list_array[i]+'</li>'
    }
     box=box+"</ol>";
    console.log(box);
document.getElementById("display_menu").innerHTML=box;
}
function add_item(){
    var box;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    box="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        box=box+'<div class="card">'+'<img src="images/pizzaImg.png"/>'+menu_list_array[i]+'</div>'
    }
    box=box+"</section>"
    document.getElementById("display_adddedmenu").innerHTML=box;
    
}