import React, { useState, useRef, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import "swiper/css";
import {Routes, Route, Link } from 'react-router-dom';
import Dashbord from '../Dash-bord/Dash-bord';
import FoodList from '../Food-list/Food-List';
import Foodadd from '../Food-add/Food-add';
import '../../../src/App.css'
import FoodUpdate from '../Food-list-update/Food-update';




function Header() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const subListRefs = useRef([]);


    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const toggleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    };
    useEffect(() => {
        subListRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.maxHeight = expanded === index ? `${ref.scrollHeight}px` : '0';
            }
        });
    }, [expanded]);

    return (
        <>
            <div className={`sidebar ${isCollapsed ? 'collapse' : ''}`}>
                <div className='bg-img'>
                    <div className='logo d-flex p-3 flex-wrap justify-content-evenly align-items-center'>
                        <h3>
                            ZwiGato
                        </h3>
                        <div>
                            <img src="/images/header.gif" alt="fire" />
                        </div>
                    </div>
                    <div className='custom-navbar scroll-bar'>
                        <ul className='p-3'>
                        <Link to="/" ><li className='text-white d-flex text-start align-items-center'><i className="fa-solid fa-house-user me-3"></i> <span>Dashboard</span></li></Link>
                            <li className='text-white d-flex text-start align-items-center' onClick={() => toggleExpand(0)}>
                                <i className="fa-solid fa-shop me-3"></i>
                                <span className='flex-grow-1'>Product</span>
                                <i className={`fa-solid ${expanded === 0 ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                            </li>
                            <ul ref={el => (subListRefs.current[0] = el)} className={`text-white sub-list ${expanded === 0 ? 'expanded' : ''}`}>
                            <Link to="/Foodlist"><li>-<span className='ms-3'>Products</span></li></Link>
                            <Link to="/Food-add"><li>-<span className='ms-3'>Add New Product</span></li></Link>
                            </ul>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`main-content d-flex flex-wrap ${isCollapsed ? 'collapse' : ''}`}>
                <header className='bg-white'>
                    <Container fluid>
                        <div className='d-flex flex-wrap col-12 bg-white p-3 justify-content-between align-items-center'>
                            <div className='d-flex flex-wrap col-4 align-items-center'>
                                <div className="toglclass col-1 d-flex align-items-center" onClick={toggleSidebar}>
                                    <i className={`fa-solid ${isCollapsed ? 'fa-circle-right' : 'fa-circle-left'}`}></i>
                                </div>
                                <div className='col-11'>
                                    <div className='d-flex align-items-center'>
                                        <h5 className='m-0'>Food that's you loved!</h5>
                                        <img src="\images\header.gif" alt="fire" />
                                    </div>
                                    <div>
                                        <p className='m-0'>Delight your taste with our most famous food !!</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-8 d-flex flex-wrap justify-content-end align-items-center'>
                                <div className='header-icon d-flex flex-wrap align-items-center'>
                                    <div className='icon-bg m-1 rounded'>
                                        <i class="fa-solid fa-magnifying-glass"></i>
                                    </div>
                                    <div className='icon-bg m-1 rounded'>
                                        <i class="fa-solid fa-bell"></i>
                                    </div>
                                    <div className='icon-bg m-1 rounded'>
                                        <i class="fa-solid fa-message"></i>
                                    </div>
                                    <div className='icon-bg m-1 rounded'>
                                        <i class="fa-solid fa-moon"></i>
                                    </div>
                                    <div className='profile d-flex flex-wrap justify-content-end align-items-center ms-4'>
                                        <div className='profil-img'>
                                            <img src="\images\20230620_095708.png" className='rounded-circle' alt="profile-img" />
                                        </div>
                                        <div className='mx-2 d-flex align-items-center'>
                                            <div className='pt-3'>
                                                <h5>Bhargav Pandya</h5>
                                                <p>Admin <i class="fa-solid fa-angle-down"></i></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </header>


                <main>
               
                        <Routes>
                            <Route path='/' element={<Dashbord/>} />
                            <Route path='/Foodlist' element={<FoodList/>}/>
                            <Route path='/Food-add' element={<Foodadd/>}/>
                            <Route path='/Food-update/:id' element={<FoodUpdate/>}/>
                        </Routes>
   

                </main>

                {/* <footer className="bg-white">
                    <Container fluid>
                        <p className="d-flex col-12 flex-wrap justify-content-center align-items-center">
                            Copyright 2024 © ZwiGeto All Rights Reserved by Bhargav Pandya
                        </p>
                    </Container>
                </footer> */}
            </div>
        </>
    );
}

export default Header;
