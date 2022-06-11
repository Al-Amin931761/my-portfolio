import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutMe = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);
    return (
        <section className='mt-10 mb-10 ml-5' data-aos="slide-left">
            <h2 className='font-bold text-3xl text-center mb-3'>Personal information</h2>
            <div className='flex justify-evenly'>
                <div>
                    <p><span className='font-bold'>First Name:</span> Al</p>
                    <p><span className='font-bold'>Age:</span> 22</p>
                    <p><span className='font-bold'>Phone:</span> +8801741931761</p>
                    <p><span className='font-bold'>Email:</span> alamin931761@gmail.com</p>
                </div>
                <div>
                    <p><span className='font-bold'>Last Name:</span> Amin</p>
                    <p><span className='font-bold'>Address:</span> Bhawal Mirzapur, Gazipur, Bangladesh</p>
                    <p><span className='font-bold'>Nationality:</span> Bangladeshi</p>
                    <p><span className='font-bold'>Langages:</span> Bangla, English, Hindi</p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;