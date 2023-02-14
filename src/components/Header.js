import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../ressources/svg/play_circle.svg'
import home from '../ressources/svg/home.svg'
import movie from '../ressources/svg/movie.svg'
import tv from '../ressources/svg/tv.svg'

const Header = () => {

    let listener = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 140) {
            if (scrollState !== "down") {
            setScrollState("down")
            }
        } else {
            if (scrollState !== "top") {
            setScrollState("top")
            }
        }
        })
        return () => {
        document.removeEventListener("scroll", listener)
        }
    }, [scrollState])


    return (
        <div className='Header' 
            style={{
                backgroundColor: scrollState === "top" ? "" : "black",
                transition: 'linear 300ms'
            }}
        >
            <NavLink to='/' activeClassName='ActiveNavItem' className='LogoTitleBox'>
                <img src={logo} alt='play-icon' className='PlayIcon'/>
                <h1 className='MyMoviesTitle'>My Movies</h1>
            </NavLink>
            <ul className='NavList'>
                <li>
                    <NavLink to='/' activeClassName='active' className='NavItem'>
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/films' activeClassName='active' className='NavItem'>
                        Films
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/series' activeClassName='active' className='NavItem LastNavItem'>
                        Séries
                    </NavLink>
                </li>
            </ul>
            <ul className='NavListMini'>
                <li>
                    <NavLink to='/' activeClassName='active' className='NavItemMini'>
                        <img src={home} alt='home-icon' className='NavIconMini HomeIcon'/>
                        <h3 className='NavItemTitleMini'>Accueil</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/films' activeClassName='active' className='NavItemMini'>
                        <img src={movie} alt='movie-icon' className='NavIconMini MovieIcon'/>
                        <h3 className='NavItemTitleMini'>Films</h3>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/series' activeClassName='active' className='NavItemMini LastNavItemMini'>
                        <img src={tv} alt='tv-icon' className='NavIconMini TvIcon'/>
                        <h3 className='NavItemTitleMini'>Séries</h3>
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Header;
