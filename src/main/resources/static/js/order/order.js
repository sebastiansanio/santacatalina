


class Product extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = props
	  }
	render(){
		 return (
			  <div>
			  <label> {this.state.product.name} (${this.state.product.price})</label>  
			  <button className="btn btn-primary btn-xs">
			  	Lo quiero
			  </button>
			  </div>
		 );
	}
	
}


class Products extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = { products: [] }
	  }
	componentWillMount() {
	    fetch('/api/products/search/findByCategoryId?id=1')
	      .then((response) => {
	        return response.json()
	      })
	      .then((productsJson) => {
	        this.setState({ products: productsJson._embedded.products.filter(product => product.active == true)})
	      })
	  }
	render(){
		if (this.state.products.length == 0){
			return                 <div >  
       			Cargando productos...
       			</div>
			
		}else{
			
		  return (
				  <div className="col-md-12"> 
				  {
		    		this.state.products.map((product) => {
		    			return <div key={product.id} >  
		                <Product product={ product }   />
		                </div>
		              })
				  }
				  </div>
		  );
		}}
}


class Category extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = props
	  }

	render(){
	  return (
	    <div>
	    	<h4>{this.state.category.name}</h4> 
	    	<Products category={this.state.category}/>
	    </div>
	  );
	}
}


class Categories extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = { categories: [] }
	  }
	
	componentWillMount() {
	    fetch('/api/categories')
	      .then((response) => {
	        return response.json()
	      })
	      .then((categoriesJson) => {
	        this.setState({ categories: categoriesJson._embedded.categories.filter(category => category.active == true)})
	      })
	  }
	render(){
		if (this.state.categories.length == 0){
			return                 <div >  
       			Cargando categorías...
       			</div>
			
		}else
		
  return (
    <div className="row">
    	{
    		
    		this.state.categories.map((category) => {
                return <div key={category.id} className="col-md-4">  
                <Category category={ category }   />
                </div>
              })
    		}
    </div>
  );
	}
}


class Cart extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = { items: [] }
	  }
	render(){ return (
	    <div className="row">
    	<h4>
    		Pedido
	    </h4>
    </div>)
	}
	
}




class App extends React.Component {
	render(){
	  return (
	    <div className="container-fluid row">
	      <div className="col-md-9">
	        <Categories/>
	      </div>
	      <div className="col-md-3">
	        <Cart/>
	      </div>
	    </div>
	  );
	}
}


ReactDOM.render(  <App/>,  document.getElementById('root'));



