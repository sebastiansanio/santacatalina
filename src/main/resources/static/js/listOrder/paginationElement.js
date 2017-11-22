window.PaginationElement = React.createClass({
	getInitialState: function() {
        return {
            numberPage:0
        };
    },
	
	componentWillReceiveProps: function() {
		this.setState({numberPage: this.props.numberPage});
    },
	
	onNumberPageChange: function(id) {
	    this.props.changeNumberPage(id);
	},
	
    render: function(){
        return (
       		 <li><a href='#' onClick={() => this.onNumberPageChange(this.props.numberPage)}>{this.props.numberPage + 1}</a></li>
        );
    }
});