import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`

export const Main = styled.div`
  width: 1000px;
  max-width: 90%;
`

export const Form = styled.form`
  margin-top: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  border: 1px solid #585b5f;
  border-radius: 10px;
  padding: 15px;
  font-size: 1.5rem;
  color: white;
  background-color: #585b5f;
`;

export const Button = styled.button`
  padding: 15px;
  border: 1px solid #585b5f;
  background-color: #585b5f;
  cursor: pointer;
  width: 100%;
  color: white;
  font-size: 1.2rem;
  border-radius: 10px;

  &:disabled {
    cursor: not-allowed;
    background-color: #bbbbbb;
    color: #585b5f;
  }
`;

// Result
export const ResultsDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
`;

export const Image = styled.img`
  align-self: center;
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Username = styled.h1`
  font-size: 2rem;
  color: #23292d;
  text-align: center;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 15px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Box = styled.div`
  margin-top: 15px;
  padding: 10px;
  background-color: #f2f2f2;
  color: #23292d;
  font-size: 1.2rem;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
`;

export const Link = styled.a`
  color: #007bff;
  text-decoration: none;
`;

export const RepoBox = styled.div`
  margin-top: 15px;

  & p {
    margin-top: 5px: 
  }
`;
