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


                <form className="form-inline">
                    <input className="control mr-sm-2" style={{ width: '70%', display: 'initial' }} type="search" /* onChange={handelInput} onKeyPress={handelEnterKeyPressed} value={searchText} */  placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>




            </>

        </div>
    );
}

export default Search;
