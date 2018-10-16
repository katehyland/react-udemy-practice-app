import React from 'react';
import './Person.css';

const person = (props) => {
    return( 
        <div className= "Person">
    <p>I am {props.name} and I am {props.age} years old</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRALCxxuKv94blhuMlhuYhIAqMJYN4a9txBEk1H_DmHRezl1uoj" alt="coolDogGif" />
    <p>{props.children}</p>
    <input type="text" onChange= {props.changed} value={props.name} />
    </div>
    );
} 

export default person;