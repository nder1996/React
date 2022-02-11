import React from 'react'
import {Link} from 'react-router-dom'
import Prueba_1 from '../img/Prueba_1.png'
import Prueba_2 from '../img/Prueba_2.png'
import Prueba_3 from '../img/Prueba_3.png'




function Navegacion() {
    return (
        <div>
            <Link>
                <figure>
                    <img src={Prueba_1} alt="">
                        <figcaption>
                            Aurora
                        </figcaption>
                    </figure>
            </Link>
        </div>
    )
}

export default