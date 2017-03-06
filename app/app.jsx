const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
const TodoApp = require('TodoApp');


// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
   <Route path="/" component={TodoApp} />
 </Router>,
    document.getElementById('app')
);
