import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background-color: white;
  margin: 10px 0;
  min-height: 100px;
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: .3s background-color;
  :hover{
    background-color: #f1f1f1
  }
`;

export const Title = styled.p`
  font-weight: 700;
  color: black;
`;

export const Description = styled.p`
  font-weight: 300;
  font-size:13px;
  color: gray;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 18px;
  max-height: 36px;
  min-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Forks = styled.div`
  font-weight: 400;
  color: black;
`; 

export const Stars = styled.div`
  font-weight: 400;
  color: black;
  margin-right: 10px;
`; 

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 25%;
`;
