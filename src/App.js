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

    function toggle(id){
        setAllBoxes(prevAllBoxes => {
            const newAllBoxes = [];
            for (let i = 0; i < prevAllBoxes.length; i++){
                const currentAllBoxes = prevAllBoxes[i];
                if(currentAllBoxes.id === id){
                    const updatedAllBoxes = {
                        ...currentAllBoxes,
                        on: !currentAllBoxes.on
                    }
                    newAllBoxes.push(updatedAllBoxes)
                } else {
                    newAllBoxes.push(currentAllBoxes);
                }
            }
            return newAllBoxes;
        })
    }

    const boxesElements = allBoxes.map(box => (
        <Box 
            toggle={toggle} 
            key={box.id} 
            id ={box.id}
            on={box.on} 
        />
    ))

    return (
        <main>
            {boxesElements}
        </main>
    )
}