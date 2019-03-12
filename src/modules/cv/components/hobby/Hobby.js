import React from 'react';
import './Hobby.css';
const Hobby = (props) =>{
    return  (
        <ul className='hobby'>
        {
            (props.hobbies)?props.hobbies.map(hobby=>(
                <li key={hobby.name}>
                  <p className='icon'>
                    <i className={hobby.icon} aria-hidden='true' />
                  </p>
                  <p className='p'>{hobby.name}</p>
                </li>
            )):null
        }
		</ul>   
    );
}

export default Hobby;