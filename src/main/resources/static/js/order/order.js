

class Product extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {product: props.product}
	  }
	
	handleClick(){
		this.props.addProduct(this.props.product)
	}
	
	render(){
		 return (
			  <div>
			  <p className="santacatalina-product-name"> {this.state.product.name.toUpperCase()} (${this.state.product.price}) 
			  <button className="btn btn-default btn-circle" onClick={this.handleClick.bind(this)}><span className="glyphicon glyphicon-plus glyphicon-notop"></span> </button></p>  
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
	    fetch('/api/products/search/findByCategoryId?id='+this.props.category.id)
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
		                <Product product={ product } addProduct={this.props.addProduct}   />
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
	    	<h4 className="santacatalina-font">{this.state.category.name.toUpperCase()}</h4> 
	    	<Products category={this.state.category} addProduct={this.props.addProduct} />
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
                <Category category={ category } addProduct={this.props.addProduct}   />
                </div>
              })
    		}
    </div>
  );
	}
}


class CartItem extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = { item: props.item }
	    
	}
	handleAdd(){
		this.props.addProduct(this.state.item.product)
	}
	handleRemove(){
		this.props.removeProduct(this.state.item.product)
	}
	componentWillReceiveProps(props){
		this.setState({ item: props.item })
	}
	render(){ return (
	    <div className="santacatalina-product-name" >
	    {this.state.item.product.name.toUpperCase()}: {this.state.item.quantity}
		  <button className="btn btn-default btn-circle" onClick={this.handleAdd.bind(this)}><span className="glyphicon glyphicon-plus glyphicon-notop"></span> </button>
		  <button className="btn btn-danger btn-circle" onClick={this.handleRemove.bind(this)}><span className="glyphicon glyphicon-minus glyphicon-notop"></span> </button>

    </div>)
	}
}

class CartItems extends React.Component {
	constructor(props){
		super(props)
		this.state = {cartItems: props.cartItems}
	}
	componentWillReceiveProps(props){
		this.setState({cartItems: props.cartItems})
	}
	render(){
		if (this.state.cartItems.length == 0){
			return                 <div >  
       			Aún no ha iniciado el pedido
       			</div>
		}else{
			return (
			<div className="row">
    	{
    		
    		this.state.cartItems.map((item) => {
                return <div key={item.id} className="col-md-12">  
                <CartItem item={ item } addProduct={this.props.addProduct} removeProduct={this.props.removeProduct} />
                </div>
              })
    		}
    	</div>)
		}
	}
}

class OrderButton extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = { cartItems: props.cartItems }
	}
	componentWillReceiveProps(props){
		this.setState({cartItems: props.cartItems})
	}
	render(){
		return (
				<div className="centred">
				<button data-toggle="modal" data-target="#confirmModal" className='btn btn-default santacatalina-button'>PEDIR</button>
				<ConfirmModal cartItems={this.state.cartItems}/>
				</div>
		)
	}
}

class ConfirmModal extends React.Component {
	constructor(props){
		super(props)
		this.state = {cartItems: props.cartItems}
	}
	componentWillReceiveProps(props){
		this.setState({cartItems: props.cartItems})
	}
	render(){
		return(
		<div id="confirmModal" className="modal fade" role="dialog">
		  <div className="modal-dialog">

		    <div className="modal-content">
		      <div className="modal-header">
		        <button type="button" className="close" data-dismiss="modal">&times;</button>
		        <h4 className="modal-title santacatalina-font">CONFIRMACIÓN</h4>
		      </div>
		      <div className="modal-body row">
		      	{
		   		this.state.cartItems.map((item) => {
	                return <div key={item.id} className="col-md-12">  
	                <p className="santacatalina-product-name"> {item.product.name.toUpperCase()}: {item.quantity}  </p>
	                </div>
	              })
	    		}
		      </div>
		      <div className="modal-footer">
		      <button type="button" className="btn btn-primary" >Confirmar</button>
		        <button type="button" className="btn btn-default" data-dismiss="modal">Volver</button>
		      </div>
		    </div>

		  </div>
		</div>
		)
	}
	
}

class Cart extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = { cartItems: props.cartItems }
	}
	componentWillReceiveProps(props){
		this.setState({cartItems: props.cartItems})
	}
	render(){ 
		return (
	    <div className="row">
    	<h4 className="santacatalina-font">PEDIDO</h4>
    	 <CartItems cartItems={this.state.cartItems} addProduct={this.props.addProduct} removeProduct={this.props.removeProduct}/>
    	 {this.state.cartItems.length>0?<OrderButton cartItems={this.state.cartItems}/>:''}
    	</div>
    	)
	}
	
}


class Navbar extends React.Component {
	constructor(props){
		super(props)
	}
	render(){
		return (

      <div className="container">
        <nav className="navbar navbar-primary">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#"><img height="50px" src="/assets/images/Logo enSantaCatalina-02.png" alt="Logo Ensantacatalina" />
              </a>
            </div>

          </div>
        </nav>
      </div>

  )
	}
}

class App extends React.Component {
	constructor(props) {
	    super(props)
	    this.state = { cartItems: [] }
	    this.addProduct = this.addProduct.bind(this);
	    this.removeProduct = this.removeProduct.bind(this);
	}
	
	addProduct(product){
		var cartItems = this.state.cartItems.slice()
		
		var exists = false
		for (var i=0;i<cartItems.length;i++){
			if(cartItems[i].id == product.id){
				cartItems[i].quantity = cartItems[i].quantity + 1
				exists = true
			}
		}
		if(!exists){
			cartItems.push({id: product.id,product: product, quantity: 1})
		}
		this.setState({cartItems: cartItems})
	}
	
	removeProduct(product){
		var cartItems = this.state.cartItems.slice()
		
		for (var i=0;i<cartItems.length;i++){
			if(cartItems[i].id == product.id){
				cartItems[i].quantity = cartItems[i].quantity - 1
			}
			if(cartItems[i].quantity <= 0){
				cartItems.splice(i,1)
			}
		}
		this.setState({cartItems: cartItems})
	}
	    
	render(){
	  return (
	    <div className="container-fluid row">
	    <Navbar/>
	      <div className="col-md-9">
	        <Categories addProduct={this.addProduct}/>
	      </div>
	      <div className="col-md-3 left-border" >
	        <Cart cartItems={this.state.cartItems} addProduct={this.addProduct} removeProduct={this.removeProduct}/>
	      </div>
	    </div>
	  );
	}
}


ReactDOM.render(<App/>,document.getElementById('root'));



