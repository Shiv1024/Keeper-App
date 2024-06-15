import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import CreateArea from './Createarea';
import Footer from './Footer';
import Note from './note';
function App(){
    const [notes,setnotes]=useState([]);
    useEffect(()=>{
        const note=JSON.parse(localStorage.getItem('notes')) || [];
        setnotes(note);
    },[])
    function addnote(newnote){
        const note=[...notes,newnote]
        setnotes(note);
        localStorage.setItem('notes', JSON.stringify(note));
    }
    function deletenote(id){
        const note=notes.filter((noteitems,index)=>{
            return index!=id;
        })
        setnotes(note);
        localStorage.setItem('notes', JSON.stringify(note));
    }
    return (<div>
    <Header/>
    <CreateArea onAdd={addnote}/>
    {notes.map((noteitems,index)=>{
        return(
            <Note
                key={index}
                id={index}
                title={noteitems.title}
                content={noteitems.content}
                ondelete={deletenote}
            />
        );
    })}
    <Footer/>
    </div>);
}
export default App;