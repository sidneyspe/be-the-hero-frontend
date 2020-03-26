import React from 'react';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '~/assets/logo.svg';

import {
  Container,
  Header,
  Welcome,
  ButtonHeader,
  Logo,
  GoToButton,
  Title,
  List,
  Card,
  Label,
  Paragraphy,
  DeleteButton,
} from './styles';

export default function Logon() {
  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Be The Hero" />
        <Welcome>Bem vinda, APAD</Welcome>
        <GoToButton to="/incidents/new/">Cadastrar novo caso</GoToButton>
        <ButtonHeader>
          <FiPower size={18} color="#e02041" />
        </ButtonHeader>
      </Header>
      <Title>Casos cadastrados</Title>
      <List>
        <Card>
          <Label>CASO:</Label>
          <Paragraphy>Caso teste</Paragraphy>

          <Label>DESCRIÇÃO:</Label>
          <Paragraphy>Descrição teste</Paragraphy>

          <Label>VALOR:</Label>
          <Paragraphy>R$ 120,00</Paragraphy>

          <DeleteButton type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </DeleteButton>
        </Card>
        <Card>
          <Label>CASO:</Label>
          <Paragraphy>Caso teste</Paragraphy>

          <Label>DESCRIÇÃO:</Label>
          <Paragraphy>Descrição teste</Paragraphy>

          <Label>VALOR:</Label>
          <Paragraphy>R$ 120,00</Paragraphy>

          <DeleteButton type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </DeleteButton>
        </Card>
        <Card>
          <Label>CASO:</Label>
          <Paragraphy>Caso teste</Paragraphy>

          <Label>DESCRIÇÃO:</Label>
          <Paragraphy>Descrição teste</Paragraphy>

          <Label>VALOR:</Label>
          <Paragraphy>R$ 120,00</Paragraphy>

          <DeleteButton type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </DeleteButton>
        </Card>
        <Card>
          <Label>CASO:</Label>
          <Paragraphy>Caso teste</Paragraphy>

          <Label>DESCRIÇÃO:</Label>
          <Paragraphy>Descrição teste</Paragraphy>

          <Label>VALOR:</Label>
          <Paragraphy>R$ 120,00</Paragraphy>

          <DeleteButton type="button">
            <FiTrash2 size={20} color="#a8a8b3" />
          </DeleteButton>
        </Card>
      </List>
    </Container>
  );
}
