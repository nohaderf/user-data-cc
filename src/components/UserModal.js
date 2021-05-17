import React from 'react';

function UserModal({ name, picture, email, cell, phone, closeModal }){
    return (
        <div className="user-modal-div">
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <header className="modal-header">{name.first} {name.last}</header>
            <div className="modal-container">
                <img src={picture.large} className="profile-img" alt="user's photo"></img>
                <div className="contact-info">
                    <p><span className="contact">E-mail:</span> {email}</p>
                    <p><span className="contact">Cellphone:</span> {cell}</p>
                    <p><span className="contact">Phone:</span> {phone}</p>
                </div>
            </div>

        </div>
    )
}

export default UserModal;