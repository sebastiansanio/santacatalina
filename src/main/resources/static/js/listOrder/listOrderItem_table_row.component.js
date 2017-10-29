window.ListItemRow = React.createClass({
    
    render: function() {
    return (
        <tr>
            <td>{this.props.item.quantity}</td>
            <td>{this.props.item.price}</td>
            <td>{this.props.item.nameProduct}</td>
        </tr>
        );
    }
});