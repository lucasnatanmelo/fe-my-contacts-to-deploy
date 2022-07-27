import { Link } from 'react-router-dom';
import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <Link to="/">
      <Container>

        <img src={logo} alt="MyContacts" width="201" />

      </Container>
    </Link>

  );
}
