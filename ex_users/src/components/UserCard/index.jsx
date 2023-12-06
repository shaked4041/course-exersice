import React from 'react'
import './style.css'



export default function UserCard(props) {
    const { firstName, lastName, image, address, phoneNumber, age } = props.user

    console.log(props);
    return (
            <div className='main_user'>
                    <img className='img' src={image} alt={firstName} />
                <h1>{firstName} {lastName}</h1>
                <h3>{address}</h3>
                <h3>{phoneNumber}</h3>
                <h3>{age}</h3>

            </div>
    )
}

