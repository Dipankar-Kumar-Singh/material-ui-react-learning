import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Button } from '@mui/material';
import classes from './App_custom.module.css';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div className={classes.ok}>
				<Button variant='contained' color='info'>
					{' '}
					Click Me{' '}
				</Button>
				<Button variant='contained' color='info'>
					{' '}
					Click Me{' '}
				</Button>
				<Button variant='contained' color='info'>
					{' '}
					Click Me{' '}
				</Button>
				<Button variant='contained' color='info'>
					{' '}
					Click Me{' '}
				</Button>
				<Button variant='contained' color='info'>
					{' '}
					Click Me{' '}
				</Button>
			</div>
		</>
	);
}

export default App;
