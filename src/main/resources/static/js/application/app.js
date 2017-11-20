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
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li className=""><a href="/categoryView.html">Categorias</a></li>
                            <li className="active"><a href="/productView.html">Productos</a></li>
                            <li className=""><a href="/listOrderView.html">Pedidos</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="/login.html">Login</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
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


var App = React.createClass({
 
    // initial mode is 'read' mode
    getInitialState: function(){
        return {
            currentMode: 'read',
            name:'',
            productId: null
        };
    },
 
    // used when use clicks something that changes the current mode
    changeAppMode: function(newMode, productId){
        this.setState({currentMode: newMode});
            if(productId !== undefined){
            this.setState({productId: productId});
        }
    },
    
    changeName: function(newName){
        this.setState({name: newName});
    },
 
    // render the component based on current or selected mode
    render: function(){
        var modeComponent =
            <ReadProductsComponent
            changeAppMode={this.changeAppMode} name={this.state.name} changeName={this.changeName} />;
 
        switch(this.state.currentMode){
            case 'read':
                break;
            case 'readOne':
                modeComponent = <ReadOneProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'create':
                modeComponent = <CreateProductComponent changeAppMode={this.changeAppMode}/>;
                break;
            case 'update':
                modeComponent = <UpdateProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            case 'delete':
                modeComponent = <DeleteProductComponent productId={this.state.productId} changeAppMode={this.changeAppMode}/>;
                break;
            default:
                break;
        }
 
        return modeComponent;
    }
});

var Products = React.createClass({
    render: function() {
        return (
            <div className="row">
	        <div className="col-md-1">
	        </div>
	         <div className="col-md-10">
		        <br></br>
		        <br></br>
		        <br></br>
		        <br></br>
	         	<App/>
	         </div>
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
                        <p>&copy; Santa Catalina 2017</p>
                    </div>
                </div>
            </footer>
        );
    }
});
 
var Router = ReactRouter;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

// Here we define our routes.
// The interesting part about these routes is how we setup routes for the Person resource.
// The best I was able to find was to set up two separate routes, one for the collection and one for the individual item.
var routes = (
    // The Layout handler specified in the base route is inherited down the chain. This is important.
    <Route name="root" handler={Layout} path="/">
        <DefaultRoute handler={Products} />
    </Route>
);

// Here we write the view to the browser.
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});