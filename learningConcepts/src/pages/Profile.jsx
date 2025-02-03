import React, { useState } from 'react'
import "../css/Profile.css"
export const Profile = () => {

    const [ profile, setProfile ] = useState({
        name: "",
        age: ""
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setProfile({
            ...profile,
            [name]: value
        })
    }

  return (
   <>
   <h1>User form for their Profile Card</h1>

   <div>
    <form>
        <label htmlFor='Name'>Name: 
            <input type="text" name="name" id="name" placeholder='Enter your name' value={profile.name} onChange={handleChange}/>
        </label>
        <label htmlFor="Age">Age:
            <input type="number" name="age" id="age" placeholder='Enter your age' value={profile.age} onChange={handleChange}/>
        </label>
    </form>
   </div>

   <div className='profile-div'>
    <h4>Name: {profile.name} </h4>
    <p>Age: {profile.age} </p>
   </div>

   </>
  )
}
