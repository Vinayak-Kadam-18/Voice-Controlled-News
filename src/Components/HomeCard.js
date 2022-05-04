import React from 'react'
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';

export default function HomeCard(props) {
  return (
    <div>
    <Card className='border-2 inline-block  text-center font-serif rounded-2xl text-slate-100' style={{backgroundColor: props.color}}>
        <CardBody className='p-5'>
          <CardTitle className='text-2xl font-bold'>{props.title}</CardTitle>
          <CardSubtitle className='mt-20 font-semibold md:text-xl'>{props.subtitle}</CardSubtitle>
          <CardText>{props.terms}</CardText>

          <CardSubtitle className='mt-20 md:text-xl'>Try Saying</CardSubtitle>
          <CardText>Give me the latest News</CardText>
        </CardBody>
    </Card>

    </div>
  )
}
