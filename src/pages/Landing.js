import React from 'react'
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../Components';


const Landing = () => {
  return (
    <Wrapper>
        <nav>
            <Logo />
        </nav>
        <div className='container page'>
            {/* info */}
            <div className='info'>
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque soluta beatae autem quo, placeat voluptate commodi! Voluptatem enim hic unde.</p>
                <button className='btn btn-hero'>Login / Register
                </button>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </Wrapper>
  )
}










export default Landing