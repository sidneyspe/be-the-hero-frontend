import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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

import { signInRequest } from '~/store/modules/auth/actions';

export default function Logon() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogon(e) {
    e.preventDefault();
    const logon = {
      email,
      password,
    };
    dispatch(signInRequest(logon));
  }

  return (
    <Container>
      <Section>
        <Logo src={logoImg} alt="Be The Hero" />
        <Form onSubmit={handleLogon}>
          <Title>Faça seu Logon</Title>
          <Input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
