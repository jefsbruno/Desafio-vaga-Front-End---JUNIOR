import styled from "styled-components";

export const Container = styled.div`
  div {
    color: #495057;
    font-size: 13px;
    margin-bottom: 5px;

    span{
      color:#ba181b;
    }
  }

  input {
    width: 80%;
    height: 25px;
    border-radius: 2px;
    border: 1px solid #dee2e6;
    padding-left: 10px;

    :hover {
      border-color: #0077b6;
    }
  }
`;

export const Parcelas = styled.div`
  p{
    margin-top:5px;
    font-size: 10px;
    color:#adb5bd;
  }
`;
