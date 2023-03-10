import { useEffect, useState } from "react"

export default function ArtistDetail(){
    const [artist,setArtist]=useState([])
    const fetchApi=async()=>{
        const response = await fetch("https://musicbrainz.org/ws/2/release?artist=944e1036-8a03-4611-8aa0-31515a05c848&fmt=json")
        const data = await response.json()
        setArtist(data.releases)
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