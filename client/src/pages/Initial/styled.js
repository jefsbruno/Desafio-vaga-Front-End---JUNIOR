import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 30px;
  border: 2px solid #ced4da;
  border-radius: 4px;
  width: 85%;
  height: 600px;
  background-color: #fff;

  @media screen and (min-width: 375px) {
    width: 318px;
    
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 650px;
    height: 400px;
  }
`;
export const Forms = styled.div`
  position: relative;
  height: 65%;
  h2 {
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    color: #495057;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    margin-top: 20px;

    div + div {
      margin-top: 20px;
    }
  }

  button {
    width: 100px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 65%;
  }
`;

export const Results = styled.div`
  position: relative;
  height: 45%;
  background-color: #edf2fb;

  @media screen and (min-width: 768px) {
    width: 40%;
    height: 90%;
    padding-top:40px;
  }
`;

export const Title = styled.div`
  position: relative;
  width: 60%;
  border-bottom: 1px solid #023e8a;
  margin-left: 30px;

  h5 {
    padding-top: 30px;
    color: #00296b;
    font-weight: bold;
  }
`;
