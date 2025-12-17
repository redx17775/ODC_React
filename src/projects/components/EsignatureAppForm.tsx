import React, { useRef } from 'react'
type Props = {
  SetDate:React.Dispatch<React.SetStateAction<string>>;
  SetName:React.Dispatch<React.SetStateAction<string>>;
}
export const EsignatureAppForm = (props: Props) => {
  function submit(){
    if(myname.current)
      props.SetName(myname.current.value)
    
    if(mydate.current)
      props.SetDate(mydate.current.value)
  }
  const myname = useRef<HTMLInputElement>(null);
  const mydate = useRef<HTMLInputElement>(null);

  return (
    <>
        <form action="#" className='flex flex-col border p-4 gap-4'>
            <label htmlFor="" className='text-sm block'>Enter your name: <input type="text" className='block border border-gray-700 rounded-lg bg-gray-100 w-full p-2' ref={myname}/></label>
            <label className='text-sm block'>Enter Today Date: <input type="date" name="" id="" className='blcok border border-gray-700 rounded-lg bg-gray-100 w-full p-2' ref={mydate}/></label>
            <div className='flex justify-center'>
              <button className='bg-blue-600 text-white p-2 rounded-lg w-32 hover:bg-blue-700 transition' onClick={submit}>Submit</button>
            </div>

          </form>
    </>
  )
}
