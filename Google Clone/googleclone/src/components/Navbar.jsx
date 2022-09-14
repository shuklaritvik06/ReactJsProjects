import React,{useState,useEffect} from 'react';
import logo from"../assets/logo.png";
import { Search } from './Search';
import { useDebounce } from 'use-debounce';
import { useResults } from '../contexts/ContextProvider';

export default function Navbar() {
  const [text,setText] = useState(''); 
  const {setSearch} = useResults();
  const [debouncedValue] = useDebounce(text, 500);
  useEffect(()=>{
    if(debouncedValue){
        setSearch(debouncedValue);
    }
  },[debouncedValue]);
  return (
   <div> 
    <div className='p-4 flex justify-between items-center border-b shadow-sm sticky top-0 bg-gray-100 z-30'>
        <div>
            <a href="/search"><img src={logo} alt="logo" className="h-8" /></a>
        </div>
        <div>
            <input type="text" className="border border-gray-300 rounded-lg py-2 px-4 outline-none flex-1" placeholder="Search" onChange={(e)=>setText(e.target.value)} />
        </div>
    </div>
    <Search />
    </div>  
  )
}
