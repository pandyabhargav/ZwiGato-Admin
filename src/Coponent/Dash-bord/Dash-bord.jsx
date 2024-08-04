import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import ApexChart from '../Apexchart/Apexchart';
import Form from 'react-bootstrap/Form';
import ApexChart1 from '../Apex-chart-2/Apex-chart-2';
import Menuorder from '../Menu-order/Menu-order';
import { Link } from 'react-router-dom';
import "swiper/css";


function Dashbord() {
    return (
        <>
            <Container fluid>
                <div className='col-12  d-flex flex-wrap align-items-center'>
                    <div className='col-3 p-3'>
                        <div className='bg-welcome-img rounded text-center pb-3'>
                            <img src="\images\offer.gif" alt="img" />
                            <p className='pt-50 m-0'>Exclusive weekend discounts</p>
                            <h5>Welcome To ZwiGato</h5>
                            <Button className='bt1 px-4 mt-1 mb-3 py-2 rounded'>
                                Check Menu
                            </Button>
                        </div>
                    </div>
                    <div className='col-9 p-3 position-relative'>
                        <div className='bg-white col-12'>
                            <div className='ps-4 pt-2'>
                                <h5>
                                    Menu categorys
                                </h5>
                                <hr />
                            </div>
                            <div>
                                <Swiper watchSlidesProgress={true} slidesPerView={7} loop={true} className="mySwiper px-3 pb-3">
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-1.png" alt="p-1" />
                                            <h4>pizza</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-2.png" alt="p-2" />
                                            <h4>Chiken</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-3.png" alt="p-3" />
                                            <h4>Burger</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-5.png" alt="p-5" />
                                            <h4>Fries</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-6.png" alt="p-6" />
                                            <h4>Boritto</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-7.png" alt="p-7" />
                                            <h4>Taco</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-8.png" alt="p-8" />
                                            <h4>Muffin</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-9.png" alt="p-9" />
                                            <h4>Meat</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-10.png" alt="p-10" />
                                            <h4>Panner</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-11.png" alt="p-11" />
                                            <h4>Hotdog</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-12.png" alt="p-12" />
                                            <h4>Donuts</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-13.png" alt="p-13" />
                                            <h4>Coffe</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-14.png" alt="p-14" />
                                            <h4>Sandwhich</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-15.png" alt="p-15" />
                                            <h4>Noodle</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-16.png" alt="p-16" />
                                            <h4>pasta</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-17.png" alt="p-17" />
                                            <h4>Meggi</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-18.png" alt="p-18" />
                                            <h4>Momos</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-19.png" alt="p-19" />
                                            <h4>Salad</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                    <SwiperSlide>
                                         <Link> 
                                        <div className="slider-1 p-2">
                                            <img src="images\p-20.png" alt="p-20" />
                                            <h4>Biryani</h4>
                                        </div>
                                         </Link> 
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className='col-12 d-flex flex-wrap'>
                            <div className='col-4 card1 px-2 py-3'>
                                <div className='d-flex bg-white flex-wrap bg-img-chart p-3 rounded align-items-center'>
                                    <div className='col-4'>
                                        <div className='d-flex flex-wrap align-items-center'>
                                            <p className='m-0'>Total Sale</p>
                                            <h3 className='m-0'>$254.90</h3>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <ApexChart />
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 card1 px-2 py-3'>
                                <div className='d-flex bg-white flex-wrap bg-img-chart p-3 rounded align-items-center'>
                                    <div className='col-4'>
                                        <div className='d-flex flex-wrap align-items-center'>
                                            <p className='m-0'>Total Profit</p>
                                            <h3 className='m-0'>$254.90</h3>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <ApexChart seriesColor='#579958' bgcolr='#ECE5DD' markerColor='#579958' />
                                    </div>
                                </div>
                            </div>
                            <div className='col-4 card1 px-2 py-3'>
                                <div className='d-flex bg-white flex-wrap bg-img-chart p-3 rounded align-items-center'>
                                    <div className='col-4'>
                                        <div className='d-flex flex-wrap align-items-center'>
                                            <p className='m-0'>Customer rate</p>
                                            <h3 className='m-0'>5.12%</h3>
                                        </div>
                                    </div>
                                    <div className='col-8'>
                                        <ApexChart seriesColor='#CC3300' bgcolr='#FAE7E4' markerColor='#CC3300' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container fluid>
                <div className='dashbord-section-2 d-flex flex-wrap col-12'>
                    <div className='col-7 p-3'>
                        <div className='bg-white h-100'>
                            <div>
                                <h5 className='px-2 pt-2 m-0'>Order Reports</h5>
                                <hr />
                            </div>
                            <div>
                                <table className='col-12'>
                                    <thead>
                                        <tr>
                                            <th>
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`default-${type}`}>
                                                            <Form.Check // prettier-ignore
                                                                type={type}
                                                                id={`default-${type}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </th>
                                            <th className='text-start ps-3'>
                                                Food
                                            </th>
                                            <th>Customer</th>
                                            <th>Order Date</th>
                                            <th>Price</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`default-${type}`}>
                                                            <Form.Check // prettier-ignore
                                                                type={type}
                                                                id={`default-${type}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </td>
                                            <td className='d-flex flex-wrap align-items-center'>
                                                <img src="\images\1.jpg" className='rounded mx-2' alt="1" />
                                                <p>Fish Burger</p>
                                            </td>
                                            <td>John Doe</td>
                                            <td>25/10/2024</td>
                                            <td>$12.99</td>
                                            <td className='bg-green'>Delivered</td>
                                        </tr>
                                        <tr className='td-bg'>
                                            <td>
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`default-${type}`}>
                                                            <Form.Check // prettier-ignore
                                                                type={type}
                                                                id={`default-${type}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </td>
                                            <td className='d-flex flex-wrap align-items-center'>
                                                <img src="\images\2.jpg" className='rounded mx-2' alt="2" />
                                                <p>Pepperoni Pizza</p>
                                            </td>
                                            <td>Jane Doe</td>
                                            <td>20/1/2024</td>
                                            <td>$9.99</td>
                                            <td className='bg-orange'>Pending</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`default-${type}`}>
                                                            <Form.Check // prettier-ignore
                                                                type={type}
                                                                id={`default-${type}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </td>
                                            <td className='d-flex flex-wrap align-items-center'>
                                                <img src="\images\3.jpg" className='rounded mx-2' alt="3" />
                                                <p>Hot Dog</p>
                                            </td>
                                            <td>Jim Beam</td>
                                            <td>18/10/2024</td>
                                            <td>$7.99</td>
                                            <td className='bg-red'>Cancelled</td>
                                        </tr>
                                        <tr className='td-bg'>
                                            <td>
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`default-${type}`}>
                                                            <Form.Check
                                                                type={type}
                                                                id={`default-${type}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </td>
                                            <td className='d-flex flex-wrap align-items-center'>
                                                <img src="\images\4.jpg" className='rounded mx-2' alt="4" />
                                                <p>Nachos</p>
                                            </td>
                                            <td>Alice Johnson</td>
                                            <td>05/05/2024</td>
                                            <td>$10.99</td>
                                            <td className='bg-green'>Delivered</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`default-${type}`}>
                                                            <Form.Check // prettier-ignore
                                                                type={type}
                                                                id={`default-${type}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </td>
                                            <td className='d-flex flex-wrap align-items-center'>
                                                <img src="\images\5.jpg" className='rounded mx-2' alt="5" />
                                                <p>Beef Burger</p>
                                            </td>
                                            <td>Bob Smith</td>
                                            <td>02/08/2024</td>
                                            <td>$15.99</td>
                                            <td className='bg-orange'>Pending</td>
                                        </tr>
                                        <tr className='td-bg'>
                                            <td>
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`default-${type}`}>
                                                            <Form.Check // prettier-ignore
                                                                type={type}
                                                                id={`default-${type}`}
                                                            />
                                                        </div>
                                                    ))}
                                                </Form>
                                            </td>
                                            <td className='d-flex flex-wrap align-items-center'>
                                                <img src="\images\6.jpg" className='rounded mx-2' alt="6" />
                                                <p>Japanese Ramen</p>
                                            </td>
                                            <td>Alice Johnson</td>
                                            <td>05/05/2024</td>
                                            <td>$10.99</td>
                                            <td className='bg-green'>Delivered</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className='col-5 chart-2 p-3 '>
                        <div className='bg-white'>
                            <div>
                                <h5 className='px-2 pt-2 m-0'>Order Reports</h5>
                                <hr />
                            </div>
                            <div >
                                <ApexChart1 />
                            </div>
                            <div className='chart-dish p-2'>
                                <h5 className='p-2 text-dark'>
                                    Today's Special Dish
                                </h5>
                                <div className='chart-dish-img'>
                                </div>
                                <h5 className='p-2'>Spicy Burger with Extra Cheese</h5>
                                <div className='col-12 d-flex flex-wrap'>
                                    <div className='d-flex flex-wrap col-6 px-2 justify-content-start'><p>$10.53</p></div><div className='d-flex flex-wrap col-6 px-2 justify-content-end'><p><i class="fa-solid fa-heart"></i> 200k</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Menuorder />
        </>
    )
}

export default Dashbord