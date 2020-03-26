import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

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

import { ongCreateRequest } from '~/store/modules/ong/actions';

export default function Register() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  function handleRegister(e) {
    e.preventDefault();
    const ong = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };
    dispatch(ongCreateRequest(ong));
  }

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
        <Form onSubmit={handleRegister}>
          <Input
            type="text"
            placeholder="Nome da ONG"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
          <InputGroup>
            <Input
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              type="text"
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={(e) => setUf(e.target.value)}
            />
          </InputGroup>

          <Button type="Submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
