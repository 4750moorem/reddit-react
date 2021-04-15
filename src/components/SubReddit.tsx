import { useParams } from "react-router-dom"
import React, {useContext, useEffect, useState} from "react";
import {Post} from "../data/Post";
import {getSubRedditPosts} from "../effects/manageReddit";
import PostRow from "./PostRow";
import {AppContext, AppContextProps} from "./App";


type routerParams = {
    r : string
}

export const SubReddit = () => {
    const { r } = useParams<routerParams>();
    const [post, setPosts] = useState<Post[]>([])
    const [error, setErrors] = useState<string>("")
    const appContext : AppContextProps = useContext(AppContext)

    useEffect(() => {
        if (r) {
            appContext.setPageTitle(`/r/${r}`)
            getSubRedditPosts(r)
                .then((res) => {
                    setErrors("")
                    setPosts([...res])

                }).catch((ex) => {
                setErrors(`Could not find any posts for sub reddit ${r}`)
            })
        }
    },[r])

    return (
        <>
            {
                !error &&
                <div className="list">
                    { post.map((p, index) =>  <PostRow key={index} post={p}/> )}
                </div>
            }
            {
                error && <h2 className="center-container">{error}</h2>
            }
        </>
    )
}

export default SubReddit;
