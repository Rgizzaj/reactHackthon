
export default function AlbumResults(props){
    return(
        <div>
             
            <h3>{props.artist.name}</h3>
            <p>{props.artist.country}</p>
            <p>{props.artist.date}</p>                     
                    
        </div>
    )
}