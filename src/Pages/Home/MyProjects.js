import React, { useEffect, useState } from 'react';
import Projects from './Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('https://polar-mesa-59273.herokuapp.com/project')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, []);

    return (
        <section id='my-projects' className='ml-5 mt-10 mr-5' data-aos="slide-up">
            <h2 className='text-4xl font-bold text-center mb-5'>My projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <Projects key={project._id} project={project}></Projects>)
                }
            </div>
        </section>
    );
};

export default MyProjects;