import React, { useState } from 'react';
import UserModal from './UserModal';

function UserRow({ user }){
    const { name, dob, location, picture, email, cell, phone } = user
    const dateOfBirth = dob.date.substring(0,10)
    const [showUserModal, setShowUserModal] = useState(false)

    console.log(user)

    function selectUser(){
        setShowUserModal(!showUserModal)
      }    

    return(
        <>
        <tr className="user-info" onClick={selectUser}>
            <td>{name.first}</td>
            <td>{name.last}</td>
            <td>{dateOfBirth}</td>
            <td>{location.state}</td>
            <td>{location.country}</td>
        </tr>
            { showUserModal ? 
                <div className="user-modal">
                    <UserModal 
                        picture={picture}
                        email={email}
                        cell={cell}
                        phone={phone}
                        name={name}
                        closeModal={selectUser} 
                    />
                 </div> 
            : null}
        </>
    )
}

export default UserRow;