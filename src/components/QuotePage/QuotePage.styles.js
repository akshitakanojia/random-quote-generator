import styled from 'styled-components'

export const StyledQuotePage = styled.div`
  max-width: 1200px;
  margin : 0 auto;
  padding: 2rem;

  .option{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
    cursor: pointer;
  }

  @media (max-width:375px) {
    padding: 1rem;
    
    .option{
      margin-bottom: 1rem;
      font-size: 0.8rem;
    }
  }
`

export const QuotesWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .author{
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-weight: 700;
    font-size: 36px;
    color: #333333;
  }

  .fallback-wrapper{
    display: flex;
    justify-content: center;
    height: 80vh;
    padding: 150px 0;
  }

  @keyframes spinner {
    to {transform: rotate(360deg);}
  }

  .spinner {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: spinner .6s linear infinite;
  }

  @media (max-width:768px) {
    .author{
      font-size: 24px;
    }
  }

  @media (max-width:375px) {
    .author{
      font-size: 16px;
    }
  }
`