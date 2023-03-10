import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function ArtistDetail(){

    const {id} = useParams()


    const [artist,setArtist]=useState([])
    const fetchApi=async()=>{
        const response = await fetch(`https://musicbrainz.org/ws/2/artist/${id}?fmt=json&inc=releases`)
        const data = await response.json()
        setArtist(data)
    }
    useEffect(()=>{
        fetchApi()
    },[artist])
    // return(
    //     <div>
    //         {console.log(artist)}
    //         {
                
    //             artist.map((person,index)=>
    //             {
    //                 return(
    //                     <div key={index}>
    //                     <h3>{person.title}</h3>
    //                     </div>
    //                 )
    //             })
    //         }
    //     </div>
    // )
}

<Link to="/"> return to Homepage </Link>