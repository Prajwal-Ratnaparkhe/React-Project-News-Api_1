import React from 'react'



 const Search = (props) => {
  

    /*

    const {onSearch}=props;

    
    

    const [searchText, setSearchText] = useState(' ');

    const handelInput = (event) => {

        const text = event.target.value;
        setSearchText (text)
    }

    const handelEnterKeyPressed = (event) => {
        if(event.key === "Enter") {
            onSearch(searchText);
        }
    };
*/


   


    return (
        <div>

            <>


               
                    <input className="control mr-sm-2"  type="search"  /* onChange={(e) => searchItems(e.target.value)} /* onKeyPress={handelEnterKeyPressed} value={searchText} */  placeholder="Search" aria-label="Search" />
                    
               




            </>

        </div>
    );
}

export default Search;
