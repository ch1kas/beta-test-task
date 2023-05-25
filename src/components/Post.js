import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #bf4f74;
`;

const Author = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  color: #000000;
`;

const Content = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  color: #000000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const PublicationDate = styled.p`
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  color: #000000;
`;

const Button = styled.div`
  border: solid 0.5px rgba(255, 255, 255, 0.5);
  background-color: #9db2bf;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  width: 100%;
  cursor: pointer;
`;

const BlogPost = styled.div`
  height: 15rem;
  width: 25rem;
  margin: 1rem;
  padding: 2rem;
  border-radius: 2rem;
  background-color: #f8f6f4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Post = ({ author, title, publicationDate, content, id }) => {
  const navigate = useNavigate();

  return (
    <BlogPost>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Author>By {author}</Author>
      <PublicationDate>{publicationDate}</PublicationDate>
      <Button onClick={() => navigate(`/${id}`)}>See the post</Button>
    </BlogPost>
  );
};

export default Post;
