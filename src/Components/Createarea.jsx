import React,{useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
function CreateArea(props){
    const [note,setnote]=useState({
        title:"",
        content:"",

    });
    function handlechange(event){
        const {name,value}=event.target;
        setnote(previous=>{
            return{
                ...previous,
                [name]:value
            };
        });

    }
    function addnote(event){
        props.onAdd(note);
        setnote({
            title:"",
            content:"",
        })
        event.preventDefault();
    }
    return(<div>
        <form className="form">
            <input className="form-input"
             name="title"
             onChange={handlechange}
             value={note.title}
             placeholder="Title of Your Note"
            />
            <textarea className="form-input"
                name="content"
                onChange={handlechange}
                value={note.content}
                placeholder="Take a Note..."
                rows="3"
            />
            <button className="button" onClick={addnote}>+</button>
            
        </form>
    </div>);
}
export default CreateArea;
