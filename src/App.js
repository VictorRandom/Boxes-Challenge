import React, {useState} from "react"
import boxes from "./boxes"

export default function App(props) {

    const [allBoxes, setAllBoxes] = useState(boxes);

    const darkMode = props.darkMode;
    
    const styles = {
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    }

    const boxesElements = allBoxes.map(box => ( 
        <div style={styles} className='box' key={box.id}></div>
    ))

    return (
        <main>
            {boxesElements}
        </main>
    )
}