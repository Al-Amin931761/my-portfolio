import React from 'react';
import project1 from '../../images/project1.png';
import project2 from '../../images/project2.png';
import project3 from '../../images/project3.png';

const MyProjects = () => {
    return (
        <section className='ml-5 mt-10'>
            <h2 className='text-4xl font-bold text-center mb-5'>My projects</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                <div className='mb-10'>
                    <div className="card card-compact w-80 bg-base-100 shadow-xl">
                        <figure><img src={project1} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Computer Parts Solution</h2>
                            <p>Computer Parts Solution is a manufacturer-related website.
                                The feature I used to make that website: HTML, CSS, React.js, Node.js, Express.js, Tailwind
                                CSS, DaisyUi, Firebase, etc.
                                This website can be used in both ways like admin or a simple user. If you are a user, you have
                                a few restrictions that you are not able to use those things such as make admin or add
                                products etc.</p>
                            <div className="card-actions justify-evenly">
                                <a target="_blank" href="https://computer-parts-solution.web.app/"><span className='font-bold text-blue-500'>Live Side</span></a>
                                <a target="_blank" href="https://github.com/Al-Amin931761/computer_parts_solution_client"><span className='font-bold text-blue-500'>Client Side</span></a>
                                <a target="_blank" href="https://github.com/Al-Amin931761/computer_parts_solution_server"><span className='font-bold text-blue-500'>Server Side</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className="card card-compact w-80 bg-base-100 shadow-xl">
                        <figure><img src={project2} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Fresh Fruit Warehouse</h2>
                            <p>Fresh Fruit Warehouse is a warehouse-related website.
                                The feature I used to make that website: HTML, CSS, React.js, Node.js,
                                Express.js, Firebase, Bootstrap, React Bootstrap, etc.
                                There are some restrictions for non-user. Without login or registering, can not
                                - update, delete and add products.</p>
                            <div className="card-actions justify-evenly">
                                <a target="_blank" href="https://fresh-fruit-warehouse.web.app/"><span className='font-bold text-blue-500'>Live Side</span></a>
                                <a target="_blank" href="https://github.com/Al-Amin931761/fresh_fruit_warehouse_client"><span className='font-bold text-blue-500'>Client Side</span></a>
                                <a target="_blank" href="https://github.com/Al-Amin931761/fresh_fruit_warehouse_server"><span className='font-bold text-blue-500'>Server Side</span></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mb-10'>
                    <div className="card card-compact w-80 bg-base-100 shadow-xl">
                        <figure><img src={project3} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">The Memory Maker</h2>
                            <p> The Memory Maker is a photographer's website.
                                The feature I used to make that website: React.js, Bootstrap, React Bootstrap, Firebase, etc.
                                I used Google login or Google register as a social media login or register.</p>
                            <div className="card-actions justify-evenly">
                                <a target="_blank" href="https://independent-service-prov-e099d.web.app/"><span className='font-bold text-blue-500'>Live Side</span></a>
                                <a target="_blank" href="https://github.com/Al-Amin931761/the_memory_maker"><span className='font-bold text-blue-500'>Client Side</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyProjects;