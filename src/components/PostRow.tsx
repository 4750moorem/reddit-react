import { Post } from "../data/Post";
import './App.css';
import { Link } from "react-router-dom"


export type PostRowProps = {
    post : Post
}

export const PostRow = ({ post } : PostRowProps ) => {
    return (
        <div className="row">
            <Link to="">
                <h3>{ post.title }</h3>
            </Link>
        </div>
    )
}

export default PostRow
