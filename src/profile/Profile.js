import React from 'react'
import PropTypes from 'prop-types'; 
const Profile = (props) => {
  return (
    <div>
        <div>{props.children}</div>
      <h3 style={{color:'Blue'}}>my name is {props.name} ,I'm a {props.bio} and {props.profession} </h3>
      <button className='button' onClick={() => props.alertMyName(`hello ${props.name}`)}>hello me</button>
    </div>
  )
}
Profile.propTypes ={
    name:PropTypes.string,
   
}
Profile.defaultProps={
    name:"foulan",
    bio:"!!!!!",
    profession:"????"
}

export default Profile
