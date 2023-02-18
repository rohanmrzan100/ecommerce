import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <div className='flex flex-row items-center w-2/4 '>
        <input type='text' className='p-4 bg-gray-100 rounded-tl-sm rounded-bl-sm  h-12 w-full' placeholder="I'm looking for..."/>
        <button type='submit' className='h-12 w-16 bg-primary border-primary rounded-tr-sm rounded-br-sm'>
            <SearchIcon style={{color:"white",transform: "scale(1.5)"}}/>
        </button>
    </div>
  )
}

export default SearchBar