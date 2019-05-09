import React from 'react';
import './App.css';

import Header from './components/header'
import About from './components/about'
import Projects from './components/projects'
import Footer from './components/footer'

function App() {
	return (
		<>
			<div>
				<Header />
				<About />
				<Projects />
				<Footer />
			</div>
		</>
	);
}

export default App;
