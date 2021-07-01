import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Heading = ({title,onAdd , showAdd}) => {
    return (
       <header className='header'>
           <h1>{title}</h1>
          <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'}onClick={onAdd}/>
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
