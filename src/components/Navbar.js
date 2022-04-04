import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar(props) {

    let { title, mode, togglemode } = props;
    return (
        <div>
            <div className={`navbar fixed-top navbar-${mode} bg-${mode}`} >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/general">
                        <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-dove-origami-icongeek26-flat-icongeek26.png" alt='icon' />
                        <span style={{ fontFamily: "revert", fontSize: '25px' }}>{title}</span>
                    </Link>
                    <div>
                        <button type="button" className="btn shadow-none" onClick={props.togglemode} style={{ position: 'relative' }}>{props.m}</button>

                        <span type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAAbElEQVRoge3WwQ2DMBAEQIjSQmqgilTvKqCF0ANpIAiEgk8rzXzPj135s8MAANQZ9w7v+bP1DHKkTa+fWR+9g/xbfIHn2YdtWe/McVn8D8QXAMKZEtXiC5gS1eILAOFMiWrxBUyJavEFAIBKX7WEE8Pc59IiAAAAAElFTkSuQmCC" alt='icon' />
                        </span>
                    </div>

                    <div className={`offcanvas offcanvas-end bg-${mode}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <p className="offcanvas-title" id="offcanvasNavbarLabel">
                                <Link className="navbar-brand" to="/general">
                                    <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-dove-origami-icongeek26-flat-icongeek26.png" alt='icon' />
                                    <span style={{ fontFamily: "revert", fontSize: '25px' }}>{title}</span>
                                </Link>
                            </p>

                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>

                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">

                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                                </li>
                                <br></br>
                                <li className="nav-item">
                                    <span className="nav-link inactive" aria-current="page" style={{ color: 'darkgrey' }}>News genres:</span>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business" >Business</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">General</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

