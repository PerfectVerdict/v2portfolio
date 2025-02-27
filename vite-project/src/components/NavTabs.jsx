import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <ul className="nav nav-tabs">
        <h3 style={{ marginRight: "10px", marginTop: "4px" }}>Ethan Metz </h3>

        <li className="nav-item">


          <Link
            to="/About"
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
          >
            <span className="badge text-bg-secondary">About Me</span>

          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Projects"
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === '/Blog' ? 'nav-link active' : 'nav-link'}
          >
            <span className="badge text-bg-info">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          // className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
          >
            <span className="badge text-bg-warning">Contact</span>
          </Link>
        </li>
      </ul>

    </>
  );
}

export default NavTabs;
