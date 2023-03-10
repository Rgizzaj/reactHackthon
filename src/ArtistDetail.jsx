import { useEffect, useState } from "react"
import AlbumResults from "./AlbumResults"
import routes from "./routes"

export default function ArtistDetail(){
    const [artist,setArtist]=useState()
    const fetchApi=async()=>{
        const response = await fetch("https://musicbrainz.org/ws/2/artist/944e1036-8a03-4611-8aa0-31515a05c848?fmt=json&inc=releases")
        const data = await response.json()
        setArtist(data.releases)
    }
    useEffect(()=>{
        fetchApi()
    },[])

    return(
   artist ? 
   <AlbumResults artist={artist}/>
   :
   "...Loading"
   )
}