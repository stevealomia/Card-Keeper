import styled from "styled-components";

function Error({ children }) {
  console.log(children);
  return (
    <Wrapper>
      <Alert>!</Alert>
      <Message>{children}</Message>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: white;
  background-color: red;
  width: fit-content;
  border-radius: 6px;
  display: flex;
  padding: 10px;
  margin: 10px;
  flex-flow: row;
  align-items: center;
  justify-content: space-around;
`;

const Alert = styled.span`
  background-color: white;
  color: red;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  font-weight: bold;
  display: grid;
  place-content: center;
`;

const Message = styled.p`
  margin: 0;
  padding: 10px;
  font-size: 20px;
`;

export default Error;
