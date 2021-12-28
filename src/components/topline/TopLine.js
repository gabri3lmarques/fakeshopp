import React from 'react';
import Container from '../container/Container';
import './topline.scss';
import zap from '../../assets/images/zap.svg';
import email from '../../assets/images/email.svg';

const TopLine = () => {
  return (
    <div className='topline'>
      <Container>
        <div class="content">
          <img src={email} />
          <span>gabri3lmarques@gmail.com</span>
          <img src={zap} />
          <span>(51)998552826</span>
        </div>
      </Container>
    </div>
  )
}

export default TopLine
