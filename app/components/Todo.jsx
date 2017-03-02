const React = require('react');

var Todo = React.createClass({
	render: function () {
		var { id, text } = this.props;
		return (
			<div>
				<span className="text-left">{id}:   </span>
				<span className="text-center">{text}</span>
			</div>
		)
	}
})

module.exports = Todo;
