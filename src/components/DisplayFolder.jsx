import React from 'react'

const DisplayFolder = (props) => {

    const handleClick = () => {
       props.onClick()
    }
    
  return (
    <div>
   {props.folder.name}{ props.folder.isFolder === true ? <span onClick={handleClick}> > </span>: null}</div>
  )
}

export default DisplayFolder