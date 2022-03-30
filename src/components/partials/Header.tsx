import { Link } from 'react-router-dom';
// import { useAuth0 } from '@auth0/auth0-react';
// import Logo from "assets/ICT_LOGO_blau.png";

import { NavBar } from '../navigation/NavBar';
// import { UserMenu } from './UserMenu';

export const Header = () => {
  const isAuthenticated = false;

  return (
    <div>
      <Link to="/">
        {/* <Image src={Logo} alt="ICT-Scouts Logo" w="96px" /> */}
      </Link>

      <div>
        <div>
          <NavBar />
          {/* {isAuthenticated ? <UserMenu /> : <></>} */}
        </div>
      </div>
    </div>
  );
};
