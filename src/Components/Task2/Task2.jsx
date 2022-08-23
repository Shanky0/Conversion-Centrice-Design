import React from 'react';
import Detail from './detail';
import './Task2.css';

const Task2 = () => {
  return (
    <div id="task2Container">

      {/* Main Section Starts */}

      <div id="mainSection">
        <div id="navSection">
          <div>
            <img src='https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/logo-university.png' alt='logo' style={{ width: "30%" }} />
            <div style={{ fontSize: "1.5vw",color:"white" }}><button style={{ fontSize: "1.5vw", padding: "1vh 3vh", backgroundColor: "green", borderRadius: "1vh", color: "white", cursor: "pointer" }}>Subscribe</button> or <button style={{ fontSize: "1.5vw", padding: "1vh 3vh", backgroundColor: "#337ab7", borderRadius: "1vh", color: "white", cursor: "pointer" }}>Login</button></div>
          </div>
        </div>
        <div id="heroSection">
          <div>
            <h1>Want to make facebook advertising easy again?</h1>
            <h3>Welcome to AdEspresso University</h3>
          </div>
          <img src='https://university.adespresso.com/wp-content/themes/ae-brew-child/library/images/ico/dude-graduated.png' alt='dude_Graduated' />
        </div>
      </div>

      {/* Main Section Ends */}

      {/* Details Section  starts*/}

      <div id="detailContainer">
        <Detail src={'https://img.freepik.com/premium-vector/education-elearning-concept-3d-illustration-icon-composition-with-site-interface-with-educational-platform-online-lessons-video-lectures-books-vector-illustration-modern-web-design_198565-1659.jpg'} heading={'Video Couses'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur perspiciatis voluptatibus et dicta dolorum adipisci officiis amet vero atque.'}/>
        <Detail src={'https://us.123rf.com/450wm/vectorplusb/vectorplusb1707/vectorplusb170700232/83008557-free-webinar-play-online-button-vector-illustration-in-laptop-notebook-computer-screen-vector-illust.jpg?ver=6'} heading={'Live Webinars'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur perspiciatis voluptatibus et dicta dolorum adipisci officiis amet vero atque.'}/>

        <Detail src={'https://www.veille-reputation.com/wp-content/uploads/2019/09/Capture-d%E2%80%99e%CC%81cran-2019-09-06-a%CC%80-09.49.58-1200x730.png'} heading={'AD Gallery'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur perspiciatis voluptatibus et dicta dolorum adipisci officiis amet vero atque.'}/>

        <Detail src={'https://cdni.iconscout.com/illustration/premium/thumb/scientist-doing-experiment-2933407-2438582.png'} heading={'Experiments'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti pariatur perspiciatis voluptatibus et dicta dolorum adipisci officiis amet vero atque.'}/>
      </div>

      {/* Details Section Ends */}

      {/* Footer Section Starts */}

      <div id="footer">
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, blanditiis. Natus repudiandae illum itaque dolor odit reiciendis ut, incidunt saepe vero mollitia? Repellendus quos accusamus necessitatibus ullam, ipsa eaque, ab delectus commodi fuga earum!
        </div>
      </div>

      {/* Footer Section Ends */}

    </div>
  )
}

export default Task2