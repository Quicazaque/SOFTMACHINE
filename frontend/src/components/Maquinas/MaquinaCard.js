import React, { Children } from "react";

function MaquinaCard(props) {
    const  {Children, userData}= props
    return ( 
        <div className="flex">
            <h2>{userData.maquina}</h2>
            <p>Maquina: {userData.maquina}    </p>


        </div>



     );
}

export default MaquinaCard