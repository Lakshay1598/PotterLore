import React from 'react'

const Characters = (props) => {
    const selection = props.selection;
  return (
    <div>{selection === 'characters' && <p>Characters</p>}
    {selection === 'students' && <p>Students</p>}
    {selection === 'staff' && <p>Staff</p>}</div>
  )
}

export default Characters