import React from 'react';
import { useDispatch } from 'react-redux';
import { FiTrash2 } from 'react-icons/fi';

import { Content, Label, Paragraphy, DeleteButton } from './styles';

import { incidentDeleteRequest } from '~/store/modules/incident/actions';

export default function Card({ item }) {
  const dispatch = useDispatch();

  function handleDeleteIncident(id) {
    dispatch(incidentDeleteRequest(id));
  }

  return (
    <Content key={item.id}>
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

      <DeleteButton type="button" onClick={() => handleDeleteIncident(item.id)}>
        <FiTrash2 size={20} color="#a8a8b3" />
      </DeleteButton>
    </Content>
  );
}
