import React from 'react'

const Input = (props) => {
  return (<input type="text" onChange={(e) => props.handleSearch(e) } />)
}

export default Input
