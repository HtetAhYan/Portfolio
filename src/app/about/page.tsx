import dynamic from 'next/dynamic'
import React from 'react'
const Zero1 = dynamic(() => import('@/components/General/01'))


 const Page = () => {
  return (
    <div className='overflow-hidden'>    <Zero1 /></div>
  )
}
export default Page