import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Heading = ({title,onAdd}) => {
    return (
       <header className='header'>
           <h1>{title}</h1>
          <Button color='green' text='Add' onClick={onAdd}/>
       </header>
    )
}
Heading.defaultProps = {
    title : 'Task tracker'
}
Heading.prototype={
    title : PropTypes.string.isRequired,
}

export default Heading 
