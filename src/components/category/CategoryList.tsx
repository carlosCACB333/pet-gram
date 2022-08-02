import styled, { css } from 'styled-components';
import { Category } from './Category';
import { useEffect, useState } from 'react';
import { maxW } from '../../styles';
import { Loading } from '../UI';
import { useCategory } from '../../hooks/useCategory';

const Ul = styled.ul<{ fixed: boolean }>`
  ${({ fixed }) =>
    fixed &&
    css`
      position: fixed;
    `}
  margin: 8px auto 28px auto;
  display: flex;
  overflow: scroll;
  width: 100%;
  z-index: 200;
  max-width: ${maxW - 50}px;
  border-radius: 40px;
  background-color: #ffffffd3;
  top: 0;
  right: 0;
  left: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CategoryList = () => {
  const [showFixed, setShowFixed] = useState(false);
  const { categories, loading } = useCategory();

  useEffect(() => {
    const handleScroll = () => {
      setShowFixed(window.scrollY > 130);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (loading) return <Loading />;

  return (
    <Ul fixed={showFixed}>
      {categories.map((category) => (
        <li key={category.id}>
          <Category emoji={category.emoji} path={'/?id=' + category.id} cover={category.cover} />
        </li>
      ))}
    </Ul>
  );
};
