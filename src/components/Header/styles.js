import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.header`
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
