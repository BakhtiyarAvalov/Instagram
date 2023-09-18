
import heart from '../../../public/images/svg/heart.svg'
import post1 from '../../../public/images/post1.png'
import post3 from '../../../public/images/post3.png'


import Image from "next/image"


export default function Stories({ closeModal, posts}) {

    return (
        <div>
            <div className= "Modal_stories" onClick={() => closeModal(false)}>
                <p onClick={() => closeModal(false)} id="close">X</p>
            </div>
            
            <div  className="modal_stories_content">
                <Image id="modal_stories_content_avatar" src={post1} alt=""/>
                <Image id="modal_stories_content_stories" src={post3} alt=""/> 
                <div id="modal_stories_content_input">
                    <input  type="text" placeholder="Введите комментарий"/> 
                    <Image src={heart} alt=""/>  
                    {/* <div className='timer'>
                        <div className='timer_line'></div>    
                    </div>        */}
                </div> 
            </div>
            
        </div>  
    )
}