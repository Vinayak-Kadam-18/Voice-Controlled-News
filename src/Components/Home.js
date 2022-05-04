import React,{ useState, useEffect } from 'react'
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from './NewsCards';
import wordsToNumbers from 'words-to-numbers';

const alanKey ='5e7b576d38f95af5229f3c1b0cf712732e956eca572e1d8b807a3e2338fdd0dc/stage';
const API_KEY='07c449818d16483cbc323636da744118';
export default function Home() {
const [newsArticle, setNewsArticle] = useState([]);
const [activeArticle, setActiveArticle] = useState(-1);

// const fetchItems = async () =>{
//         const data = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
//         const item = await data.json();
//         setNewsArticle(item.articles);

// }

useEffect(() => { 
   
    // fetchItems();


    alanBtn({   
        key: alanKey,
        onCommand:({ command, articles, number })=>{
            if(command==='newHeadlines'){
                setNewsArticle(articles);
                setActiveArticle(-1);
                console.log(articles);
            }
            else if(command==='highlight')
            {
                    setActiveArticle((prevactiveArticle)=> prevactiveArticle + 1 );
            }
            else if(command==="open")
            {
                const parsedNumber = number.length>2 ? wordsToNumbers(number,{fuzzy:true}) : number;
                window.open(articles[parsedNumber-1].url);
            }
        }
    })
  

 }
, [])


  return (
    <>
   
        <div>
            <div className='flex justify-center items-center font-bold font-serif text-2xl p-10 md:pt-10'>
                <p className='text-violet-600'>AI NEWS APPLICATION</p> 
            </div>
            <div className='md:p-20'>
                 <NewsCards articles={newsArticle} activeArticle={activeArticle}/>
            </div>
            
        </div>
    </>
  )
}
