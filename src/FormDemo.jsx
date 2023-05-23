import { Button, ButtonGroup, Checkbox, TextField } from '@mui/material';
import AgeSelectorForm from './AgeSelectorFrom';

export default function FormDemo() {
	
    const label = "ok" ;

    return (
		<div>
			<TextField
				id='outlined-basic'
				placeholder='seru'
				label='Puppy Name'
				variant='outlined'
			></TextField>
			<br /> <br />
			<Button variant='contained' color='info'>
				{' '}
				Submit{' '}
			</Button>
			<ButtonGroup size='small' aria-label='small button group'>
				<Button>One</Button>
				<Button>Two</Button>
				<Button>Three</Button>
			</ButtonGroup>
			<br />
			<Checkbox {...label} defaultChecked />
			<Checkbox {...label} defaultChecked color='secondary' />
			<Checkbox {...label} defaultChecked color='success' />
			<Checkbox {...label} defaultChecked color='default' />
            <br />

            <AgeSelectorForm></AgeSelectorForm>

		</div>
	);
}
