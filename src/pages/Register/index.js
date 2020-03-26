import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import logoImg from '~/assets/logo.svg';

import {
  Container,
  Content,
  Section,
  Logo,
  Title,
  Description,
  GoTo,
  Form,
  Input,
  InputGroup,
  Button,
} from './styles';

export default function Register() {
  return (
    <Container>
      <Content>
        <Section>
          <Logo src={logoImg} alt="Be The Hero" />
          <Title>Cadastro</Title>
          <Description>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </Description>
          <GoTo to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Tenho cadastro
          </GoTo>
        </Section>
        <Form>
          <Input type="text" placeholder="Nome da ONG" />
          <Input type="email" placeholder="E-mail" />
          <Input type="text" placeholder="Whatsapp" />
          <InputGroup>
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" style={{ width: 80 }} />
          </InputGroup>

          <Button type="Submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
