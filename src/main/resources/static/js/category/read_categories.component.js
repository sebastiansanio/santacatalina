window.ReadCategoriesComponent = React.createClass({
    getInitialState: function() {
        return {
            categories: []
        };
    },
    
    loadCategoriesFromServer: function () {
	    var self = this;
	    if(this.props.name == '' ){
	    		var url = "/api/categories"
	    }else{
	    		var url = "/api/categories/search/findByNameContainingIgnoreCase?name="+this.props.name
	    }
	    $.ajax({
	    		type: "GET",
	        contentType: "application/json",
	      url: url
	    }).then(function (data) {
	      self.setState({categories: data._embedded.categories});
	    });
	  },
 
    componentDidMount: function() {
    		this.loadCategoriesFromServer();
    },
    
     componentDidUpdate: function () {
      this.loadCategoriesFromServer();
    },
 
    render: function() {
        // list of products
        var filteredCategories = this.state.categories;
        $('.page-header h1').text('Categorias');
 
        return (
            <div className='overflow-hidden'>
                <SearchFiltered changeAppMode={this.props.changeAppMode} name={this.props.name}  changeName={this.props.changeName} />
 				
                <CategoriesTable
                    categories={filteredCategories}
                    changeAppMode={this.props.changeAppMode} />
                <TopActionsComponent changeAppMode={this.props.changeAppMode} />
            </div>
        );
    }
});