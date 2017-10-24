window.ReadOneCategoryComponent = React.createClass({
	getInitialState: function() {
	    return {
	        id: 0,
	        image:'',
	        name: ''
	    };
	},
	
	  
	  loadCategory: function(){
		  var categoryId = this.props.categoryId;
		    $.ajax({
		        type: "GET",
		        url: "/api/categories/"+categoryId,
		        contentType: "application/json",
		        success : function(category) {
		        		this.setState({id: category.id});
		            this.setState({name: category.name});
		            document.getElementById("ItemPreview").src = "data:image/png;base64," + category.image;
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
	                    
	                    <tr>
                        <td>imagen</td>
                        	<td><img id="ItemPreview" src=""/></td>
                        </tr>
	 
	                    </tbody>
	                </table>
	            </form>
	        </div>
	    );
	}
});
