import React from 'react'
import { QuoteWrapper } from './QuoteCard.styles'

const QuoteCard = ({quote}) => {
  return (
    <QuoteWrapper>
      <div className="quote">“{quote}”</div>
    </QuoteWrapper>
  )
}

export default QuoteCard
