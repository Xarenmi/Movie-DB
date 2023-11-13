import React from 'react';
import { FaGithub } from 'react-icons/fa';

const developer = {
  penName: 'Xarenmi',
  gitHub: 'https://github.com/Xarenmi/',
}

const Footer = () => {
  const handleGithubClick = () => {
    window.location.href = developer.gitHub;
  };

  return (
    <div style={{ backgroundColor: 'rgb(33, 37, 41)', color: 'white', padding: '0px' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: 'white' }} onClick={handleGithubClick}>
          <FaGithub size={30}/> 
        </a>
        <p style={{ margin: '0 20px 0 0', paddingTop: '5px' }} onClick={handleGithubClick} >{developer.penName}</p>
      </div>
    </div>
  );
};

export default Footer;
