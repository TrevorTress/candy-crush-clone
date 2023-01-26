// import react dependencies
import { useState, useEffect } from 'react';
// set board size and color choice array
const width = 8;
const candyColors = ['blue', 'green', 'orange', 'purple', 'red', 'yellow'];

const App = () => {
	// board state is managed by useState amd the set function
	const [boardState, setBoardState] = useState([]);

	//function that generates initial board layout
	const createBoard = () => {
		//initialize empty arrangement array
		const randomColorArrangement = [];

		// for 0-64, pick a random color from the choice array, push it into arrangement array
		for (let i = 0; i < width * width; i++) {
			const randomColor = candyColors[Math.floor(Math.random() * candyColors.length)];
			randomColorArrangement.push(randomColor);
		}
		// set the board state with the arrangement obtained above
		setBoardState(randomColorArrangement);
	};

	// run board set-up on initial render
	useEffect(() => {
		createBoard();
	}, []);

	return (
		<div className="app">
			<div></div>
		</div>
	);
};

export default App;
