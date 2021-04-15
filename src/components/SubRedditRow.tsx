import './App.css';
import { Link } from "react-router-dom"
import {SubReddit} from "../data/SubReddit";


export type PostRowProps = {
    subReddit : SubReddit
}

export const SubRedditRow = ({subReddit} : PostRowProps ) => {
    return (
        <div className="row">
            <Link to={`/${subReddit.displayName}`}>
                <h3>{ subReddit.title }</h3>
            </Link>
        </div>
    )
}

export default SubRedditRow
