var Navbar = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Santa Catalina</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="/#/about">About</a></li>
                            <li className=""><a href="/#/product">Productos</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/#/login">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});

var About = React.createClass({
    render: function() {
        return (
        		
            <div className="container">
            <br></br>
    		<br></br>
    		<br></br>
    		<br></br>
    		<blockquote>
    		<h2>Quienes somos</h2>
    		</blockquote>
    		
                <h4>Los Maorí de Nueva Zelanda usan las palabras Kia Kaha para definir fuerza y bienestar. Es reconocer que el camino es más importante que el destino. Que el esfuerzo que uno pone en el camino es más importante que los resultados logrados y de que siempre se puede llegar un poco mas lejos.
                Nosotros nos sentimos fuertemente identificados con este concepto. Somos un grupo de personas apasionadas por la tecnología, amantes de los desafíos y comprometidos con la construcción de software innovador, escalable y mantenible, basándonos en las necesidades y el negocio de nuestros clientes. </h4>
            </div>
        );
    }
});

var TermsOfService = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>Terms of Service</h1>
            </div>
        );
    }
});

var PrivacyPolicy = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>Privacy Policy</h1>
            </div>
        );
    }
});

var Footer = React.createClass({
    render: function() {
        return (
            <footer>
                <div className="row">
                    <div className="col-md-6 text-left">
                        <p>&copy; Kia Kaha 2017</p>
                    </div>
                    <div className="col-md-6 text-right">
                        <a href="/#/terms">Terms of Service</a> | <a href="/#/privacy">Privacy Policy</a>
                    </div>
                </div>
            </footer>
        );
    }
});

// The RouteHandler element in this component is what handles all of our
// routing, nestling our content within the
// overall screen layout.
var Layout = React.createClass({
    render: function() {
        return (
            <div id="main">
                <Navbar/>
                <RouteHandler/>
                <div className="container">
                    <hr/>
                    <Footer/>
                </div>
            </div>
        );
    }
});

	    // Arranco la parte de productos
var AbmProduct = React.createClass({
	 
	  loadProductsFromServer: function () {
	    var self = this;
	    $.ajax({
	      url: "http://localhost:8080/api/products"
	    }).then(function (data) {
	      self.setState({products: data._embedded.products});
	    });
	  },
	 
	  getInitialState: function () {
	    return {products: []};
	  },
	 
	  componentDidMount: function () {
		    this.loadProductsFromServer();
	  },
	 
	  render() {
		    return ( <ProductList products={this.state.products}/> );
		  }
	});

var ProductList = React.createClass({
	  getInitialState: function() {
		    return {display: true };
		  },
		  handleFilter() {
			    var self = this;
			    alert(self.props.name);
			    $.ajax({
			      url: self.props.product._links.self.href,
			      type: 'GET',
			      success: function(result) {
			        self.setState({display: false});
			      },
			      error: function(xhr, ajaxOptions, thrownError) {
			        toastr.error(xhr.responseJSON.message);
			      }
			    });
			  },
		  render: function() {
		    if (this.state.display==false) return null;
		    else return (
		    		<div className="container form-group" >
		    		<br></br>
		    		<br></br>
		    		<br></br>
		    		<table>
			    		<tbody>
			    			<tr>
			    				<td><label for="name">Nombre</label></td>
			    				<td><input type="text" class="form-control" name="name" id="name"/></td>
			    			</tr>
			    			<tr>
		    					<td><label for="status">Estado</label></td>
		    					<td><input type="text" class="form-control" id="status"/></td>
		    				</tr>
		    				<tr>
			    				<td>
			    		          <button className="btn btn-info" onClick={this.handleFilter}>Filtrar</button>
			    		        </td>
	    					</tr>
			    		</tbody>
		    		</table>
		    			<ProductTable products={this.props.products}/>
		    		</div>
		    );
		  }
		}); 
		    
var Product = React.createClass({
	  getInitialState: function() {
	    return {display: true };
	  },
	  render: function() {
	    if (this.state.display==false) return null;
	    else return (
	      <tr>
	      	<td>{this.props.product.name}</td>
	      	<td>{this.props.product.description}</td>
	        <td>{this.props.product.price}</td>
	        <td>{this.props.product.status}</td>
	      </tr>
	    );
	  }
	}); 

var ProductTable = React.createClass({
  render: function() {
    var rows = [];
    this.props.products.forEach(function(product) {
      rows.push(<Product product={product} />);
    });
    return (
     <div className="container">
     <br></br>
     <br></br>
     <br></br>
  <table className="table table-striped">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Descripción</th>
        <th>Precio</th>
        <th>Estado</th>
      </tr>
    </thead>
    <tbody>{rows}</tbody>
  </table>
</div>);
  }
});

//Genero las rutas para poder navegar
var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
    
var routes = (
	    // The Layout handler specified in the base route is inherited down the
		// chain. This is important.
	    <Route name="root" handler={Layout} path="/">
	        <Route handler={About} path="about"/>
	        <Route handler={AbmProduct} path="product"/>
	        <Route handler={TermsOfService} path="terms"/>
	        <Route handler={PrivacyPolicy} path="privacy"/>
	    </Route>
	);

Router.run(routes, function (Handler) {
	  React.render(<Handler/>, document.body);
	});