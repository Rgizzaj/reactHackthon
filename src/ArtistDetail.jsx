import { useEffect, useState } from "react"
import { useParams } from "react-router"
import AlbumResults from "./AlbumResults"

export default function ArtistDetail(){

    const {id} =useParams()
    const [artist,setArtist]=useState([])
    const fetchApi=async()=>{
        const response = await fetch(`https://musicbrainz.org/ws/2/release?artist=${id}&fmt=json`)
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
