import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
import { auth, db, logout } from '../firebase'
import { query, collection, getDocs, where } from 'firebase/firestore'
import './style.css'
import cpimg from '../../src/Pictures/cpimg.jpeg'

function About () {
  const [designers, setDesigners] = useState()

 const printUsers = async() => {
  
    const citiesRef = db.collection('cities');
const snapshot = await citiesRef.get();
snapshot.forEach(doc => {
  setDesigners(doc.name, '=>', doc.data());
});

  }

  useEffect(() => {
    printUsers()
  }, [])

  return (
    <div className='col-md-10 col-10 mx-auto'>
      <div>
        <h2>The designer are...</h2>
        <ul>
          {designers.map(designerObject => {
            return <li>{designerObject.name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default About
