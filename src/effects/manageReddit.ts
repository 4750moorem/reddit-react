import {apiToPost, Post} from "../data/Post";
import {apiToSubReddit, SubReddit} from "../data/SubReddit";

export const getSubRedditPosts = async (subRedditName : string, limit ?: number, after ?: string) : Promise<Post[]> => {
    try {
        const afterParam = after ? `&after=${after}` : ""
        const res
            = await fetch(`https://www.reddit.com/r/${subRedditName}.json?limit=${limit ? limit : "30"}${afterParam}`)
        const body = await res.json()
        const postsFromBody = body.data.children.map((post: { data: any }) => post.data)
        return postsFromBody.map((p: any) => apiToPost(p))
    } catch (ex) {
        console.log("sub reddit not found", ex)
        throw ex
    }
}

export const getPopularSubReddits = async (limit ?: number, after ?: string) : Promise<SubReddit[]> => {
    try {
        // const afterParam = after ? `&after=${after}` : ""
        const res
        = await fetch(`https://www.reddit.com/subreddits.json?limit=${limit ? limit : "25"}`)
        const body = await res.json()
        const subRedditsFromBody = body.data.children.map((subReddit : { data : any }) => subReddit.data)
        return subRedditsFromBody.map((p: any) => apiToSubReddit(p))
    } catch (ex) {
        console.log("sub reddit not found", ex)
        return []
    }
}
