import { useEffect, useState } from "react"
<<<<<<< HEAD
import { useParams } from "react-router-dom";
=======
import AlbumResults from "./AlbumResults"
>>>>>>> b2c2b10c4ea904dd7b2f0072fe5129f1c9c60bac

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
<<<<<<< HEAD
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
=======
    return(
   <AlbumResults artist={artist}/>)
}
>>>>>>> b2c2b10c4ea904dd7b2f0072fe5129f1c9c60bac
