import './FooterStyle.css'

import React from 'react'
import {Link} from 'react-router-dom'
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <p>Nangloi</p>
                            <p>Delhi</p>
                        </div>
                    </div>
                    <div className='phone'>
                        <h4> <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} /> 8447831331 </h4>
                    </div>
                    <div className='email'>
                        <h4>
                            <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                            anshucse22@gmail.com
                        </h4>
                    </div>

                </div>
                <div className='right'>
                    <h4>You can also contact here..</h4>
                    <div className='social'>
                        <a href="https://www.linkedin.com/in/anshu-kumari-5b014418a/">
                        <FaLinkedin size={20}
                            style={{ color: "white", marginRight: "2rem" }} />
                        </a>    
                        <a href="https://github.com/anshukumari2001">
                        <FaGithub size={20}
                            style={{ color: "white", marginRight: "2rem" }} />
                        </a>    
                        

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Footer
