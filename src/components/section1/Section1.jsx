import React from 'react'
import './Section.css'
import vu from '../../images/Rectangle 2.svg'
import per1 from '../../images/100.svg'
import per2 from '../../images/50+.svg'
import per3 from '../../images/20+.svg'
import img1 from '../../images/Rectangle 3.svg'
import img2 from '../../images/Rectangle 4.svg'
import img3 from '../../images/Rectangle 5.svg'

const Section1 = () => {
  return (
    <div className='section1'>

        <div className="title">
            <h1 id="title-text">The New Future <br />Of Architect</h1>
            <div className="vertical-line"></div>
            <div className="paragraph">
                <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            illo recusandae libero maxime minus, enim ipsa quaerat voluptas
            aspernatur ratione molestias quae accusamus sapiente hic
                </p>
            </div>
        </div>

        <div className="cover">
            <img src={vu} alt="" />
        </div>

        <div id="title2">
            <h1 id="title-text">We deliver the best <br/>of the best <span>to our clients</span></h1>
            <hr className="horizontal-line2" />
        </div>
    <div className='section 2'>
        <div className='list'>
            <h1>Building for the best</h1>
            <div className='num'>
                <img src={per1}alt='' /> 
                <h4>Employees <br/> satisfaction</h4>
            </div>
            <div className='num'>
                <img src={per2}alt=''/>
                <h4>Projects <br/> Completed</h4>
            </div>
            <div className='num'>
                <img src={per3} alt=''></img>
                <h4>Experience</h4>
            </div>
        </div>    

    </div>
    <div className='section3'>
        <img src={img1} alt=''></img>
        <img src={img2} alt=''></img>
        <div className='img3'>
            <img src={img3} alt=''></img>
            <h5>See More Work</h5>
        </div>


    </div>
        
    </div>
  )
}

export default Section1