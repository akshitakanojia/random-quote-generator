import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom";
import axios from 'axios';

import QuoteCard from '../QuoteCard/QuoteCard'
import Author from '../Author/Author';
import { QuotesWrapper, StyledQuotePage } from './QuotePage.styles'

const URL = "https://quote-garden.herokuapp.com/api/v3/quotes"

const QuotePage = () => {
  const [quoteData, setQuoteData] = useState(null);
  const [authorQuotes, setAuthorQuotes] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const getRandomQuote = () => {
    setIsFetching(true)
    setError(false)
    axios.get(`${URL}/random`)
      .then(response => {
        //batches multiple state changes into single which wont happen otherwise in async operations
        ReactDOM.unstable_batchedUpdates(() => {
          setAuthorQuotes(null)
          setQuoteData(response.data.data[0]);
          setIsFetching(false)
          setError(false)
        })
      })
      .catch(e => {
        ReactDOM.unstable_batchedUpdates(() => {
          setAuthorQuotes(null)
          setIsFetching(false)
          setError(true)
        })
      })
  }

  const getQuotesByAuthor = () => {
    setIsFetching(true)
    setError(false)
    axios.get(`${URL}?author=${quoteData.quoteAuthor}`)
      .then(response => {
        ReactDOM.unstable_batchedUpdates(() => {
          setIsFetching(false)
          setAuthorQuotes(response.data.data)
          setError(false)
        })
      })
      .catch(e => {
        ReactDOM.unstable_batchedUpdates(() => {
          setIsFetching(false)
          setError(true)
        })
      })
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <StyledQuotePage>
      <div className="option" onClick={getRandomQuote}>
        <p className="option-text">random &nbsp;</p>
        <span className="material-icons">
          sync
        </span>
      </div>
      <QuotesWrapper>
        {
          error ?
            <div className="fallback-wrapper">
              <div>error</div>
            </div>
            : isFetching ?
              <div className="fallback-wrapper">
                <div className="spinner"></div>
              </div>
              : <>
                {
                  !authorQuotes && quoteData &&
                  <>
                    <QuoteCard quote={quoteData.quoteText} />
                    <Author name={quoteData.quoteAuthor} genre={quoteData.quoteGenre} onAuthorQuoteRequest={getQuotesByAuthor} />
                  </>
                }
                {
                  authorQuotes &&
                  <>
                    <div className="author">{quoteData.quoteAuthor}</div>
                    {authorQuotes?.map(authorQuote =>
                      <QuoteCard key={authorQuote._id} quote={authorQuote.quoteText} />
                    )}
                  </>
                }
              </>
        }
      </QuotesWrapper>
    </StyledQuotePage>
  )
}

export default QuotePage
