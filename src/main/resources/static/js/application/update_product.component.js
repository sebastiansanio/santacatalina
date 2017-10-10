window.UpdateProductComponent = React.createClass({
	getInitialState: function() {
	    return {
	        categories: [],
	        selectedCategoryId: 0,
	        id: 0,
	        name: '',
	        description: '',
	        price: 0,
	        successUpdate: null
	    };
	},
	 
	componentDidMount: function(){
	 
	    this.serverRequestCat = $.get("http://localhost/api/category/read.php",
	        function (categories) {
	            this.setState({
	                categories: categories.records
	            });
	        }.bind(this));
	 
	    var productId = this.props.productId;
	    this.serverRequestProd = $.get("http://localhost/api/product/read_one.php?id=" + productId,
	        function (product) {
	            this.setState({selectedCategoryId: product.category_id});
	            this.setState({id: product.id});
	            this.setState({name: product.name});
	            this.setState({description: product.description});
	            this.setState({price: product.price});
	        }.bind(this));
	 
	    $('.page-header h1').text('Update product');
	},
	 
	componentWillUnmount: function() {
	    this.serverRequestCat.abort();
	    this.serverRequestProd.abort();
	},
	
	onCategoryChange: function(e){
	    this.setState({selectedCategoryId: e.target.value});
	},
	 
	onNameChange: function(e){
	    this.setState({name: e.target.value});
	},
	 
	onDescriptionChange: function(e){
	    this.setState({description: e.target.value});
	},
	 
	onPriceChange: function(e){
	    this.setState({price: e.target.value});
	},
	
	onSave: function(e){
	 
	    var form_data={
	        id: this.state.id,
	        name: this.state.name,
	        description: this.state.description,
	        price: this.state.price,
	        category_id: this.state.selectedCategoryId
	    };
	 
	    //TODO:LLamar al metodo que actualiza
	 
	    e.preventDefault();
	},
	 
	render: function() {
	    var categoriesOptions = this.state.categories.map(function(category){
	        return (
	            <option key={category.id} value={category.id}>{category.name}</option>
	        );
	    });
	 
	    return (
	        <div>
	            {
	                this.state.successUpdate == "Product was updated." ?
	                    <div className='alert alert-success'>
	                        Product was updated.
	                    </div>
	                : null
	            }
	 
	            {
	                this.state.successUpdate == "Unable to update product." ?
	                    <div className='alert alert-danger'>
	                        Unable to update product. Please try again.
	                    </div>
	                : null
	            }
	 
	            <a href='#'
	                onClick={() => this.props.changeAppMode('read')}
	                className='btn btn-primary margin-bottom-1em'>
	                Read Products
	            </a>
	 
	            <form onSubmit={this.onSave}>
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
	                                onChange={this.onDescriptionChange}></textarea>
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
	                                onClick={this.onSave}>Save Changes</button>
	                        </td>
	                    </tr>
	 
	                    </tbody>
	                </table>
	            </form>
	        </div>
	    );
	}
});