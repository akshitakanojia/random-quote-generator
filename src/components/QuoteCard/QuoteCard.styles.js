import styled from 'styled-components'

export const QuoteWrapper = styled.div`
  border-left: 8px solid #F7DF94;
  margin: 8rem auto 0;
  padding: 0 100px;
  width: 100%;
  max-width: 800px;

  .quote  {
    font-size : 36px;
    font-weight: 500;
  }

  @media (max-width:768px) {
    padding: 0 50px;
    margin: 4rem auto 0;
    .quote  {
      font-size : 24px;
    }
  }

  @media (max-width:375px) {
    border-width: 4px;
    padding: 0 30px;
    margin: 1rem auto 0;
    .quote  {
      font-size : 16px;
    }
  }
`