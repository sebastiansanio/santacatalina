window.ReadOneListOrderComponent = React.createClass({
	getInitialState: function() {
	    return {
	        id: 0
	    };
	},
	 
	componentDidMount: function(){
	    $('.page-header h1').text('Detalle Pedido');
	},
	 
	render: function() {
		 
	    return (
	        <div>
	            <a href='#'
	                onClick={() => this.props.changeAppMode('read')}
	                className='btn btn-primary margin-bottom-1em'>
	                Detalle Pedido
	            </a>
	 
	                <ListItemsTable
                    items={this.props.items}
	                orderId={this.props.orderId}
                    changeAppMode={this.props.changeAppMode} />
	        </div>
	    );
	}
});
