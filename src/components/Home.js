
import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useSpring, animated, useTransition } from 'react-spring';
import './styles.css'
const Home = (props) => {

    //for animation
    // const [items, setItems] = useState([])
    // const transition = useTransition(items, {
    //     from: { x: -200, y: 50, opacity: 0, width: 10, height: 10 },
    //     enter: item => async (next) => {
    //         await next({ y: item.y, opacity: 1, delay: item.delay });
    //         await next({ x: 0, y: 0, width: 100, height: 100 })
    //     },
    //     leave: { y: 100, opacity: 0 }
    // });

    let { mode } = props;
    if (mode === 'dark') {
        document.body.style.backgroundColor = '#04293A'
        document.body.style.color = 'white'
    }
    else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }

    let fade = useSpring({
        from: {
            opacity: 0,
            size: '0%'
        },
        to: {
            opacity: 1,
            size: '100%'
        },

        delay: 700
    })
    let fade2 = useSpring({
        from: {
            opacity: 0,
            size: '0%'
        },
        to: {
            opacity: 1,
            size: '100%'
        },

        delay: 1000
    })

    let fade3 = useSpring({
        from: {
            opacity: 0,
            size: '0%'
        },
        to: {
            opacity: 1,
            size: '100%'
        },

        delay: 1300
    })

    return (
        <>
            <h1 className="container d-flex justify-content-center" style={{fontSize:'100px' ,marginTop: '90px' }} >
                <animated.h1 style={fade}>Pigeon news
                    <img src="https://img.icons8.com/external-icongeek26-flat-icongeek26/50/000000/external-dove-origami-icongeek26-flat-icongeek26.png" alt='icon' />
                </animated.h1>
            </h1>
            <animated.h3 className="container d-flex justify-content-center" style={fade2}>Read Latest news any time, anywhere!</animated.h3>
            <br /><br />
            <animated.div className='container-fluid flex-wrap btn-group d-flex justify-content-center ' style={fade3}>
                <animated.div  >
                    <Link to="/general" type="button" style={{width:'150px', marginRight:'20px'}} className={`btn btn-info ${mode === 'dark' ? 'border-light' : ''}`}>General</Link>
                </animated.div>

                    <animated.div>
                        <Link to="/business" type="button" style={{width:'150px', marginRight:'20px'}} className={`btn btn-info ${mode === 'dark' ? 'border-light' : ''}`}>Business</Link>
                    </animated.div>
                    <animated.div  >
                        <Link to="/health" type="button" style={{width:'150px', marginRight:'20px'}} className={`btn btn-info ${mode === 'dark' ? 'border-light' : ''}`}>Health</Link>
                    </animated.div>

                <animated.div  >
                    <Link to="/science" type="button" style={{width:'150px', marginRight:'20px'}} className={`btn btn-info  ${mode === 'dark' ? 'border-light' : ''}`}>Science</Link>
                </animated.div>

                <animated.div  >
                    <Link to="/technology" type="button" style={{width:'150px', marginRight:'20px'}} className={`btn btn-info ${mode === 'dark' ? 'border-light' : ''}`}>Technology</Link>
                </animated.div>
                <animated.div >
                    <Link to="/entertainment" type="button" style={{width:'150px', marginRight:'20px'}} className={`btn btn-info ${mode === 'dark' ? 'border-light' : ''}`}>Entertainment</Link>
                </animated.div>

                <animated.div >
                    <Link to="/sports" type="button" style={{width:'150px', marginRight:'20px'}} className={`btn btn-info ${mode === 'dark' ? 'border-light' : ''}`}>Sports</Link>
                </animated.div>
          </animated.div>



        </>
    )

}

export default Home;
