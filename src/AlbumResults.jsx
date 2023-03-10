
export default function AlbumResults(props){
    return(
        <div>
            {console.log(props.artist)}
            {
             props.artist.map((artists,index)=>{
                return(
                <div key={index}>
    <h3>Album: {artists.title}</h3>
                <p>Released in: {artists.country}</p>
                <p>Release Date: {artists.date}</p> 
                </div>)
             })
                
            }
          
        </div>
    )
}