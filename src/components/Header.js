import React from 'react';
import ClayLink from '@clayui/link';
import logo from '../assets/images/onrc_65.png';
import ClayIcon from '@clayui/icon';
import Navigation from './Navigation';
import ToolBar from './ToolBar';
const spritemap = "/icons.svg";

function Header() {
  
  return (
    <header>
      <div className='info container-fluid container-fluid-max-lg'>
          <div className='d-flex flex-row d-flex justify-content-between py-2'>
            <div className="logo d-flex flex-row d-flex justify-content-start">
              <img src={logo} alt="onrc" />
              <div className='ml-2 d-flex flex-column justify-content-center'>
                <p className='m-0'>Ministerul Justiției</p>
                <h1 className='h4 p-0'>Oficiul Național al Registrului Comerțului</h1>
              </div>
            </div>
            <div className="util">
              <div className="util-icon d-flex flex-row justify-content-around">
                <div className="social">
                  <ClayLink href="#"><ClayIcon className="mr-2 text-primary" symbol="social-facebook" spritemap={spritemap} /></ClayLink>
                  <ClayLink href="#"><ClayIcon className="mr-2 text-primary" symbol="video" spritemap={spritemap} /></ClayLink>
                </div>
                <div className="language">
                  <ClayLink href="#"><ClayIcon className="mr-2" symbol="ro-ro" spritemap={spritemap} /></ClayLink>
                  <ClayLink href="#"><ClayIcon className="mr-2" symbol="en-gb" spritemap={spritemap} /></ClayLink>
                </div>
              </div>
              <div className="cauta d-none d-md-block">
                <ToolBar />
              </div>              
            </div>
          </div>
      </div>
      <div className='mb-5 bg-secondary text-white'>
        <div className='container-fluid container-fluid-max-lg bg-secondary text-white'>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header