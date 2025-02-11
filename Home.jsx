import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes } from '../redux/pastesSlice';
import { updateToPaste } from '../redux/pastesSlice';
import './home.css'
const Home = () => {
  const [title, setTile]=useState('');
  const [value,setValue]=useState('');
  const[searchParams,setSearchParams]=useSearchParams();
  const pasteId=searchParams.get("pasteId")
  const dispatch=useDispatch();
  const allPastes = useSelector((state)=> state.paste.pastes);
  useEffect(()=>{
    console.log("inside use effect");
    if(pasteId){
      const paste = allPastes.find((p)=>p._id===pasteId);
      setTile(paste.title);
      setValue(paste.content);
    }
    
  },[pasteId])
  function createPaste(){
    const paste ={
      title:title,
      content: value,
      _id:pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString(),
    }
    
    if(pasteId){  
      //update
      dispatch(updateToPaste(paste));
    }
    else{
      //create
      dispatch(addToPastes(paste));
    }
    //
    setTile('');
    setValue('');
    setSearchParams({});
  }
  return (
    <div>
      <div className='homee'>
      <input className='input' type='text' placeholder='Enter title here' value={title} onChange={(e)=> setTile(e.target.value)}>
      </input>
      <button className='done' onClick={createPaste}>
        {
          pasteId? "Update My Paste"
          :"Create My Paste"
        }
      </button>
    </div>
    <div className='text-done'>
      <textarea value={value} placeholder='enter content here' onChange={(e)=> setValue(e.target.value)}/>
    </div>
    </div>
  );
};

export default Home
