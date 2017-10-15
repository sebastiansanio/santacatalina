window.CategoryRow = React.createClass({
    
    render: function() {
    return (
        <tr>
            <td>{this.props.category.name}</td>
            <td>{this.props.category.active}</td>
            <td>
                <a href='#'
                    onClick={() => this.props.changeAppMode('readOne', this.props.category.id)}
                    className='btn btn-info m-r-1em'> Read One
                </a>
                <a href='#'
                    onClick={() => this.props.changeAppMode('update', this.props.category.id)}
                    className='btn btn-primary m-r-1em'> Edit
                </a>
                <a
                    onClick={() => this.props.changeAppMode('delete', this.props.category.id)}
                    className='btn btn-danger'> Delete
                </a>
            </td>
        </tr>
        );
    }
});