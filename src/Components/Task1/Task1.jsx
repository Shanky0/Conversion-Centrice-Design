import React from 'react';
import Reason from './Reason';
import './Task1.css';
import Testimonial from './Testimonial';

const Task1 = () => {
    const testimonial = [
        { "src": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates", "name": "Parker", 'location': "London" }
    ]
    return (
        <>
            <div id="mainContainer">

                {/* Hero section Starts  ---------------------------*/}

                <div id="heroSection">
                    <div id="logo"><img src='https://www.loans.co.za/wp-content/uploads/2017/12/ooba.png' alt='logo ooba' /></div>
                    <h1 style={{ color: 'white', marginTop: "-3vh", textAlign: "center" }}>Get a helping hand with your home loan</h1>

                    <div id="subMainSection">
                        <div id='subMainText'>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi distinctio dicta. Dolore magni enim quia et nisi velit amet, dolores ullam, consectetur reprehenderit fugiat iusto nihil culpa sint hic.</h3>
                            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eligendi distinctio dicta. Dolore magni enim quia et nisi velit amet, dolores ullam, consectetur reprehenderit fugiat iusto nihil culpa sint hic.</h3>
                        </div>
                        <div id='prequalifyForm'>
                            <table>
                                <tr>
                                    <td><input placeholder='Title' autoFocus defaultValue='Title' /></td>
                                    <td><input placeholder='First Name*' /></td>
                                </tr>
                                <tr>
                                    <td><input placeholder='Last Name*' /></td>
                                    <td><input placeholder='Email*' /></td>
                                </tr>
                                <tr>
                                    <td><input placeholder='Phone Number*' /></td>
                                    <td><input placeholder='ID Number*' /></td>
                                </tr>
                            </table>
                            <div>
                                <h5>Do you have signed sale agreement for property.*</h5>
                                <span><input type='radio' className='radio' name='agreement' value='Yes' /><label>Yes</label> <input type='radio' className='radio' name='agreement' value='no' /> <label>No</label></span>
                            </div>
                            <button className='btn'>PREQUALIFY ME</button>
                        </div>
                    </div>
                </div>
                {/* Hero Section Ends  ----------------------------------*/}

                {/* Advantage Section Starts */}

                <div id="advantageSection">
                    <div style={{ textAlign: "center", color: "grey", padding: "7vh" }}>
                        <h1 style={{ fontSize: "2.8vw" }}>Get the ooba Advantage</h1>
                        <h3 style={{ fontSize: "1.5vw" }}>Show the estate agent and seller that you mean business </h3>
                    </div>
                    <div style={{ width: "70%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                        <div id='advantageList'>
                            <h3>
                                1. Know your credit profile
                            </h3>
                            <p>Banks reject 35% loans due to low credit score</p>
                            <h3>
                                2. Know your credit profile
                            </h3>
                            <p>Banks reject 35% loans due to low credit score</p>
                            <h3>
                                3. Know your credit profile
                            </h3>
                            <p>Banks reject 35% loans due to low credit score</p>
                            <h3>
                                4. Know your credit profile
                            </h3>
                            <p>Banks reject 35% loans due to low credit score</p>
                        </div>
                        <div id='advantageCards'>
                            <Testimonial detail={testimonial[0]} />
                        </div>
                    </div>
                </div>
                {/* Advantage section Ends */}

                {/* Reasons section starts */}

                <div id="reasonSection">
                    <h1>
                        Reasons to use ooba
                    </h1>
                    <div>
                        <Reason icons={<i class="fa-solid fa-graduation-cap"></i>} text={'Expert Advice'} />
                        <Reason icons={<i class="fa-solid fa-thumbs-up"></i>} text={'Our Service is completely free'} />
                        <Reason icons={<i class="fa-solid fa-check"></i>} text={'70% of application approved'} />
                        <Reason icons={<i class="fa-solid fa-clipboard-list"></i>} text={'We handle the paperwork'} />
                        <Reason icons={<i class="fa-solid fa-building-columns"></i>} text={'Can apply with upto 8 banks'} />
                    </div>

                    <button>I'M Ready, Prequalify me</button>
                </div>
                {/* Reason Section Ends */}

                {/* Testimonial Section starts */}
                <div id="testimonialSection">
                    <Testimonial detail={testimonial[0]} />
                    <Testimonial detail={testimonial[0]} />
                    <Testimonial detail={testimonial[0]} />
                </div>

                {/* Testimonal Section Ends */}


                {/* Footer Section Starts */}

                <div id="footerContainer">
                    <div>
                        <div style={{width:"30%"}}>
                            <h1>Head office</h1>
                            <h6 style={{fontSize:"1vw",marginTop:"1vh"}}> 8th floor, ooba house,</h6>
                            <h6 style={{fontSize:"1vw"}}> 36 Brown Street</h6>
                            <h6 style={{fontSize:"1vw"}}> Cape Town</h6>
                            <h6 style={{fontSize:"1vw",marginTop:"1vh"}}> Tel: +3:3453453</h6>
                        </div>
                        <div style={{width:"50%"}}>
                                <h5 style={{fontSize:"1vw"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae corrupti quibusdam expedita tempora tempore. Eligendi molestiae sapiente voluptatum possimus itaque quod amet velit iusto nihil architecto, illo corporis, dolore iure?</h5>
                                <h4 style={{fontSize:"1.2vw",marginTop:"1.9vh"}}> FSP Website</h4>
                        </div>
                    </div>
                </div>

                {/* Footer Section Ends */}
            </div>
        </>
    )
}

export default Task1