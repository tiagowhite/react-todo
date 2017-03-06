const React = require('react');
const TodoList = require('TodoList');
const AddTodo = require('AddTodo');
const TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
			showCompleted: false,
			searchText: '',
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
	handleAddTodo: function (text) {

		alert('New todo' + text);
	},

	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},

  render: function () {
		var { todos } = this.state;
		return (
      <div>
				<TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
				<AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
