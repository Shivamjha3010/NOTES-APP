import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToPastes } from '../redux/pastesSlice';
import './view.css'

const ViewPaste = () => {
  const{id}=useParams();

  const allPastes=useSelector
  ((state)=>state.paste.pastes);
  const paste=allPastes.filter((p)=>p._id===id)[0];
  console.log("final paste",paste);
  return (
    <div>
      <div className='homee'>
      <input className='input' type='text' placeholder='Enter title here' value={paste.title} disabled onChange={(e)=> setTile(e.target.value)}>
      </input>
    </div>
    <div className='paste-content'>
      <textarea value={paste.content} className='text-area' placeholder='enter content here' disabled onChange={(e)=> setValue(e.target.value)}/>
    </div>
    </div>
  )
}

export default ViewPaste
