import React, {useState} from "react";
import Box from "./components/box";
import boxes from "./boxes";

export default function App() {

    const [allBoxes, setAllBoxes] = useState(boxes);
    
    /*
    // Testando estilização das caixas
    const darkMode = props.darkMode;
    
    const styles = {
        backgroundColor: darkMode ? "#222222" : "#cccccc"
    }
    */

    const boxesElements = allBoxes.map(box => (
        <Box key={box.id} on={box.on} />
    ))

    return (
        <main>
            {boxesElements}
        </main>
    )
}