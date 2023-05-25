import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import styled from "styled-components";

const Article = () => {
  let params = useParams();

  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getArticle = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`http://localhost:3000/blog/${params.id}`);
      const data = await res.data;
      setArticle(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <>
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
      {!isError && (
        <ArticleCard>
          <Title>{article.title}</Title>
          <Content>{article.content}</Content>
          <Author>By {article.author}</Author>
          <PubDate>{article.publicationDate}</PubDate>
        </ArticleCard>
      )}
    </>
  );
};

const Title = styled.h2`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: #27374d;
  margin: 40px 0;
`;

const Content = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  color: #000;
  margin: 40px;
`;

const Author = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: right;
  color: #000;
  margin: 40px;
`;

const PubDate = styled.p`
  font-size: 20px;
  font-weight: 400;
  text-align: right;
  color: #000;
  margin: 20px 40px;
`;

const ArticleCard = styled.div`
  height: fit-content;
  width: 90%;
  margin: auto;
  margin-top: 3rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #f8f6f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Article;
