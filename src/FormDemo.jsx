import { Button, TextField } from '@mui/material';


export default function FormDemo(){
    
    return(
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
                Click Me{' '}
            </Button>
        </div>    
    )
};