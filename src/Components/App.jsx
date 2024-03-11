import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import CreateArea from './Createarea';
import Footer from './Footer';
import Note from './note';
function App(){
    const [notes,setnotes]=useState([]);
    function addnote(newnote){
        setnotes(prevnotes=>{
           return [...prevnotes,newnote];
        });
    }
    function deletenote(id){
        setnotes(previous=>{
            return previous.filter((noteitems,index)=>{
                return index!=id;
            })
        })
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