import styled from 'styled-components';

export const Content = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const Label = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;

  &:not(:first-child) {
    margin-top: 32px;
  }
`;

export const Paragraphy = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;

  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;
