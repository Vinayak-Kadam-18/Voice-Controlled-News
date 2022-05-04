import React from 'react'
import Cards from './Cards'
import HomeCard from './HomeCard'


export default function NewsCards({ articles, activeArticle }) {

    if(!articles.length)
    {
        return(
                <div className='p-5 md:p-20 md:grid md:grid-cols-3 gap-20'>
                       
                        <div className='pb-5'><HomeCard title="News By Categories" subtitle="Categories" terms="Buisness, Entertaiment, General, Sports, Health, Science, Technology" color="#355c7d"/></div>
                        <div className='pb-5'><HomeCard title="News By Terms" subtitle="Terms" terms="Bitcoin, Playstation 5, Smartphones, Donald trump.." color="#f67280"/></div>
                        <div className='pb-5'><HomeCard title="News By Source" subtitle="Sources" terms="CNN, Wired, BBC News, Time, IGN, BuzFedd, ABC News" color="#6c5b7b"/></div>
                </div>
            
        )
    }
  return (
    <div className='grid grid-cols-1 p-5 md:grid-cols-3 gap-10'>
        {console.log(articles)}
        {articles.map((article,i)=>(
            <Cards data={article} index={i} activeArticle={activeArticle}/>
        ))}
    </div>
  )
}
