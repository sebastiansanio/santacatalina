window.ReadOneCategoryComponent = React.createClass({
	getInitialState: function() {
	    return {
	        id: 0,
	        name: ''
	    };
	},
	
	  
	  loadCategory: function(){
		  var categoryId = this.props.categoryId;
		    $.ajax({
		        type: "GET",
		        url: "http://localhost:8080/api/categories/"+categoryId,
		        contentType: "application/json",
		        success : function(product) {
		        		this.setState({id: product.id});
		            this.setState({name: product.name});
		        }.bind(this),
		        error: function(xhr, resp, text){
		            console.log(xhr, resp, text);
		        }
		    });
	  },
	 
	componentDidMount: function(){
	 
	    this.loadCategory();
	    
	    $('.page-header h1').text('Categoria');
	},
	 
	render: function() {
		 
	    return (
	        <div>
	            <a href='#'
	                onClick={() => this.props.changeAppMode('read')}
	                className='btn btn-primary margin-bottom-1em'>
	                Listar categorias
	            </a>
	 
	            <form onSubmit={this.onSave}>
	                <table className='table table-bordered table-hover'>
	                    <tbody>
	                    <tr>
	                        <td>Name</td>
	                        <td>{this.state.name}</td>
	                    </tr>
	 
	                    </tbody>
	                </table>
	            </form>
	        </div>
	    );
	}
});
