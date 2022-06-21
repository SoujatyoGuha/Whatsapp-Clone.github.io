import Head from 'next/head';
import Images from 'next/image';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import Link from 'next/dist/client/link';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Hyperchat</title>
        <meta name="description" content="A chat app made by Soujatyo Coder" />
        <link rel="image" href="/favicon.ico" />
      </Head>
       <div>
         
       </div>
    </Container>
  );
}

const Container = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 background-color:#f8fafc;
 width:100%;
 height:100%;
`