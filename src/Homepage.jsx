import { useEffect, useState } from "react";
import './Homepage.scss'


export default function Homepage (){

        const [searchQuery, setSearchQuery] = useState("");
        const [artists, setArtists] = useState([]);
        const [inputValue, setInputValue] = useState("");

       

        const [page, setPage] = useState(1);

    async function fetchData() {
        
      
        // let offset = page*20;
        // let offset_example_next = limit + offset_example
        // let offset_example_previous =  offset_example - limit

        const response = await fetch(`http://musicbrainz.org/ws/2/artist?query=${searchQuery}&fmt=json`);    

        const data = await response.json();
        console.log(data);

        setArtists(data.artists);                 
      
        
    }

    
     //onChange activation
     const handleChange = (e) => {
            setInputValue(e.target.value)  
        }


    useEffect(()=>{
        if(searchQuery !== ""){              
            fetchData()
         }
    }, [searchQuery]);



return(
    <div className="Artist">
        <h1>Artist around the world</h1>
        

        <div className="SearchResults">
                <input type="text" placeholder="type a word" className="search" 
                onChange={handleChange}     
                />

            </div>
        
        <button onClick={() => {setSearchQuery(inputValue)}}>SearchBar</button>

        

        { artists.length >0 ? 
       artists.map((artist, index) => 
    
        <ul 
            key= { index }
            > 
            <div className="Artist__name">
                <p>{artist.name}</p>  

            </div>

                { artist.aliases
                ?
                <p>
                {artist.aliases.map((alias)=> {
                    return  alias.name})}
                </p>
                :    
                "no aliases"
                })            
                
                <p>{artist.country}</p> 
             
                <p>{artist['life-span'].begin}</p>               
                           
            </ul> 
           
        
        ) : 
        ""

      
        }

    </div>



);

}