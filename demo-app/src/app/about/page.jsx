import { resolve } from "styled-jsx/css"

async function WaitTime()
{
    await new Promise((resolve)=>
    {
          setTimeout(resolve,3000)
    })
}
export default async function About()
{
    await WaitTime()
    return(
        <div className="items-center justify-center">
            <h1 className="text-red-600 text-center">
                About Section 
            </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Repellat aliquam dolorem quos natus sapiente iure ipsam, amet 
                necessitatibus 
                ad, optio voluptatum eius. Corporis totam, officia molestias 
                laudantium unde iusto illum.
            </p>
        </div>
    )
}