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
  TextArea,
  InputGroup,
  Button,
} from './styles';

export default function NewIncident() {
  return (
    <Container>
      <Content>
        <Section>
          <Logo src={logoImg} alt="Be The Hero" />
          <Title>Cadastrar novo caso</Title>
          <Description>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Description>
          <GoTo to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </GoTo>
        </Section>
        <Form>
          <Input type="text" placeholder="Título do caso" />
          <TextArea type="text" placeholder="Descrição" />
          <Input type="text" placeholder="Valor em reais" />

          <Button type="Submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
