import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my routing website!!!</h2>
            <nav>
                <Link to="/home">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/countries">Countries</Link>
                <Link to="/About">About</Link>
                {/* <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/about">About</CustomLink> */}
            </nav>

        </div>



    )

};

export default Header;