import React from "react";
import ReactDOM from "react-dom";
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import hashHistory from 'react-router/lib/hashHistory';
import HomeLayout from "./home-layout.jsx";

class App extends React.Component {
	render() {
		return (
			<HomeLayout />
		);
	}
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App} />
	</Router>,
	document.getElementById('app')
);