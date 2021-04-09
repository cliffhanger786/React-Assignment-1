import React from 'react';

/**
 * Changing the door status using HTML tag
 */

const Gate = (props) => {

    let condition = props.active;
    function toggleGate() {
        condition = !condition;
        document.getElementById("state").innerHTML = (condition ? 'open' : 'closed');
    }
     return(
           <div>
            Gate is <span id= "state">{condition === true ? 'open' : 'closed'}</span>
            <button onClick={toggleGate}>Toggle</button>
           </div>
        )

/**
 * Changing the door status using React useState component
 */

    // const [state, nextState] = React.useState(props.active);
    
    // return (
    //     <div>
    //     {(state === true) ? <p>Gate is open</p> : <p>Gate is closed</p>}

    //     <button onClick={()=> nextState(!state)}>Toggle</button>
    //     </div>
    // )
}

export default Gate;