import eye from '../../../../public/images/svg/eye.svg'
import massage from '../../../../public/images/svg/message.svg'
import heart from '../../../../public/images/svg/heart.svg'

import Image from "next/image"


export default function Post({item}){
    return <div className='post'>
        {item.image}
        <div className='post-stat'> 
            <a> {item.show} <Image src={eye}/></a>
            <a> {item.comments} <Image src={massage}/></a>
            <a> {item.like} <Image src={heart}/></a>
        </div>
    </div>
}