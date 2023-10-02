import eye from '../../../../public/images/svg/eye.svg'
import massage from '../../../../public/images/svg/message.svg'
import heart from '../../../../public/images/svg/heart.svg'
import { END_POINT } from '@/config/end-point'

import Image from "next/image"


export default function Post({item, onClick}){
    // const id = item.id
    // console.log("Item", id);

    return <div className='post'>
        <div onClick={()=>onClick(item)} ><img className='postImage' alt='' src={`${END_POINT}${item.image}`}/></div>
        
        <div className='post-stat'> 
            <a> {item.show} <Image src={eye} alt=''/></a>
            <a> {item.Allcomments} <Image src={massage} alt=''/></a>
            <a> {item.like} <Image src={heart} alt=''/></a>
        </div>
    </div>
}