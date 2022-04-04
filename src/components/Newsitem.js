import React from 'react'
import img from './news.jpg'

export default function Newsitem(props) {
        let{title ,desc, imgurl, url, mode, source, date} = props;
        return (
            <div className='card-columns'>
                <div className={`card ${mode==='light'?'bg-light':'border-light bg-dark'} p-3 shadow p-3 mb-5 bg-${mode} rounded`} style={{width: '18rem', height:'35rem'}}>
                    <img src={imgurl?imgurl:img} className="card-img-top" alt="..." style={{height:'180px', width:'250px'}}/>
                    <span class="badge bg-info text-dark position-absolute top-0 start-0" style={{font:'caption', fontSize:'small', color:'white'}}>Source: {source}</span>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{desc}...</p>
                            <small style={{font:'caption', fontSize:'small', color:'gray'}}>Published on: {new Date(date).toUTCString()}</small>
                            <br/>
                            <a href={url}  target='_blank'  rel="noreferrer" className={`btn btn-sm btn-outline-${mode==='dark'?'light':'dark'} `}>Read more..</a>
                        </div>
                </div>
            </div>
        )

}
