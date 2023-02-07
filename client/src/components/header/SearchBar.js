import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <div className='flex flex-row items-center w-2/4 bg-slate-300'>
        <input type='text' className='p-4 border-primary rounded-tl-lg rounded-bl-lg  h-12 w-full'/>
        <button type='submit' className='h-12 w-16 bg-primary border-primary rounded-tr-lg rounded-br-lg active:bg-blue-700'>
            <SearchIcon style={{color:"white",transform: "scale(1.5)"}}/>
        </button>
    </div>
  )
}

export default SearchBar