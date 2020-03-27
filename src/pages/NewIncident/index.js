import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  Button,
} from './styles';

import { incidentCreateRequest } from '~/store/modules/incident/actions';

export default function NewIncident() {
  const dispatch = useDispatch();
  const { ong_id } = useSelector((state) => state.auth.user);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  function handleNewIncident(e) {
    e.preventDefault();
    const incident = {
      title,
      description,
      value,
      ong_id,
    };
    dispatch(incidentCreateRequest(incident));
  }
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
        <Form onSubmit={handleNewIncident}>
          <Input
            type="text"
            placeholder="Título do caso"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Valor em reais"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />

          <Button type="Submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
