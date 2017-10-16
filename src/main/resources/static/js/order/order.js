$.getJSON('http://localhost:8080/js/order/productsSample.json', function(data) {
    
}) .done(function() {
    alert(data);
});


function Product(props) {
	  return (
			  <p> Coca Cola  </p>
	  );
}

function Products(props) {
	  return (
			  <div className="col-md-12"> 
			  	<Product />
			  </div>
	  );
}

function Category(props) {
	  return (
	    <div>
	    	<h4>Bebidas</h4> 
	    	<Products />
	    </div>
	  );
}


function Categories(props) {
  return (
    <div className="row">
    	<div className="col-md-4"> 
    		<Category />  
    	</div>
    </div>
  );
}


function Cart(props) {
	  return (
	    <div className="row">

	    </div>
	  );
	}

function App(props) {
  return (
    <div className="container-fluid row">
      <div className="col-md-9">
        <Categories />
      </div>
      <div className="col-md-3">
        <Cart/>
      </div>
    </div>
  );
}


ReactDOM.render(
		   <App/>,
		  document.getElementById('root')
		);
