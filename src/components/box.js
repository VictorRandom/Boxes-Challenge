import React, { useState } from 'react';

export default function Box(props){

    const [color, setColor] = useState(props.on)
    
    const styles = {
        backgroundColor: color ? "#222222" : "transparent"
    }

    function changeColor(){
        setColor( prevColor => !prevColor )
    }

    return(
        <div onClick={changeColor} style={styles} className='box'></div>
    );

}