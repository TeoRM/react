import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ColorButtons() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            margin: '10px'
        }}>

            <Stack direction="row" spacing={2}>
                <Button style={{
                    color: 'purple'
                }}>Secondary</Button>
                <Button variant="contained" style={{ backgroundColor: 'black' }}>
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>
        </div>
    );
}