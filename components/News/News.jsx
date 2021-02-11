import React, { useEffect, useState } from 'react'
import Style from './news.module.scss'
import { doFetch } from '../../helpers/fetch';

export function News (){

    const [news, setNews] = useState([])

    const newsUrl = 'https://api.mediehuset.net/bakeonline/news'

    const getNews = async () => {
        let res = await doFetch(newsUrl)
        setNews(res)
    }

    useEffect(() => {
        getNews()
        return null
    }, [])

    return (
        <section className={Style.news}>

            <article>
                <h2>Vi skaber lækkert! brød</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, obcaecati!</p>
            </article>

            <div className={Style.newsGrid}>

                {news.items && news.items.map((item, i) => {
                    if (i < 3){
                        return (
                            <div key={item.id} id={item.id}>
                                <img src={item.image} alt={item.title}></img>
                                <h4>{item.title}</h4>
                                <p>{item.teaser}</p>
                            </div>
                        )
                    }
                    else{
                        return null
                    }
                })}
            </div>
        </section>
    )
}