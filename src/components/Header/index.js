import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiPower } from 'react-icons/fi';

import logoImg from '~/assets/logo.svg';

import { Content, Welcome, ButtonHeader, Logo, GoToButton } from './styles';

import { profileListRequest } from '~/store/modules/profile/actions';

export default function Header() {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => state.auth.user);

  function handleLogout() {}

  return (
    <Content>
      <Logo src={logoImg} alt="Be The Hero" />
      <Welcome>Bem vindo(a), {name}</Welcome>
      <GoToButton to="/incidents/new/">Cadastrar novo caso</GoToButton>
      <ButtonHeader onClick={handleLogout}>
        <FiPower size={18} color="#e02041" />
      </ButtonHeader>
    </Content>
  );
}
