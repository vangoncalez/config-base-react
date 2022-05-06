import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <h1>Projeto e Configurações Básicas</h1>
      <p>ReactJS + Next.js + Typescript + Styled Components</p>
    </Container>
  )
}

export default Home
