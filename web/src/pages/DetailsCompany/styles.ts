import styled from 'styled-components';

export const BackLink = styled.div`
  width: 100px;
  margin: 0 auto 24px;
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
`

export const Container = styled.div`
 width: 500px;
 min-height: 200px;
 margin: 0 auto;
 padding: 24px;
 background-color: #CCCCCD;
 border-radius: 16px;

 display: flex;
 flex-direction: column;
 align-items: center;

 h2 {
  margin-bottom: 24px;
  text-transform: uppercase;
 }

 h3 {
  margin-bottom: 4px;
  font-size: 24px

 }

 span {
  margin-bottom: 16px;
 }
`;