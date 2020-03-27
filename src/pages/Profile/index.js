import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

import {
  profileListRequest,
  profileDeleteRequest,
} from '~/store/modules/profile/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth.user);

  const data = useSelector((state) => state.profile.data);
  const pages = useSelector((state) => state.profile.pages);
  const loading = useSelector((state) => state.profile.loading);

  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(profileListRequest());
  }, []);

  function handleDeleteIncident(id) {
    dispatch(profileDeleteRequest(id));
  }

  return (
    <Container>
      <Header>
        <Logo src={logoImg} alt="Be The Hero" />
        <Welcome>Bem vindo(a), {name}</Welcome>
        <GoToButton to="/incidents/new/">Cadastrar novo caso</GoToButton>
        <ButtonHeader>
          <FiPower size={18} color="#e02041" />
        </ButtonHeader>
      </Header>
      <Title>Casos cadastrados</Title>
      <List>
        {data.map((item) => (
          <Card key={item.id}>
            <Label>CASO:</Label>
            <Paragraphy>{item.title}</Paragraphy>

            <Label>DESCRIÇÃO:</Label>
            <Paragraphy>{item.description}</Paragraphy>

            <Label>VALOR:</Label>
            <Paragraphy>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(item.value)}
            </Paragraphy>

            <DeleteButton
              type="button"
              onClick={() => handleDeleteIncident(item.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </DeleteButton>
          </Card>
        ))}
      </List>
    </Container>
  );
}
