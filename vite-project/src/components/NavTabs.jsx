import { Link, useLocation } from 'react-router-dom';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <div style={{
        display: "flex", justifyContent: "center", gap: "20px"
      }}>
        <ul className="nav nav-tabs">

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
              to="/About"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
            >
              <span className="badge ">About</span>

            </Link>
          </li >

          <li className="nav-item">
            <Link
              to="/Contact"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            // className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              <span className="badge text-bg-warning">Contact</span>
            </Link>
          </li>

        </ul >
      </div>

    </>

  );
}

export default NavTabs;
