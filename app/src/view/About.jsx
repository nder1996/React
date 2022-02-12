import React from 'react'
import {Button} from '@mui/material';


export default function About(){
    return(
        <>
        <Button onClick={pass}>Inicio</Button>
        </>
    )

        function pass(){
            window.location.href='./'
        }
}
