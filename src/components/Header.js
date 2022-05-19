import React from 'react';
import ClayLink from '@clayui/link';
import Flag from 'react-world-flags';
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import logo from '../assets/images/onrc_65.png';
import Navigation from './Navigation';
import ToolBar from './ToolBar';

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
              <div className="util-icon d-flex justify-content-around">
                <div className="social">
                  <ClayLink href="#"><FaFacebookSquare className="mr-2 text-primary"/></ClayLink>
                  <ClayLink href="#"><FaYoutube className="mr-2 text-primary"/></ClayLink>
                </div>
                <div className="language d-flex flex-row justify-content-start flex-wrap">
                  <ClayLink href="#"><Flag code="ro" className="mr-2"/></ClayLink>
                  <ClayLink href="#"><Flag code="gb" className="mr-2"/></ClayLink>
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