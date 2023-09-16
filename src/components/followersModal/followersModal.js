import Link from "next/link"
import ava from "../../../public/images/svg/Ava.svg"
import Image from "next/image"

export default function FollowersModal({followersmodalActive, setFollowersModalActive}) {
    return (
        <div className= "modal active" onClick={() => setFollowersModalActive(false)}>
            <p id="close">X</p>
            <div className="Followers_modal_content followersModal_item active" onClick={e => e.stopPropagation()}>
                <div className="flex flex-ai-c flex-cl Followers_modal_title">
                    <p>Followers</p>
                </div>
                <div  className="flex flex-jc-sb ">
                    <div className="flex flex-ai-c Create_post followers_modal">
                        <Image src={ava}/>
                        <div>
                            <div className="flex">
                                <label>T_Azamatov .</label>
                                <a className="button-no-border">Follow</a>
                            </div>
                            <p>Тимур Азаматов</p>
                        </div>
                        <input type="file" id="upload-file" hidden="hidden"/>
                    </div>
                    <button className="Remove">Remove</button>
                 </div>
            </div>
        </div>    
    )
}