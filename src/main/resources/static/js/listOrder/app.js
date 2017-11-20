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
                            <li className><a href="/categoryView.html">Categorias</a></li>
                            <li className=""><a href="/productView.html">Productos</a></li>
                            <li className="active"><a href="/listOrderView.html">Pedidos</a></li>
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
            items:[],
            orderId: null
        };
    },
 
    // used when use clicks something that changes the current mode
    changeAppMode: function(newMode, orderId, items){
        this.setState({currentMode: newMode});
            if(orderId !== undefined){
            this.setState({orderId: orderId});
            this.setState({items: items});
        }
    },
    
    changeCode: function(newCode){
        this.setState({code: newCode});
    },
    
 
    // render the component based on current or selected mode
    render: function(){
        var modeComponent = null
            
 
        switch(this.state.currentMode){
            case 'readOne':
                modeComponent = <ReadOneListOrderComponent orderId={this.state.orderId} items={this.state.items} changeAppMode={this.changeAppMode}/>;
                break;
            default:
            		modeComponent =<ReadListOrdersComponent changeAppMode={this.changeAppMode} code={this.state.code}  changeCode={this.changeCode} />;
                break;
        }
 
        return modeComponent;
    }
});
 
var ListOrders = React.createClass({
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
        <DefaultRoute handler={ListOrders} />
    </Route>
);

// Here we write the view to the browser.
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});