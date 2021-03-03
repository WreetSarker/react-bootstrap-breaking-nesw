import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=523b3018d46741e1a7a8a8c2c6998749')
            .then(resp => resp.json())
            .then(data => setArticles(data.articles))
    }, [])
    return (
        <div>
            <h2>Total Top News's: {articles.length}</h2>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;