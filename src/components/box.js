import React, { useState } from 'react';

export default function Box(props){
console.log(props);
    /*
    // Mudando as propriedades das caixas com a função
    const [color, setColor] = useState(props.on)
    
    const styles = {
        backgroundColor: color ? "#222222" : "transparent"
    }

    function changeColor(){
        setColor( prevColor => !prevColor )
    }
    */

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return(
        //  onClick={changeColor}
        <div onClick={() => props.toggle(props.id)} style={styles} className='box'></div>
    );

}