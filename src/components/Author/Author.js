import React from 'react'
import { StyledAuthor } from './Author.styles'

const Author = ({ name, genre, onAuthorQuoteRequest }) => {
  return (
    <StyledAuthor onClick={()=>onAuthorQuoteRequest()}>
      <div className="author-details">
        <p className="author-name">{name}</p>
        <p className="author-genre">{genre}</p>
      </div>
      <div className="icon">
        <span className="material-icons">
          trending_flat
        </span>
      </div>
    </StyledAuthor>
  )
}

export default Author
