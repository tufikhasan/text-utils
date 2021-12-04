import React from 'react'
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        //javaScript Template literals
        <nav className={`navbar shadow navbar-expand-lg navbar-${props.mood} bg-${props.mood}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <div className={`form-check form-switch text-${props.mood==='light'?'dark':'light'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMood} id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Darkmood</label>
                </div>
            </div>
        </nav>
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
    title: "Set Title",
}