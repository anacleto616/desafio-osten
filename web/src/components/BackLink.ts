import styled from 'styled-components';

export const BackLink = styled.div`
  width: 100px;
  margin: 0 auto 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    display: flex;
    align-items: center;

    img {
     transform: rotate(-90deg);
     margin-right: 12px;
    }

    color: #112e5c;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
  }
`;