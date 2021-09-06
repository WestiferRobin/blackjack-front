
// NOTE: May want to have the endpoints to be static methods, although keep this structure for the future.
export class RestWarpper
{
    static link = "http://localhost:3000/"
    
    static get_user_info()
    {
        return {
            name: "Wesley Webb",
            rank: "lame"
            
        }
    }


    // TO READ
    static get(endpoint)
    {
        console.log("Get")
    }

    // TO PLACE
    static put(endpoint, data)
    {
        console.log("Put")
    }

    // TO UPDATE
    static post(endpoint, data)
    {
        console.log("Post")
    }

    // TO REMOVE
    static delete(endpoint, data)
    {
        console.log("Delete")
    }
}

// Consider on having some model classes for the application...... consider it later.