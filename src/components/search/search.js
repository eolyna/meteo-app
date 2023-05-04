import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}) => {
    const [Search, setSearch] = useState(null);
    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return(
    <AsyncPaginate
     placeholder ="Search for city"
     debounceTimeout={600}
     value ={Search}
     onChange={handleOnChange}
    />
    )
}

export default Search;