import React, { useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from "react-infinite-scroll-component";
import { PropTypes } from 'prop-types';

export default function News(props) {

    let { mode, category } = props
    document.title = `PIGEON news- ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`
    if (mode === 'dark') {
        document.body.style.backgroundColor = '#04293A'
        document.body.style.color = 'white'
    }
    else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(true);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);

    const updateNews = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c4149d541aa1495d8b262399972b4c28&pageSize=${props.pageSize}&page=${page}`;
        setloading(true);
        let data = await fetch(url);
        let parseddata = await data.json();
        setarticles(parseddata.articles);
        settotalResults(parseddata.totalResults);
        setloading(false);
    }

    useEffect(() => {
        updateNews();
    }, []);



    const fetchMoreData = async () => {
        setloading(true);
        
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=c4149d541aa1495d8b262399972b4c28&pageSize=${props.pageSize}&page=${page+1}`;
        setpage(page + 1);
        let data = await fetch(url);
        let parseddata = await data.json();
        setarticles(articles.concat(parseddata.articles));
        settotalResults(parseddata.totalResults);
        setloading(false);
    };

    let a = category
    return (
        <div className="container-fluid flex-wrap d-flex justify-content-center "  style={{marginTop:'90px'}}>
            {loading && <div style={{ textAlign: 'center' }}>
                <div className="spinner-grow text-info mx-1 my-3" role="status" style={{ textAlign: 'center' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info mx-1 my-3" role="status" style={{ textAlign: 'center' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-grow text-info mx-1 my-3" role="status" style={{ textAlign: 'center' }}>
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}
            <h3 className='my-3'>Pigeon News -Top {a.charAt(0).toUpperCase() + a.slice(1)} Headlines:</h3>

            <InfiniteScroll className=" container-fluid flex-wrap mx-2 row d-flex justify-content-center"
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<div style={{ textAlign: 'center' }}>
                    <div className="spinner-grow text-info mx-1 my-3" role="status" style={{ textAlign: 'center' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info mx-1 my-3" role="status" style={{ textAlign: 'center' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <div className="spinner-grow text-info mx-1 my-3" role="status" style={{ textAlign: 'center' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            >
                <div className=" container-fluid flex-wrap mx-2 row d-flex justify-content-center">
                    {articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <Newsitem title={element.title.slice(0, 80)} desc={element.description ? element.description.slice(0, 100) : ""} imgurl={element.urlToImage} url={element.url} mode={mode} source={element.source.name} date={element.publishedAt} />
                        </div>
                    })}

                </div>

            </InfiniteScroll>
        </div>

    )

}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.protoTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    categroy: PropTypes.string
}