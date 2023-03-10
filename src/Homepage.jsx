import { useEffect, useState } from "react";
import './Homepage.scss'
import { Link } from "react-router-dom";


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
        <h2>Results</h2>
       

        { artists.length >0 ? 
       artists.map((artist, index) => 
    
        <ul 
            key= { index }
            > 
            <div className="Artist__name">
              <Link to={`/artist/${artist.id}` }
              ><p>Name: {artist.name}</p></Link>

            </div>
            
            <div className="Artist__aliases">
                { artist.aliases
                ?
                <p>Aliases:
                {artist.aliases.map((alias)=> {
                    return  alias.name})}
                </p>
                :    
                "No Aliases Found!"
                }  
            </div>          

            <div className="Artist__country">  
                <p>Country: {artist.country}</p> 
                </div>  
            <div className="Artist__lifespan">
                <p>Life span: {artist['life-span'].begin}</p>               
                
            </div>  

            </ul> 
           
        
        ) : 
        ""      
        }

    </div>



);

}