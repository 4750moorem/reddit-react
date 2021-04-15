export type Post = {
    title   : string
    name    : string
    author  : string
}
export const apiToPost = (apiResponse : any) : Post => ({
    title: apiResponse.title,
    name: apiResponse.name,
    author: apiResponse.author
})
