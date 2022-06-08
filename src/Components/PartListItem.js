import React from 'react'
import cssFile from '../StyleSheets/PartListItem.css'

function PartListItem(props) {
  return (
    <div className='partListItem'>
        {props.name}
    </div>
  )
}

PartListItem.defaultProps = {
    name: "part name"
}

export default PartListItem