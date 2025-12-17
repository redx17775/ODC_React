import React from 'react'


type Props={
    date: string;
}
export const SubTitel = ({date}:Props) => {
  const d = new Date();
  return (
    <>
    <h3 className='text-2xl text-blue-600'>
        {date? date : `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`}
    </h3>
    </>
  )
}
