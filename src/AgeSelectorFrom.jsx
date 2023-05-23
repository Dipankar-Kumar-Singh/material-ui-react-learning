import { InputLabel, MenuItem, Select } from '@mui/material';

export default function AgeSelectorForm() {
	
    const age = 10 ;
    
    return (
		<>
			<InputLabel> Age </InputLabel>
			<Select value={age} label='mango'>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
		</>
	);
}
