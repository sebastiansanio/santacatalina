window.CreateProductComponent = React.createClass({
	getInitialState: function() {
	    return {
	    		categories: [],
	        selectedCategoryId: -1,
	        name: '',
	        description: '',
	        price: '',
	        successCreation: null
	    };
	},
	
	componentDidMount: function() {
		$.ajax({
	        type: "GET",
	        url: "http://localhost:8080/api/categories",
	        contentType: "application/json",
	        success : function(categories) {
	        	 this.setState({
	 	            categories: categories._embedded.categories
	 	        });
	        }.bind(this),
	        error: function(xhr, resp, text){
	        		this.setState({successCreation: "No se pudo crear el producto"});
	            console.log(xhr, resp, text);
	        }
	    });
	},
	 
	onCategoryChange: function(e) {
	    this.setState({selectedCategoryId: e.target.value});
	},
	 
	onNameChange: function(e) {
	    this.setState({name: e.target.value});
	},
	 
	onDescriptionChange: function(e) {
	    this.setState({description: e.target.value});
	},
	 
	onPriceChange: function(e) {
	    this.setState({price: e.target.value});
	},
	
	onSave: function(e){
	 
	    var form_data={
	        name: this.state.name,
	        description: this.state.description,
	        price: this.state.price,
	        category: this.state.selectedCategoryId
	    };
	    
	    
	    $.ajax({
	        type: "POST",
	        url: "http://localhost:8080/api/products",
	        contentType: "application/json",
	        data: JSON.stringify(form_data),
	        success : function(response) {
		        this.setState({successCreation: "El producto fue creado correctamente"});
		        this.setState({name: ""});
	            this.setState({description: ""});
	            this.setState({price: ""});
		    
	        }.bind(this),
	        error: function(xhr, resp, text){
	        		this.setState({successCreation: "No se pudo crear el producto"});
	            console.log(xhr, resp, text);
	        }
	    });
	    event.preventDefault();
	},
	render: function() {
		
		// make categories as option for the select tag.
	    var categoriesOptions = this.state.categories.map(function(category){
	        return (
	            <option key={category._links.category.href} value={category._links.category.href}>{category.name}</option>
	        );
	    });
		 
	    return (
	    <div>
	        {
	 
	            this.state.successCreation == "El producto fue creado correctamente" ?
	                <div className='alert alert-success'>
	            El producto fue creado correctamente
	                </div>
	            :  null
	        }
	 
	        {
	 
	            this.state.successCreation == "No se pudo crear el producto" ?
	                <div className='alert alert-danger'>
	                    No se pudo crear el producto
	                </div>
	            : null
	        }
	 
	        <a href='#'
	            onClick={() => this.props.changeAppMode('read')}
	            className='btn btn-primary margin-bottom-1em'> Read Products
	        </a>
	 
	 
	        <form>
	            <table className='table table-bordered table-hover'>
	            <tbody>
	                <tr>
	                    <td>Name</td>
	                    <td>
	                        <input
	                        type='text'
	                        className='form-control'
	                        value={this.state.name}
	                        required
	                        onChange={this.onNameChange} />
	                    </td>
	                </tr>
	 
	                <tr>
	                    <td>Description</td>
	                    <td>
	                        <textarea
	                        type='text'
	                        className='form-control'
	                        required
	                        value={this.state.description}
	                        onChange={this.onDescriptionChange}>
	                        </textarea>
	                    </td>
	                </tr>
	 
	                <tr>
	                    <td>Price ($)</td>
	                    <td>
	                        <input
	                        type='number'
	                        step="0.01"
	                        className='form-control'
	                        value={this.state.price}
	                        required
	                        onChange={this.onPriceChange}/>
	                    </td>
	                </tr>
	                
	                <tr>
                    <td>Category</td>
                    <td>
                        <select
                        onChange={this.onCategoryChange}
                        className='form-control'
                        value={this.state.selectedCategoryId}>
                        <option value="-1">Select category...</option>
                        {categoriesOptions}
                        </select>
                    </td>
                </tr>
	 
	 
	                <tr>
	                    <td></td>
	                    <td>
	                        <button
	                        className='btn btn-primary'
	                        onClick={this.onSave}>Save</button>
	                    </td>
	                </tr>
	                </tbody>
	            </table>
	        </form>
	    </div>
	    );
	}
});