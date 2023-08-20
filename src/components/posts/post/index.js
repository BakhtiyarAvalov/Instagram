import eye from '../../../../public/images/svg/eye.svg'
import massage from '../../../../public/images/svg/message.svg'
import sea from '../../../../public/images/sea.jpg'
import heart from '../../../../public/images/icon/heart.png'

import Image from "next/image"


export default function Post({item}){
    return <div className='post'>
        <Image id='post' src={sea}/>
        <div className='post-stat'> 
            <a> {item.show} <Image src={eye}/></a>
            <a> {item.comments} <Image src={massage}/></a>
            <a> {item.like} <Image src={heart}/></a>
        </div>
    </div>
}