import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";
import { Oval } from "react-loader-spinner";

const Search = () => {
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);

  let params = useParams();

  const getSearch = async (name) => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `http://localhost:3000/blog?title_like=${name}&_page=1&_limit=3`
      );
      const data = await res.data;
      setSearchedPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  const loadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const addLoadMore = async (name) => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `http://localhost:3000/blog?_page=${currentPage}&_limit=3&title_like=${name}`
      );
      const data = await res.data;
      if (data.length === 0) {
        setIsEnd(true);
      }
      setSearchedPosts((prev) => [...prev, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    console.log(currentPage);
    addLoadMore(params.search);
  }, [currentPage]);

  useEffect(() => {
    getSearch(params.search);
  }, [params.search]);

  return (
    <>
      <div className={"flex justify-center flex-wrap"}>
        <SearchBar />
        {isLoading && (
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        )}
        {isError && (
          <p className="text-base text-red-700">Data couldn't be downloaded</p>
        )}
        {!isError && searchedPosts.length === 0 ? (
          <p>No results found</p>
        ) : (
          searchedPosts?.map((post) => (
            <Post
              id={post.id}
              author={post.author}
              title={post.title}
              content={post.content}
            />
          ))
        )}
      </div>
      {!isError && !isLoading && !isEnd && (
        <div className="my-10 flex justify-center">
          <button className="rounded-md bg-red-200 p-4" onClick={loadMore}>
            Load more
          </button>
        </div>
      )}
    </>
  );
};

export default Search;
