window.DeleteProductComponent = React.createClass({
	componentDidMount: function(){
	    $('.page-header h1').text('Delete Product');
	},
	onDelete: function(e){
	 
	    var productId = this.props.productId;
	 
	        $.ajax({
	        type: "DELETE",
	        url: "http://localhost:8080/api/products/"+productId,
	        contentType: "application/json",
	        
	    });
	},
	render: function(){
		 
	    return (
	        <div className='row'>
	            <div className='col-md-3'></div>
	            <div className='col-md-6'>
	                <div className='panel panel-default'>
	                    <div className='panel-body text-align-center'>Are you sure?</div>
	                    <div className='panel-footer clearfix'>
	                        <div className='text-align-center'>
	                            <button onClick={this.onDelete}
	                                className='btn btn-danger m-r-1em'>Yes</button>
	                            <button onClick={() => this.props.changeAppMode('read')}
	                                className='btn btn-primary'>No</button>
	                        </div>
	                    </div>
	                </div>
	            </div>
	            <div className='col-md-3'></div>
	        </div>
	    );
	}
});