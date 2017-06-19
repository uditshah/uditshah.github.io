var lecinfo=document.getElementById('lecturers')



function renderHTML(data){
  var testString="";
for( i=0; i<data.length;i++){
  testString+="<div style='width:30%'><img src='image/"+data[i].imageUrl+"'/><p> "+data[i].wname + "</p></div>"
  testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='removeBook(this.id)'>Remomve From Cart</button>";

}
lecinfo.insertAdjacentHTML('beforeend',testString)
}

function removeproduct(id){

  var json = JSON.parse(localStorage["Cartitems"]);
for (i=0;i<json.length;i++)
            if (json[i].wineId == id) json.splice(i,1);
localStorage["Cartitems"] = JSON.stringify(json);

viewtotal();
 location.reload();
}



function updatecart(id){
var qty=document.getElementsByName(id)[0].value;

  var cartitem = JSON.parse(localStorage.Cartitems);
for (var i = 0; i < cartitem.length; i++) {
   if(id == cartitem[i].wineId){
       cartitem[i].qty =qty ;
       break;
   }
}
localStorage.setItem("Cartitems", JSON.stringify(cartitem));
location.reload();
}


function viewcart(){
  viewtotal();
  var ourData = JSON.parse(localStorage.getItem("Cartitems"));

var testString;
testString+='<table width="100%" border="0" cellspacing="0" cellpadding="0">';

  for( i=0; i<ourData.length;i++){
    testString+="<tr><td width='20%'><img width='100px' src='image/"+ourData[i].imageUrl+"'/><td width='45%'> "+ourData[i].wname + "</h2>"+ourData[i].description + "<p> <strong>Price: </strong>"+ourData[i].price + "</p></td>"

testString+="<td width='35%'><input style='width: 70px;    margin-right: 10px;margin-left: 10px;' onchange='updatecart(this.name)' type='number' name='"+ourData[i].wineId+"' value='"+ourData[i].qty+"' />"
    testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='removeproduct(this.id)'>Remove</button></td></tr>";

}
testString+="</table>"
document.getElementById('lecturers').innerHTML=testString;
}

function viewqty(){
  var subtotal=0;

  var ourData = JSON.parse(localStorage.getItem("Cartitems"));
var testString=0;
  for( i=0; i<ourData.length;i++){
    subtotal=ourData[i].qty;
    testString= +testString + +subtotal;
}
document.getElementById('scart').innerHTML=""+testString;
}


function viewtotal(){
  var subtotal=0;

  var ourData = JSON.parse(localStorage.getItem("Cartitems"));
var testString=0;
  for( i=0; i<ourData.length;i++){
    subtotal=ourData[i].qty*ourData[i].price;
    testString=testString+subtotal;
}
document.getElementById('stotal').innerHTML="Total: $"+testString;
}


function viewpopular(){
viewonsale();
  var ourRequest=new XMLHttpRequest()
  ourRequest.open('GET','https://raw.githubusercontent.com/uditshah/iwd/master/deals.json')
  ourRequest.onload=function(){
    var ourData=JSON.parse(ourRequest.responseText)
    var testString="";
  for( i=0; i<ourData.length;i++){


        if(ourData[i].popularity=='high'){
          testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
      testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='addBook(this.id)'>add to cart</button></div>";


    }
  }
  document.getElementById('popular').innerHTML=testString;

  }
  ourRequest.send()
viewonsale();
}

function viewonsale(){

  var ourRequest=new XMLHttpRequest()
  ourRequest.open('GET','https://raw.githubusercontent.com/uditshah/iwd/master/deals.json')
  ourRequest.onload=function(){
    var ourData=JSON.parse(ourRequest.responseText)
    var testString="";
  for( i=0; i<ourData.length;i++){


        if(ourData[i].onsale=='yes'){
          testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
      testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='addBook(this.id)'>add to cart</button></div>";


    }
  }
  document.getElementById('onsale').innerHTML=testString;

  }
  ourRequest.send()

}
function viewproduct(type){

    var ourRequest=new XMLHttpRequest()
    ourRequest.open('GET','https://raw.githubusercontent.com/uditshah/iwd/master/deals.json')
    ourRequest.onload=function(){
      var ourData=JSON.parse(ourRequest.responseText)
      var testString="";
    for( i=0; i<ourData.length;i++){

      if(type=='white'){
        if(ourData[i].category=='White Wine'){


          testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
      testString+="<button id="+ourData[i].wineId+" class='btn btn-danger'  onclick='addBook(this.id)'>add to cart</button></div>";

    }
    }
    if(type=='viewall'){

    testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='addBook(this.id)'>add to cart</button></div>";
  }
    if(type=='red'){
      if(ourData[i].category=='Red Wine'){
        testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
    testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='addBook(this.id)'>add to cart</button></div>";
  }
}  if(type=='rose'){
      if(ourData[i].category=='Rose Wine'){
        testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
    testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='addBook(this.id)'>add to cart</button></div>";
}
}  if(type=='sparkling'){
      if(ourData[i].category=='All Sparkling'){
        testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
    testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='addBook(this.id)'>add to cart</button></div>";
}

  }
  if(type=='ondeal'){
        if(ourData[i].onsale=='yes'){
          testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
      testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='addBook(this.id)'>add to cart</button></div>";
  }

    }
    if(type=='popular'){
          if(ourData[i].popularity=='high'){
            testString+="<div class='col-md-4 snip1418'><img src='image/"+ourData[i].imageUrl+"'/><h3> "+ourData[i].wname + "</h3><p> "+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p>"
        testString+="<button id="+ourData[i].wineId+" class='btn'  onclick='addBook(this.id)'>add to cart</button></div>";
    }

      }
    }
document.getElementById('lecturers').innerHTML=testString;

  }
  ourRequest.send()
}

function atoz(){


    var ourRequest=new XMLHttpRequest()
    ourRequest.open('GET','https://raw.githubusercontent.com/uditshah/iwd/master/deals.json')
    ourRequest.onload=function(){
      var ourData=JSON.parse(ourRequest.responseText)
      var testString="";
      for( k=0; k<ourData.length;k++){

    for( i=0; i<ourData.length;i++){

    if(ourData)
      testString+="<div style='width:30%'><img src='image/"+ourData[i].imageUrl+"'/><h2> "+ourData[i].wname + "</h2><p> <strong>Description </strong>"+ourData[i].description + "</p><p> <strong>Price: </strong>"+ourData[i].price + "</p><p> <strong>Type </strong>"+ourData[i].category + "</p></div>"



    }
  }
    lecinfo.insertAdjacentHTML('beforeend',testString)

  }
  ourRequest.send()
}
