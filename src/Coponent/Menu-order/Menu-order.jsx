import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function Menuorder() {
    return (
        <>
            <section className='bg-col'>
                <Container fluid>
                    <div className='col-12 d-flex flex-wrap'>
                        <div className='menu-head col-12 d-flex flex-wrap'>
                            <div>
                                <h2>Trending orders</h2>
                            </div>
                        </div>
                    </div>
                </Container>

                <Container fluid>
                    <div className='col-12 d-flex pt-4 pb-120 flex-wrap'>
                        <div className='col-3 p-2'>
                            <Link> 
                            <Card style={{ width: '100%' }}>
                                <div className='card-wraper'>
                                    <Link> 
                                    <Card.Img variant="top" className='card-img img-fluid' src="\images\1 (1).jpg" />
                                     </Link> 
                                </div>
                                <Card.Body>
                                    <div className='col-12 d-flex flex-wrap'>
                                        <div className='col-10'> <h5>Poultry Palace</h5></div>
                                        <div className='col-2 d-flex justify-content-end align-items-center'><h5>$20.00</h5></div>
                                    </div>
                                    <Card.Text>
                                        Healthy Foods are nutrient-Dense Foods
                                    </Card.Text>
                                    <hr />
                                    <div className='col-12 d-flex flex-wrap'>
                                        <div className='col-6 justify-content-start d-flex align-items-center'>
                                            <p>200 Sale</p>
                                        </div>
                                        <div className='col-6 d-flex justify-content-end align-items-center'>
                                            <p><i class="fa-solid fa-star"></i> 4.5</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                             </Link> 
                        </div>
                        <div className='col-3 p-2'>
                            <Link> 
                            <Card style={{ width: '100%' }}>
                                <div className='card-wraper'>
                                    <Link> 
                                    <Card.Img variant="top" className='card-img img-fluid' src="\images\2 (1).jpg" />
                                     </Link> 
                                </div>
                                <Card.Body>
                                    <div className='col-12 d-flex flex-wrap'>
                                        <div className='col-10'> <h5>Poultry Palace</h5></div>
                                        <div className='col-2 d-flex justify-content-end align-items-center'><h5>$20.00</h5></div>
                                    </div>
                                    <Card.Text>
                                        Healthy Foods are nutrient-Dense Foods
                                    </Card.Text>
                                    <hr />
                                    <div className='col-12 d-flex flex-wrap'>
                                        <div className='col-6 justify-content-start d-flex align-items-center'>
                                            <p>200 Sale</p>
                                        </div>
                                        <div className='col-6 d-flex justify-content-end align-items-center'>
                                            <p><i class="fa-solid fa-star"></i> 4.5</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                             </Link> 
                        </div>
                        <div className='col-3 p-2'>
                            <Link> 
                            <Card style={{ width: '100%' }}>
                                <div className='card-wraper'>
                                    <Link> 
                                    <Card.Img variant="top" className='card-img img-fluid' src="\images\3 (1).jpg" />
                                     </Link> 
                                </div>
                                <Card.Body>
                                    <div className='col-12 d-flex flex-wrap'>
                                        <div className='col-10'> <h5>Poultry Palace</h5></div>
                                        <div className='col-2 d-flex justify-content-end align-items-center'><h5>$20.00</h5></div>
                                    </div>
                                    <Card.Text>
                                        Healthy Foods are nutrient-Dense Foods
                                    </Card.Text>
                                    <hr />
                                    <div className='col-12 d-flex flex-wrap'>
                                        <div className='col-6 justify-content-start d-flex align-items-center'>
                                            <p>200 Sale</p>
                                        </div>
                                        <div className='col-6 d-flex justify-content-end align-items-center'>
                                            <p><i class="fa-solid fa-star"></i> 4.5</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                             </Link> 
                        </div>
                        <div className='col-3 p-2'>
                            <Link> 
                            <Card style={{ width: '100%' }}>
                                <div className='card-wraper'>
                                    <Link> 
                                    <Card.Img variant="top" className='card-img img-fluid' src="\images\4 (1).jpg" />
                                     </Link> 
                                </div>
                                <Card.Body>
                                    <div className='col-12 d-flex flex-wrap'>
                                        <div className='col-10'> <h5>Poultry Palace</h5></div>
                                        <div className='col-2 d-flex justify-content-end align-items-center'><h5>$20.00</h5></div>
                                    </div>
                                    <Card.Text>
                                        Healthy Foods are nutrient-Dense Foods
                                    </Card.Text>
                                    <hr />
                                    <div className='col-12 d-flex flex-wrap'>
                                        <div className='col-6 justify-content-start d-flex align-items-center'>
                                            <p>200 Sale</p>
                                        </div>
                                        <div className='col-6 d-flex justify-content-end align-items-center'>
                                            <p><i class="fa-solid fa-star"></i> 4.5</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                             </Link> 
                        </div>
                    </div>
                </Container>
                
            </section >
            {/* <div className='col-2 d-flex justify-content-end align-items-center'><i class="fa-solid fa-star px-2 text-success"></i>3.9</div> */}
        </>
    )
}

export default Menuorder