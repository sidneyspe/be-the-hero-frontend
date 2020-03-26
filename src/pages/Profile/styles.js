import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Welcome = styled.span`
  font-size: 20px;
  margin-left: 20px;
`;

export const Logo = styled.img`
  height: 64px;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const ButtonHeader = styled.button`
  width: 60px;
  height: 60px;
  background: transparent;
  border: 1px solid #dcdce6;
  border-radius: 4px;
  margin-left: 16px;

  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`;

export const GoToButton = styled(Link)`
  width: 260px;
  margin-left: auto;
  margin-top: 0;
  height: 60px;
  background: #e02041;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const GoTo = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  font-weight: 500;
  transition: opacity 0.2s;

  svg {
    margin-right: 8px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const Card = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
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
