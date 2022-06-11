import React, { useEffect } from 'react';
import { BsMap } from 'react-icons/bs';
import { VscMail } from 'react-icons/vsc';
import { FiPhoneCall } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_te8ht4e', 'template_8tk8z7h', event.target, 'kEtixGBVNFDZ5Zygz').then(res => {
            console.log(res);
        }).catch(error => console.log(error));
        event.target.reset();
    };

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <section className='pb-10' id='contact' data-aos="fade-down">
            <h2 className='font-bold text-5xl text-center mb-10'>GET IN TOUCH</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                <div className='ml-5 mb-5'>
                    <h2 className='text-3xl font-bold mb-5'>DON'T BE SHY !</h2>
                    <p className='mb-5'>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                    </p>
                    <div className='mb-5 flex'>
                        <BsMap className='text-3xl mt-2 mr-2' />
                        <div>
                            <p className='font-bold'>ADDRESS POINT</p>
                            <p>Bhawal Mirzapur, Gazipur, Bangladesh</p>
                        </div>
                    </div>
                    <div className='mb-5 flex'>
                        <VscMail className='text-4xl mt-2 mr-2' />
                        <div>
                            <p className='font-bold'>MAIL ME</p>
                            <p>alamin931761@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <FiPhoneCall className='text-4xl mt-2 mr-2' />
                        <div>
                            <p className='font-bold'>CALL ME</p>
                            <p>+8801741931761</p>
                        </div>
                    </div>
                </div>

                <div>
                    <form onSubmit={sendEmail} className='flex flex-col items-center'>
                        <input name='name' style={{ width: "390px" }} className='input input-bordered mb-5' type="text" placeholder="YOUR NAME" />
                        <input name='user_email' style={{ width: "390px" }} className='input input-bordered mb-5' type="text" placeholder="YOUR EMAIL" />
                        <textarea name='message' className="textarea textarea-bordered mb-5" placeholder="YOUR MESSAGE" cols="49" rows="5"></textarea>
                        <input className='btn btn-outline w-2/4' type="submit" value="Sent Message" />
                    </form>
                </div>
            </div>
        </section >
    );
};

export default Contact;