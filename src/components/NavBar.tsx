import { useContext } from 'react';
import { AppContext } from '../contexts/app-context';
import Authenticate from './Authenticate';

export default function NavBar() {
  const appData = useContext(AppContext);

  return (
    <nav className="navbar bg-white">
      <div className="container-fluid">
        <a className="navbar-brand ms-3">
          {/* <img src={Logo} width={100} /> */}
          Diatomix
        </a>
        <div className="d-flex">
          <div className="d-flex align-items-center">{appData.authAddress ? appData.authAddress : <Authenticate />}</div>
        </div>
      </div>
    </nav>
  );
}
