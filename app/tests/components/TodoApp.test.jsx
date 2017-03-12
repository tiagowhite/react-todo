const React = require('react');
const ReactDOM = require('react-dom');
const expect = require('expect');
const $ = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const TodoApp = require('TodoApp');


describe('TodoApp', () => {
	it('Should exists', () => {
		expect(TodoApp).toExist();
	});

	it('should add todo to the todo state on handleAddTodo', () => {
		var todoText = 'test text';
		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

		todoApp.setState({todos: []});
		todoApp.handleAddTodo(todoText);

		expect(todoApp.state.todos[0].text).toBe(todoText);
		// Expect createdAt to be a number
	});

	it('should toggle completed value when handleToggle called', () => {

		var todoData = {
			id: 11,
			text: 'Test features',
			completed: false,
			createdAt: 0,
			completedAt: undefined
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(false);

		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(true);
		expect(todoApp.state.todos[0].createdAt).toBeA('number');

	});

	it('should toggle todo from completed to incompleted', () => {

		var todoData = {
			id: 11,
			text: 'Test features',
			completed: true,
			createdAt: 0,
			completedAt: 123
		};

		var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
		todoApp.setState({todos: [todoData]});

		expect(todoApp.state.todos[0].completed).toBe(true);

		todoApp.handleToggle(11);
		expect(todoApp.state.todos[0].completed).toBe(false);
		expect(todoApp.state.todos[0].createdAt).toNotExist();

	});






});
