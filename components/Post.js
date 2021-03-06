import Image from 'next/image';
import React from 'react';
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'

function Post({name, message, email, timestamp, image, imageUrl}) {
  return (
    <div className="flex flex-col">
       <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
            <div className='flex items-center space-x-2'>
                <img className="rounded-full" src={image} height="40" width="40"alt=''/>    
              
                <div>
                    <p className="font-medium">{name}</p>
                    <p className='text-xs text-gray-400'>{new Date(timestamp?.toDate()).toLocaleString()}</p>
                </div>
            </div> 

            <p className="pt-4">{message}</p>
            {imageUrl && (
                <div className='relative height-56 md:h-96 bg-white'>
                    <Image src={imageUrl} objectFit='cover' layout='fill'/>
                </div>
            )}
        </div> 
        {/* Footer of post */}
        <div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'  >
            <div className='input-icon rounded-none rounded-bl-2xl'>
                <ThumbUpIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Like</p>
            </div>

            <div className='input-icon rounded-none'>
                <ChatAltIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Comment</p>
            </div>

            <div className='input-icon rounded-none rounded-br-2xl'>
                <ShareIcon className='h-4'/>
                <p className='text-xs sm:text-base'>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post