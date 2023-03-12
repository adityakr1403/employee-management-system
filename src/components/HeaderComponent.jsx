import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <Link className="navbar-brand" to="/">
              Employee Management App
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
