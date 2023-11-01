import React, { useState } from 'react';
import Logo from '/images/dblg.png';
import DropBox from '/images/Dropbox-logo.svg';
import Backup from '/images/Backup-logo-nav.svg';
import Sign from '/images/dropbox-sign-logo.svg';
import DocSend from '/images/DocSend-logo-nav.svg';
import Capture from '/images/Capture-logo-nav.svg';
import Replay from '/images/replay-logo-nav.svg'
import Dash from '/images/dash-logo-nav.svg'

export default function Nav() {
  const [isHovered, setIsHovered] = useState(false);
  const [subDivHovered, setSubDivHovered] = useState(false);
// crontrolling the visibility of the parent div based on hover
  const handleParentHover = () => {
    setIsHovered(true);
  };
  const handleParentUnhover = () => {
    setIsHovered(false);
  };

//controls the visibility of the subdiv on hover
  const handleSubDivHover = () => {
    setSubDivHovered(true);
  };
  const handleSubDivUnhover = () => {
    setSubDivHovered(false);
  };

  return (
    <div class='flex items-center justify-between'>
      <div class='flex items-center'>
        <div class='flex items-center'>
          <img src={Logo} alt='dropbox logo' class='h-10 bg-blue-500' />
          <span class='font-bold text-2xl ml-2'>Dropbox</span>
        </div>
        <div class='relative'>
          <ul class='flex mt-2'>
            <li class='ml-2'>
              <a
                href='#'
                class='hover:bg-[#f2eee8] pt-7 pb-7'
                onMouseEnter={handleParentHover}
                onMouseLeave={handleParentUnhover}
              >
                Why Dropbox?
              </a>
              <div
                class={`bg-[#f2eee8] h-auto pb-2 absolute justify-between mt-4 w-[28rem] ${
                  isHovered || subDivHovered ? 'flex' : 'hidden'
                }`}
                onMouseEnter={handleSubDivHover}
                onMouseLeave={handleSubDivUnhover}
              >
                <section class='ml-4'>
                  <h4 class='font-semibold'>OverView</h4>
                  <ul class='text-xs w-[12rem]'>
                    <li class='listedItems'>Get Inspired</li>
                    <li class='listedItems'>What customers say</li>
                    <li class='listedItems'>App Integrations</li>
                    <li class='listedItems'>Resources</li>
                  </ul>
                </section>
                <section class='mr-28'>
                  <h4 class='font-semibold'>OverView</h4>
                  <ul class='text-xs w-[15rem]'>
                    <li class='listedItems'>Share files</li>
                    <li class='listedItems'>Share and organize</li>
                    <li class='listedItems'>Sync your device</li>
                    <li class='listedItems'>Protect and store data</li>
                    <li class='listedItems'>Connect remote teams</li>
                    <li class='listedItems'>Keep work moving</li>
                    <li class='listedItems'>Always-on backup</li>
                    <li class='listedItems'>Sign a document</li>
                    <li class='listedItems'>Track document analytics</li>
                  </ul>
                </section>
              </div>
            </li>
            <li class='ml-2'>
              <a 
               onMouseEnter={handleParentHover}
               onMouseLeave={handleParentUnhover}
              href='#'>Products</a>
              <div
              onMouseEnter={handleSubDivHover}
              onMouseLeave={handleSubDivUnhover}
              class={`absolute w-[15rem] bg-[#f2eee8] mt-4 ${
                isHovered || subDivHovered ? 'block' : 'hidden'
              }`}>
                    <h4 class='font-semibold text-xs mb-4 text-center mt-2'>Do more than store with dropbox</h4>
                    <div class=''>
                        <section class='subProducts'>
                            <img src={DropBox} alt="" />
                            <div class='ml-2'>
                                <h4 class='text-xs'>Dropbox</h4>
                                <p class='text-[0.625rem]'>Store, share, and access files <br />across devices</p>                                
                            </div>
                        </section>
                        <section class='subProducts'>
                            <img src={Backup} alt="" />
                            <div class='ml-2'>
                                <h4 class='text-xs'>Backup</h4>
                                <p class='text-[0.625rem]'>Automatically back up your devices</p>                                
                            </div>
                        </section>
                        <section class='subProducts'>
                            <img src={Sign} alt="" />
                            <div class='ml-2'>
                                <h4 class='text-xs'>Sign</h4>
                                <p class='text-[0.625rem]'>Request and add signature to <br />documents</p>                                
                            </div>
                        </section>
                        <section class='subProducts'>
                            <img src={DocSend} alt="" />
                            <div class='ml-2'>
                                <h4 class='text-xs'>DocSend</h4>
                                <p class='text-[0.625rem]'>Send documents securely and <br />track activity</p>                                
                            </div>
                        </section>
                        <section class='subProducts'>
                            <img src={Capture} alt="" />
                            <div class='ml-2'>
                                <h4 class='text-xs'>Capture</h4>
                                <p class='text-[0.625rem]'>Capture screen recording and video <br />messages</p>                                
                            </div>
                        </section>
                        <section class='subProducts'>
                            <img src={Replay} alt="" />
                            <div class='ml-2'>
                                <h4 class='text-xs'>Replay</h4>
                                <p class='text-[0.625rem]'>Review and approve video faster</p>                                
                            </div>
                        </section>
                        <section class='subProducts'>
                            <img src={Dash} alt="" />
                            <div class='ml-2'>
                                <h4 class='text-xs'>Dash(beta)</h4>
                                <p class='text-[0.625rem]'>Search, organize and find answers</p>                                
                            </div>
                        </section>
                        <section class='subProducts'>
                            <img src="" alt="" />
                            <div class='ml-2'>
                                <h4 class='text-xs'>Early access</h4>
                                <p class='text-[0.625rem]'>Preview new product experiences</p>                                
                            </div>
                        </section>
                    </div>
              </div>
            </li>
            <li class='ml-2'>
              <a href='#'>Solutions</a>
            </li>
            <li class='ml-2'>
              <a href='#'>Pricing</a>
            </li>
          </ul>
        </div>
      </div>

      <div class='flex items-center'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6 ml-2 mt-2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
            />
          </svg>
        </div>
        <div class=''>
          <ul class='flex mt-2'>
            <li class='ml-2'>Contact</li>
            <li class='ml-2'>Get App</li>
            <li class='ml-2'>Sign up</li>
            <li class='ml-2'>Login</li>
          </ul>
        </div>
        <div>
          <button class='ml-2 mt-2'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
