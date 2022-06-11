import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SpecificProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch(`https://polar-mesa-59273.herokuapp.com/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data));
    }, []);

    return (
        <section className='bg-[#FFE6E6] pt-10'>
            <div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src={project.image2} className="w-full" alt='' />
                    </div>
                    <div id="item2" className="carousel-item w-full">
                        <img src={project.image3} className="w-full" alt='' />
                    </div>
                    <div id="item3" className="carousel-item w-full">
                        <img src={project.image4} className="w-full" alt='' />
                    </div>
                    <div id="item4" className="carousel-item w-full">
                        <img src={project.image5} className="w-full" alt='' />
                    </div>
                    <div id="item5" className="carousel-item w-full">
                        <img src={project.image6} className="w-full" alt='' />
                    </div>
                </div>
                <div className="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" className="btn btn-xs">1</a>
                    <a href="#item2" className="btn btn-xs">2</a>
                    <a href="#item3" className="btn btn-xs">3</a>
                    <a href="#item4" className="btn btn-xs">4</a>
                    <a href="#item5" className="btn btn-xs">5</a>
                </div>
            </div>

            <div className='m-10'>
                <h2 className='text-2xl font-bold text-center'>{project.name}</h2>
                <p>- {project.description2}</p> <br />
                <p>- {project.description3}</p> <br />
                <p>- {project.description4}</p> <br />
                <p>- {project.description5}</p> <br />
                <p>- {project.description6}</p> <br />
                <p>- {project.description7}</p> <br />
                <p>- {project.description8}</p>
            </div>
            <div className='flex justify-evenly pb-5'>
                <button className="btn btn-outline"><a target="_blank" href={project.live_side}>Live Side</a></button>
                <button className="btn btn-outline"> <a target="_blank" href={project.client_side}>Client Side</a></button>
                <button className="btn btn-outline"><a target="_blank" href={project.server_side}>Server Side</a></button>
            </div>
        </section>
    );
};

export default SpecificProject;