import React from 'react';
import Card from './Card';

export default function Cards () {
    const cardList = [
        {
            title:"Total Customers",
            count:2000,
            percent: "100%"
        },
        {
            title:"Members",
            count:2000,
            percent: "100%"
        },
        {
            title:"Active",
            count:2000,
            percent: "100%"
        }
    ];
    
  return (
    <div className='row'>
        <div className=' col-12 p-0 d-flex justify-content-between gap-2'>
            {
                cardList.map((v,k)=>(
                    <Card title={v.title} count={v.count} percent={v.percent} key={k} />
                ))
            }
        </div>
    </div>
  )
}
