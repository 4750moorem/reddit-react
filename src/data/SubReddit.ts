export type SubReddit = {
    displayName : string
    title : string
    url   : string
    description : string
}
export const apiToSubReddit = (apiResponse : any) => {
    return {
        displayName : apiResponse.display_name,
        title : apiResponse.title,
        url :  apiResponse.url,
        description  : apiResponse.public_description
    }
}

