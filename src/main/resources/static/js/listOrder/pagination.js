window.Pagination = React.createClass({
	
	getInitialState: function() {
        return {
            i:0,
            j:0
        };
    },
	
	componentWillReceiveProps: function() {
		this.setState({i: 0});
		this.setState({j: 0});
    },
    
    render: function(){
    	var list = []
    	var j = 0
    	var i = 0
    	var maxPages = Math.floor(this.props.totalElements/100) + 1
    	if(maxPages < 20){
    		i=maxPages;
    	}else{
    		if(this.props.numberPage - 20 < 0){
    			j=0
    		}else{
    			j=this.props.numberPage - 20
    		}
    		if(this.props.numberPage + 20 < maxPages){
    			i=this.props.numberPage + 20
    		}else{
    			i=maxPages
    		}
    	}
    	for(j; j< i; j++){
    		list.push(j);
    	}
    	var rows = list.map(function(item, k) {
            return (
                <PaginationElement
                		key={item}
                    numberPage={item}
                		changeNumberPage={this.props.changeNumberPage}
                    />
            );
        }.bind(this));
    	
        return (
        		<div>
        		 <ul className="pagination">
        		 	{rows}
			</ul>
        		</div>
        );
    }
});