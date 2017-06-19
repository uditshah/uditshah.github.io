
  var cartBooks = [];
var cartItemsCnt = 0;
var pageBooks;
var dealBooks;
  var ourData;
var featuredBooks;
var sortBy = 'AZ';
var currHero = 0;

$(window).on('load',function(){




      var ourRequest=new XMLHttpRequest()
      ourRequest.open('GET','https://raw.githubusercontent.com/uditshah/iwd/master/deals.json')
      ourRequest.onload=function(){
         ourData=JSON.parse(ourRequest.responseText)
        var testString="";
    }
    ourRequest.send()



	if(localStorage.getItem("Cartitems")===null){
		cartBooks = [];
	}else{
		cartBooks = JSON.parse(localStorage.getItem("Cartitems"));
		cartBooks.forEach(function(book){
			cartItemsCnt = cartItemsCnt + book.qty;
		});

	}
});


function addBook(bookid){
	var bookInCart = false;
  bookid--;
  var book = ourData[bookid];

	cartBooks.forEach(function(cartBook){
		if(cartBook.wineId === book.wineId){
			cartBook.qty = cartBook.qty + 1;
			bookInCart=true;
		}
	})

	if(!bookInCart){
		book.qty = 1;
		cartBooks.push(book);
	}
	localStorage.setItem("Cartitems",JSON.stringify(cartBooks));
	cartItemsCnt = cartItemsCnt + 1;
	$('.cart-count').html(cartItemsCnt);
  viewqty()
}
