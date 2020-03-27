/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Header from '~/components/Header';
import Card from '~/components/Card';

import { Container, Title, List } from './styles';

import { profileListRequest } from '~/store/modules/profile/actions';

export default function Profile() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.profile.data);

  useEffect(() => {
    dispatch(profileListRequest());
  }, []);

  return (
    <Container>
      <Header />
      <Title>Casos cadastrados</Title>
      <List>
        {data.map((item) => (
          <Card item={item} />
        ))}
      </List>
    </Container>
  );
}
