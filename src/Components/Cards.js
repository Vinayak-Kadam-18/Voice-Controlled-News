import React from 'react'
import classNames from 'classnames';
import { Card, CardImg,  CardText, CardBody,
    CardTitle, CardSubtitle,CardFooter } from 'reactstrap';


export default function Cards({data,index,activeArticle}) {

 
  console.log(activeArticle);
  return (

    <>
    <a href={data.url}>
        <Card className={classNames('bg-slate-50 overflow-hidden border shadow-lg font-serif transition md:hover:scale-105 md:hover:shadow-2xl',
        {
          'border-b-8 border-b-violet-800': activeArticle===index
        })}>
          <CardImg className='h-56 w-full md:h-48 md:w-full' src={data.urlToImage} />
        <CardBody className=' p-5 md:h-52'>
          <div className='flex justify-between'>
             <CardSubtitle className='md:text-md text-gray-500'>{data.source.name}</CardSubtitle>
              <CardTitle className='md:text-md text-gray-500 text-right'>{new Date(data.publishedAt).toDateString()}</CardTitle>
          </div>         
          <CardTitle className='md:text-md font-semibold'>{data.title}</CardTitle>      
          <CardText className='pt-3'>{ data.description? (data.description.length>150 ? data.description.substring(0,150) : data.description) : " "}....</CardText>
        </CardBody>
        <CardFooter className='pr-5 pb-2 text-right text-md font-semibold'>{index+1}</CardFooter>
      </Card>
    </a>
    </>
  )
}
