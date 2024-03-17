import React from 'react';
import ReactDOM from 'react-dom';
function Note(props){
    function handlechange(){
        props.ondelete(props.id);
    }
    return(<div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handlechange}>DELETE</button>
    </div>)
}
export default Note;