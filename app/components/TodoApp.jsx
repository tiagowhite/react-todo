const React = require('react');
const TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
				{
					id: 2,
					text: 'Comprar pao'
				},
				{
					id: 3,
					text: 'Marcar consulta Valeria'
				},
				{
					id: 4,
					text: 'Comprar lampadas'
				}
      ]
    }
  },
  render: function () {
		var { todos } = this.state;
		return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
