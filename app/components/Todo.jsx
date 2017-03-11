const React = require('react');

var Todo = React.createClass({
	render: function () {
		var { id, text, completed } = this.props;
		return (
			<div onClick={() => {
					this.props.onToggle(id);
				}}>
				<input type="checkbox" checked={completed} readOnly/>
				<span className="text-center">{text}</span>

			</div>
		)
	}
})

module.exports = Todo;
