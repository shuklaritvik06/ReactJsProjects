import React, { useEffect } from "react";
import { Loading } from "./Loading";
import { useLocation } from "react-router-dom";
import ReactPlayer from 'react-player';
import { useResults } from "../contexts/ContextProvider";

export default function Results() {
  const { results, loading, getResults, search } = useResults();
  const location = useLocation();
  
  useEffect(() => {
    getResults(`${location.pathname}/q=${search}`);
  }, [location.pathname,search]);

  if (loading) return <Loading />;
  switch (location.pathname) {
    case "/news":
      return (
        <div className="w-3/4 space-y-6 mx-8 my-5">
          {results?.entries?.map(({ link, title }) => {
            return (
              <div key={Math.random() * 100} className="shadow rounded-sm p-3">
                <p>{link}</p>
                <p className="text-blue-800 hover:underline cursor-pointer">{title}</p>
              </div>
            );
          })}
        </div>
      );
    case "/image":
      return (
        <div className="flex flex-wrap justify-center items-center space-y-6 mx-8 my-5">
          {results?.image_results?.map(
            ({ image, link: { href, title } }) => {
              return (
                <div key={Math.random() * 100}>
                  <a href={href}>
                    <img src={image?.src} alt="" loading="lazy" />
                  </a>
                  <p className="w-36 break-words text-small mt-2">{title}</p>
                </div>
              );
            }
          )}
        </div>
      );
    case "/video":
      console.log(results);
      return (
        <div className="flex flex-wrap">
          {results?.results?.map((video, index) => (
            <div key={index} className="p-2">
            { video.additional_links[0].href.includes("youtube") &&  <ReactPlayer url={video.additional_links?.[0].href} controls width="355px" height="200px" /> }
            </div>
          ))}
         </div>
      );
    case "/search":
      return (
        <div className="w-3/4 space-y-6 mx-8 my-5">
          {results?.results?.map(({ link, title }) => {
            return (
              <div key={Math.random() * 100} className="shadow rounded-sm p-3">
                <p>{link}</p>
                <a href={link}>
                  <p className="text-blue-800 hover:underline cursor-pointer">
                    {title}
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      );
    default:
      return <></>;
  }
}
