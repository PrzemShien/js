'use strict';

//-----gwiazdki--------------------------------------------------
//var n;
//var star = '*';
//for(var i = 0; i < 10; i++){
//    (i%2 === 1) ? n = 4 : n = 9;
//    for(var j = 0; j <= n; j++)
//        document.write(star);
//        document.write('<br>');
//}

//-----n argumentów funkcji--------------------------------------
var sum = 0;
function bezParam(){
    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
console.log(sum);
}
bezParam(1, 5, 1, 5, 10, 10);


//-----nawigacja-------------------------------------------------
var ulist = '<ul>\n';
var llist = '<li>';
var tabnav = ['start', 'firma', 'produkt', 'galeria', 'kontakt'];
for(var i=0; i<5; i++){
    ulist += llist + '<a href="">' + tabnav[i] + "</a>" + "</li>\n";
}
var all_navigation = ulist + '</ul>';
document.getElementById('navigation').innerHTML = all_navigation;
