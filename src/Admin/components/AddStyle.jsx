import React from 'react'
import { useState } from 'react';
import NavBar from '../NavBar'
function AddStyle() {
    const [style,setStyle]=useState(
        {
            name:"",
        }
    )
    const submitButton = (e) => {
        e.preventDefault();
        fetch("http://localhost:7732/style", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(style),
        });
    }
    return (
        <>
            <NavBar />
            <div className='navss'>
                {/* <div className="inputs"> */}
                    <label>
                        Model əlavə edin :
                        <input
                           onChange={(e)=>setStyle({...style,name:e.target.value})}
                            id='style'
                            type='text'
                            name='style'
                            placeholder='Çeşid...'
                        />
                    </label>
                {/* </div> */}
                <button
                    className='btn1'
                    onClick={submitButton}
                >
                    Yadda saxla
                </button>
            </div>

        </>
    )
}

export default AddStyle