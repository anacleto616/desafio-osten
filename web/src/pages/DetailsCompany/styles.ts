import styled from 'styled-components';

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