import React from 'react'

function VideoCard({url,thumbnail,duration,channelTitle,channelLink,descTitle,views,likes,publish}) {
  return (
    <div className='flex w-[400px] flex-col rounded-lg z-10 duration-100 hover:scale-105'>
      <div className='relative'>
        <img src={thumbnail} alt="thumbnail" 
      className='rounded-lg bg-conatin relative'
      />
      <span className='bg-black px-1 text-sm font-semibold text-white rounded-lg absolute bottom-0 right-0'>
        {duration.replace('H',':').replace('M',':').replace('S','').slice(2,)
        }
        </span></div>
      <h2 className=' text-base font-medium'>{descTitle}</h2>
      
      {/* <a href={'https://www.youtube.com/channel/' +channelLink }>
      <h2 >{channelTitle}</h2>
      </a> */}
      
      
      <p>
        <span>
        {
      (views>100000) ? Math.floor(views/100000)+"M views"  : (views>1000) ? Math.floor(views/1000)+"K views" : views+" views"
        }</span>
        <span>🔸</span>
        <span>{
        likes>1000 ? Math.floor(likes/1000)+"K likes" : likes+" likes"}</span>
        </p>
      
      <h2>{publish.slice(0,10)}</h2>

    </div>
  )
}

export default VideoCard
