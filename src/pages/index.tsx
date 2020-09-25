import Head from 'next/head'
import { GetStaticProps } from 'next';
import applogo from "../assets/logo.png";
import { Container, Content } from '../styles/pages/Home';
import Repo, { RepoProps } from "../components/Repo";

interface HomeProps {
  repos: RepoProps[]
}

const Home: React.FC<HomeProps>  = ({ repos }) => {
  return (
    <Container>
      <Head>
        <title>Home</title>
      </Head>

      <img src={applogo} />
      <Content>
        {repos.sort((a, b) => a.stargazers_count > b.stargazers_count? -1 : 1).map(obj => (
          <Repo {...obj} />
        ))}
      </Content>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://api.github.com/orgs/app-masters/repos');
  const repos = await res.json();

  return {
    props:{
      repos
    }
  }
}

export default Home;
