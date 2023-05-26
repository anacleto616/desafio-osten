import styled from "styled-components";

export const Container = styled.div`

display:flex;
flex-direction: column;
align-items: center;
margin: auto;

.newCompany {
  color: #112e5c;
  text-decoration: none;
  font-weight: bold;
  border: 2px solid #112e5c;
  padding: 8px 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  transition: all 0.2s ease-in;
  
    &:hover {
      background: #112e5c;
      color: #fff;
    }
}

table {
  width: 70%;
  text-align: center;

  thead {
    background:  #112e5c;
    font-weight: bold; color:#fff;
  }

  tbody {
    tr:nth-child(2n) {
      background: #ccc;
    }
  }
  th ,td {
    padding: 8px 8px;
  }

  button {
    background: transparent;
    border-style: none;
  }
}

@media screen and (max-width: 480px){
    width: 94%;

    thead {
      display:none;
    }

    tbody {
      td {
        display: flex; 
        flex-direction: column; 
      }
    }
}

@media only screen and (min-width: 1200px){
    width: 100%;
    table tbody tr td:nth-child(1){width:10%;}
    table tbody tr td:nth-child(2){width:30%;}
    table tbody tr td:nth-child(3){width:20%;}
    table tbody tr td:nth-child(4){width:10%;}
    table tbody tr td:nth-child(5){width:30%;}
}
`;