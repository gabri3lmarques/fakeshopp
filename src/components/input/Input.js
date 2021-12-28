import React from 'react';
import './input.scss';

const Input = (props) => {
  return (<input className="search" placeholder="Nome do produto..." type="text" onChange={(e) => props.handleSearch(e) } />)
}

export default Input
