import React, { useEffect, useState } from 'react';
import Service from './Service';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://polar-mesa-59273.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <section id='my-services' className='m-5' data-aos="zoom-in-up">
            <div className='m-5 text-center'>
                <h2 className='text-4xl'>My Services</h2>
                <p className='text-2xl'>What kind of service can I offer?</p>
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>

        </section>
    );
};

export default MyServices;