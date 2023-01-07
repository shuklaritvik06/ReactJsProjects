import React from 'react';
import { Link } from 'react-router-dom';  

const links = [
    {url: "/search",text: "🔎 All"},
    {url: "/news",text: "📰 News"},
    {url: "/video",text: "📺 Videos"},
    {url: "/image",text: "📸 Images"}
]

export const Links = () => {
  return (
    <div className='flex sm:justify-around justify-between items-center bg-slate-100 p-3'>
        {links.map(({url,text})=>{
            return <Link key={url} to={url} className="text-blue-800 hover:underline cursor-pointer">{text}</Link>
        })}
    </div>
  )
}
