import React from "react";
import { useParams } from 'react-router-dom';

function Maquinas(){
    const {maquina} =  useParams()
    return(
       
            <h1>
                Maquina buscada: {maquina}
            </h1>
        
    );
}

export default Maquinas;