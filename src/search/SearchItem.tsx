import { PostMeta, PostTitle } from "../shared/article/Article.css";

import { Link } from "react-router-dom";
import { Post } from "../../../../../__generated__/gqlTypes";
import React from "react";
import { StyledReadMore } from "../posts/Item.css";
import styled from "styled-components";

const StyledArticle = styled.article`
  background: rgba(var(--bg-article-item));
  border: 1px solid rgba(var(--bg-sidebar), 0.05);
  border-radius: 2px;
  padding: 1px 24px 24px;
  margin-bottom: 24px;

  .post-summary {
    margin-bottom: 16px;
  }
  a {
    color: rgba(var(--color-accent));
    &.post-link {
      color: var(--color-base);
      &:hover {
        color: rgba(var(--color-accent));
      }
    }
  }
`;

const SearchItem: React.FC<{ post: Post; href: string }> = ({ post, href }) => {
  return (
    <StyledArticle className="post-entry">
      <div className="post-details">
        <header className="post-header">
          <PostTitle medium className="post-title">
            <Link className="post-link" to={href}>
              {post.title}
            </Link>
          </PostTitle>
          <PostMeta className="post-meta">{post.publishedAt}</PostMeta>
        </header>
        <p className="post-summary">{post.excerpt}</p>
        <footer className="post-footer">
          <StyledReadMore className="read-more" to={href}>
            Read More
          </StyledReadMore>
        </footer>
      </div>
    </StyledArticle>
  );
};

export default SearchItem;
