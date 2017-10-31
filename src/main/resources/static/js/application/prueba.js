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
                            <li className="active"><a href="/categoryView.html">Categorias</a></li>
                            <li className=""><a href="/productView.html">Productos</a></li>
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

// The RouteHandler element in this component is what handles all of our routing, nestling our content within the
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

var About = React.createClass({
    render: function() {
        return (
            <div className="container">
                <h1>About</h1>
            </div>
        );
    }
});


// This is just react-ified jumbotron bootstrap example.
// http://getbootstrap.com/examples/jumbotron/
var Home = React.createClass({
    render: function() {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Santa Catalina</h1>
                        <p>Nuestro compromiso es hacer comida sana y accesible para todos
Nos gusta incorporar la mayor cantidad de alimentos orgánicos posibles apoyando a productores locales, nuestros propios cultivos y cooperativas
Nos gusta compartir con ustedes las últimas tendencias en comida sana y estilos de vida saludables
Nos encanta comer, comida de verdad.</p>
                    </div>
                </div>
                <div className="container">
                     <div className="row">
                         <div className="col-md-6">
                             <h2>Comida</h2>
                             <p>Entendemos que la comida tiene un rol muy importante en nuestra salud y nuestro estado de vida en general.
Nuestra propuesta está vinculada con llevar comida rica, casera y saludable a nuestros clientes. Como objetivo queremos mostrarles que la comida sana y rica puede estar en un mismo plato. Cocinamos de la manera que vos cocinarías si tuvieras más tiempo, un jardín, una cocina grande y un chef profesional.
Para garantizar que nuestros clientes siempre pueden tener variedad de opciones hacemos un plato del día diferente y lo complementamos con variedades de sándwiches calientes y fríos, ensaladas, tartas y wraps. Ofrecemos variedad de jugos naturales, sanos y frescos del día. Nuestros postres y cosas dulces son un mimo para el goloso que todos llevamos dentro.
                             </p>                         
                             </div>
                         <div className="col-md-6">
                             <h2>Ubicación</h2>
                             <p>Nos encontramos en San Martin 705 y Viamente, Capital Federal</p>                         </div>
                     </div>
                </div>
            </div>
        );
    }
});

// ---------------------------------------------------------------------------------------------------------------------
// Error Handling
// ---------------------------------------------------------------------------------------------------------------------

// Consistent error handling. The 404 handling is pretty key.
var ErrorHandler = {
    _handleError: function(url, xhr, status, err, callback, defaultValue) {
        if(404 == xhr.status) {
            if(callback) {
                callback(defaultValue || null);
            }
        } else {
            console.error(url, status, err.toString());
        }
    },
};


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
        <DefaultRoute handler={Home}/>
    </Route>
);

// Here we write the view to the browser.
Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});