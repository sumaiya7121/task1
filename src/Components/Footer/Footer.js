import React from 'react';
import facebook from '../../Assets/facebook.png'
import google from '../../Assets/google.png'
import twitter from '../../Assets/twitter.png'
import linkedin from '../../Assets/linkedin.png'
import suitcase from '../../Assets/suitcase.png'
const Footer = () => {
    return (
        <div className='p-12 bg-sky-50 pb-[594px]'>
            <div className='flex'>
                   <img className='mr-2 w-8 h-7' src={suitcase} alt=''/>
                <h2 className='text-cyan-700 font-bold text-xl '>Logo</h2>
            </div>
            <div>
                <p>Lorem Ipsum is simply dummy text
of the printing and typesetting industry.</p>
            </div>
            <div className='flex'>
<img className='w-6 h-5 m-2 ' src={twitter} alt=''/>
<img className='w-6 h-5 m-2' src={linkedin} alt=''/>
<img className='w-6 h-5 m-2' src={facebook} alt=''/>
<img className='w-6 h-5 m-2' src={google} alt=''/>
            </div>
            <div>
               <p>©2022 lyfestring.com</p> 
            </div>
            <div className="border-b-2 pt-20 border-slate-200" ></div>
        </div>
    );
};

export default Footer;