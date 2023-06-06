import React, { useEffect, useState } from 'react';
import DataTape from '../DataTape/DataTape';
import CardArticles from './card_articles/CardArticles';
import { getArticles } from '../../api/modules/articles/getArticles';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    
    const handleGetArticles = async() => {
            const res = await getArticles();

            if (res !== "error") {
                setArticles(res.data.articles);
            };
    };

    useEffect(() => {
        handleGetArticles();
    }, []);

    return ( 
        <DataTape getArticles={handleGetArticles} name="News feed" type="articles">
            {
                articles.map((item, index) => 
                    <CardArticles getArticles={handleGetArticles} article={item} key={index} />
                )
            }
        </DataTape>
    );
};
 
export default Articles;