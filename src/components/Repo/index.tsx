import React from 'react';
import { AiOutlineStar } from "react-icons/ai";
import { VscRepoForked } from "react-icons/vsc";
import { Container, Title, Description, Forks, Stars, Footer } from './styles';

export interface RepoProps {
  id: number,
  node_id: string,
  name: string,
  full_name: string,
  private: boolean,
  owner: any,
  html_url: string,
  description: string | null,
  stargazers_count: number,
  forks_count: number
}

const Repo: React.FC<RepoProps> = (props) => {
  const handleClick = (e: React.MouseEvent) => {
    window.open(props.html_url, '_blank');
  };

  return (
    <Container key={props.id} onClick={handleClick}>
      <Title>
        {props.name}
      </Title>
      <Description>
        {props.description}
      </Description>
      <Footer>
        <Stars>
          <AiOutlineStar />
          {props.stargazers_count}
        </Stars>
        <Forks>
          <VscRepoForked />
          {props.forks_count}
        </Forks>
      </Footer>
    </Container>
  );
}

export default Repo;