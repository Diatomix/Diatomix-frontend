import { useContext } from 'react';
import { AppContext } from '../contexts/app-context';
import { AuthContext } from '../contexts/AuthContext';
import Authenticate from './Authenticate';

export default function NavBar() {
  const appData = useContext(AppContext);
  const authContext = useContext(AuthContext);

  return (
    <nav className="navbar bg-white">
      <div className="container-fluid">
        <a className="navbar-brand ms-3">
          {/* <img src={Logo} width={100} /> */}
          Diatomix
        </a>
        <div className="d-flex">
          <div className="d-flex align-items-center">{authContext.authAddress ? authContext.authAddress : <Authenticate />}</div>
        </div>
      </div>
    </nav>
  );
}
