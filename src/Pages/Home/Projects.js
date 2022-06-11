import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = ({ project }) => {
    const { name, description, image, _id } = project;
    const navigate = useNavigate();
    const handleProject = (_id) => {
        navigate(`/project/${_id}`)
    }
    return (
        <section className='bg-[#FFE59D] border-dashed border-2 border-indigo-600'>
            <div className='p-4 h-full shadow-indigo-500/40'>
                <img src={image} alt="" />
                <h2>{name}</h2>
                <p>{description}</p>
                <button onClick={() => handleProject(_id)} className='btn btn-outline mt-3'>Detail</button>
            </div>
        </section>
    );
};

export default Projects;