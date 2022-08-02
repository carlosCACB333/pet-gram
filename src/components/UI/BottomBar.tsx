import { MdHome, MdFavorite, MdPerson, MdOutlineHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components';
import { colors, fadeInAnimation, maxW } from '../../styles';

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  bottom: 0;
  position: fixed;
  max-width: ${maxW}px;
  width: 100%;
  padding: 0.5rem;
  background-color: white;
`;

const Button = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 5px;
  color: ${colors.secondary};
  & svg {
    margin-right: 0.2rem;
    font-size: 1.5rem;
  }
  &:hover {
    background-color: #eae8e8;
  }

  &.active {
    color: ${colors.primary};
    &:after {
      content: '.';
      font-size: 2rem;
      color: ${colors.primary};
      position: absolute;
      bottom: -4px;
      left: 16px;
      ${fadeInAnimation('0.4s')}
    }
  }
`;

const LinkElement = ({
  to,
  name,
  children,
}: {
  to: string;
  name: string;
  children: (isActive: boolean) => JSX.Element;
}) => {
  const resolver = useResolvedPath(to);
  const match = useMatch({ path: resolver.pathname, end: true });

  return (
    <Button to={to} className={match ? 'active' : ''}>
      <>
        {children(!!match)} {name}
      </>
    </Button>
  );
};

export const BottomBar = () => {
  return (
    <Nav>
      <LinkElement to="/" name="Home">
        {(isActive) => (isActive ? <MdHome /> : <MdOutlineHome />)}
      </LinkElement>
      <LinkElement to="/fav" name="Favoritos">
        {(isActive) => (isActive ? <MdFavorite /> : <MdFavoriteBorder />)}
      </LinkElement>
      <LinkElement to="/user" name="Perfil">
        {(isActive) => (isActive ? <MdPerson /> : <MdPersonOutline />)}
      </LinkElement>
    </Nav>
  );
};
