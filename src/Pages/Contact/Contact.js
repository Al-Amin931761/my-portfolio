import React from 'react';
import { BsMap } from 'react-icons/bs';
import { VscMail } from 'react-icons/vsc';
import { FiPhoneCall } from 'react-icons/fi';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <section >
            <h2 className='font-bold text-5xl text-center mb-10'>GET IN TOUCH</h2>
            <div className='grid grid grid-cols-2'>
                <div className='ml-5'>
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
                    <form onClick={handleSubmit} className='flex flex-col items-center'>
                        <input style={{ width: "500px" }} className='input input-bordered mb-5' type="text" placeholder="YOUR NAME" />
                        <input style={{ width: "500px" }} className='input input-bordered mb-5' type="text" placeholder="YOUR EMAIL" />
                        <input style={{ width: "500px" }} className='input input-bordered mb-5' type="text" placeholder="YOUR SUBJECT" />
                        <textarea className="textarea textarea-bordered mb-5" placeholder="YOUR MESSAGE" cols="71" rows="5"></textarea>
                        <button className="btn btn-outline w-2/4">Button</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;