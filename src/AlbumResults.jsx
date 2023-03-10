export default function AlbumResults(props){
    return(
        <div>
             {               
                props.artist.map((person,index)=>
                {
                    return(
                        <div key={index}>
                        <h3>{person.title}</h3>
                        <p>{person.country}</p>
                        <p>{person.date}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}