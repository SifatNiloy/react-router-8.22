import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>Welcome to my routing website!!!</h2>
            <nav>
                <Link className='link' to="/home">Home</Link>
                <Link className='link' to="/posts">Posts</Link>
                <Link className='link' to="/friends">Friends</Link>
                <Link className='link' to="/countries">Countries</Link>
                <Link className='link' to="/About">About</Link>
                {/* <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink> */}
            </nav>

        </div>



    )

};

export default Header;