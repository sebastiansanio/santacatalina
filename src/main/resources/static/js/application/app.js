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


var App = React.createClass({
 
    // initial mode is 'read' mode
    getInitialState: function(){
        return {
            currentMode: 'read',
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
 
    // render the component based on current or selected mode
    render: function(){
 		
        var modeComponent =
            <ReadProductsComponent
            changeAppMode={this.changeAppMode} />;
 
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
 
// go and render the whole React component on to the div with id 'content'
ReactDOM.render(
    <App />,
    document.getElementById('content')
);