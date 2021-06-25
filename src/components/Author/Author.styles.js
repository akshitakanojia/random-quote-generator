import styled from "styled-components";

export const StyledAuthor = styled.div`
  margin: 6.8rem auto 0;
  width: 100%;
  max-width: 40rem;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  align-items: center;
  
  .icon{
    color: #fff;
  }

  .author-details>.author-name{
    font-size: 24px;
    font-weight: 700;
    color: #4F4F4F;
  }

  .author-details>.author-genre{
    margin-top: 8px;
    font-size: 14px;
    font-weight: 500;
    color: #828282;
  }

  &:hover{
    background: #333333;
    .author-details>.author-name{
      color: #f2f2f2;
    }
  }

  @media (max-width:768px) {
    margin: 4rem auto 0;
  }

  @media (max-width:375px) {
    margin: 1rem auto 0;
    .author-details>.author-name{
    font-size: 16px;
    }
    .author-details>.author-genre{
      font-size: 8px;
    }
  }
`