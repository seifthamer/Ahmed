import React from 'react'
import './Nav2.css'
import scren1 from '../../images/Screenshot 1 (1).svg'
import scren2 from '../../images/Screenshot 2 (2).svg'
import scren3 from '../../images/Screenshot 3 (3).svg'
import scren4 from '../../images/Screenshot 4 (4).svg'

const Nav2 = () => {
  
  return (
    <div className='nav2'>
        <h2>Satisfied Clients</h2>
        <div className='butt'>
            <img src={scren1}alt=''></img>
            <img src={scren2}alt=''></img>
            <img src={scren3}alt=''></img>
            <img src={scren4}alt=''></img>

        </div>

    </div>
  )
}

export default Nav2