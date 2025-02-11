import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pastesSlice';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import ViewPaste from './ViewPaste';
import './paste.css'

const Paste = () => {

  const pastes =useSelector((state)=>
    state.paste.pastes);
  const[searchTerm,setSearchTerm]=useState('');
  const dispatch=useDispatch();

  const filteredData=pastes.filter((paste)=> 
    paste.title.toLowerCase().includes
  (searchTerm.toLowerCase()));
  function handleDelete(pasteId){
    dispatch(removeFromPaste(pasteId));
  }
  return (
    <div>
       <input
    className='paste-div'
    type='search'
     placeholder='search here'
     value={searchTerm}
     onChange={(e)=>setSearchTerm(e.target.value)} />
    <div className='paste-box'>
      {
        filteredData.length > 0 &&
        filteredData.map(
          (paste)=>{
            return(
              <div className='border' key={paste?._id}>
              <div>
                {paste.title}
              </div>
              <div>
              {paste.content}
              </div>
              <div>
                <button className='edit-btn'><a href={`/?pasteId=${paste?._id}`}>Edit</a></button>
              </div>
              <div>
                <button className='view-btn'><a href={`/pastes/${paste?._id}`}>View</a></button>
              </div>
              <div>
                <button className='copy-btn' onClick={()=>{navigator.clipboard.writeText(paste?.content),toast.success("copied to clipboard")}}>Copy</button>
              </div>
              <div>
                <button className='delete-btn' onClick={()=>handleDelete(paste?._id)}>Delete</button>
              </div>
              <div>
                {paste.createdAt}
              </div>
              </div>              
            )
          }

        )
      }
    </div>
    </div>
  )
}

export default Paste
