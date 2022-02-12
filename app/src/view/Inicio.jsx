import React from 'react'
import {Button} from '@mui/material';


export default function Inicio(){
    return(
        <>
        <Button onClick={pass}>About</Button>
        </>
    )

        function pass(){
            window.location.href='./about'
        }
}
