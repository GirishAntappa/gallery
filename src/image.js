import {format} from "date-fns"
import './Image.css';
export default function Image(props){
    return (
            <article>
                <div className="container">
                <div className="slide-container">
                    <div className="card-wrapper">
                        <div className="card">
                            <div className="image-box">
                            <img src={props.urls.full} alt={props.user.name} className="card_image" width={400}/>
                            </div>
                            <div className="profile-details">
                            <img src={props.user.profile_image.large} alt={props.user.name} loading="lazy"/>
                                <div className="name-job">
                                    <h3 className="name">{props.user.name}</h3>
                                    <h4 className="date">{format(new Date(props.created_at), "dd MMMM yyyy")}</h4>
                                </div>
                            <div className="user-likes">
                                <h3 className="user"><a href={`https://instagram.com/${props.user.instagram_username}`}>{props.user.instagram_username}</a></h3>
                                <h4 className="likes">{props.likes} Likes</h4>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </article>
    )
}