
export default function AlbumResults(props){
    return(
        <div>
            {console.log(props.artist)}
            {
             props.artist.map((artists,index)=>{
                return(
                <div key={index}>
<h3>{artists.title}</h3>
                <p>{artists.country}</p>
                <p>{artists.date}</p> 
                </div>)
             })
                
            }
          
        </div>
    )
}