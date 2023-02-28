import React from 'react'

function imagedetails(props) {
  return (
    <div>
      <img src={props.usls.full} alt={props.user.name}/>
    </div>
  )
}

export default imagedetails
