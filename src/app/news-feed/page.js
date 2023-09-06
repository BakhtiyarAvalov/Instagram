import Header from "@/components/header/header"
import like from "../../../public/images/svg/like.svg"
import comment from "../../../public/images/svg/comment.svg"
import emoji from "../../../public/images/svg/emoji.svg"
import checkbox from "../../../public/images/svg/checkbox.svg"
import arrow from "../../../public/images/svg/arrow.svg"
import ava from "../../../public/images/svg/Ava.svg"
import post from "../../../public/images/post2.png"



import Image from "next/image"

export default function NewsFid() {
  return (
    <main className="">
        <Header/>
        <div className=" container newsFeed">
            <div className="news_Feed_left_item">
                <div className="newsFeed_story">
                    <p >
                        <Image src={ava}/>
                        Name
                    </p>
                    <span id="arrow"><Image src={arrow}/></span>
                </div>
                <div className="newsFeed_post">
                    <p className="">
                        <Image src={ava}/>
                        Name
                    </p>
                    <p>...</p>
                </div>
                <Image src={post} id="img_post"/>
                <div className="flex newsFeed_post_icon">
                    <p>
                        <Image src={like}/>
                        <Image src={comment}/>
                    </p>
                    <p>
                        <Image src={checkbox}/>
                    </p>
                </div>
                <p>10K Likes</p>
                <p> <lable>Name</lable> Imperdiet in sit rhoncus, eleifend tellus augue lectus potenti pellentesque</p>
                <p>View all 100 comments</p>
                <p>1 hour ago</p>
                <fieldset className={"fieldset"}>
                    <Image src={emoji}/>
                    <textarea className="textarea" placeholder= "Add a comment"></textarea>
                    <button className="button_none_bordered">Post</button>
                </fieldset>
            </div>

            <div className="news_Feed_right_item">
                <div>
                    <div className=" news_Feed_right_item_header">
                        <label>Suggestions For You</label>
                        <button className="button_none_bordered">See All</button>
                    </div>
                    <div className="news_Feed_Recommendations">
                        <Image src={ava}/>
                        <div>
                            <p>Name</p>
                            <p>Followed by terylucas + 2 more</p>
                        </div>
                        <button className="button_none_bordered">Follow</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}