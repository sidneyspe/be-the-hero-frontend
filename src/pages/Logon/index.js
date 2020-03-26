import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '~/assets/logo.svg';
import heroesImg from '~/assets/heroes.png';

import {
  Container,
  Section,
  Logo,
  Form,
  Title,
  Input,
  Button,
  Image,
  GoTo,
} from './styles';

export default function Logon() {
  return (
    <Container>
      <Section>
        <Logo src={logoImg} alt="Be The Hero" />
        <Form>
          <Title>Faça seu Logon</Title>
          <Input type="text" placeholder="E-mail" />
          <Input type="password" placeholder="Senha" />
          <Button type="submit">Entrar</Button>
          <GoTo to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </GoTo>
        </Form>
      </Section>

      <Image src={heroesImg} alt="Heroes" />
    </Container>
  );
}
