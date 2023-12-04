export default function Home() {
  return (
    <>
      <header className="navbar-light navbar-sticky header-static border-bottom navbar-dashboard">
        {/* Logo Nav START */}
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            {/* Logo START */}
            <a className="navbar-brand me-3">
              <img
                className="navbar-brand-item light-mode-item"
                src="assets/images/logo.svg"
                alt="logo"
              />
              <img
                className="navbar-brand-item dark-mode-item"
                src="assets/images/logo-light.svg"
                alt="logo"
              />
            </a>
            {/* Logo END */}
            {/* Responsive navbar toggler */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
            {/* Main navbar START */}
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                {/* Nav item 1 Demos */}
                <li className="nav-item">
                  <a className="nav-link" href="dashboard.html">
                    <i className="bi bi-house-door me-1" />
                    Dashboard
                  </a>
                </li>
                {/* Nav item 2 Post */}
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="postMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bi bi-pencil me-1" />
                    Post
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="postMenu">
                    {/* dropdown submenu */}
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-post-list.html"
                      >
                        Post List
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-post-categories.html"
                      >
                        Post Categories
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-post-create.html"
                      >
                        Create a Post
                      </a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-post-edit.html"
                      >
                        Edit Post
                      </a>{" "}
                    </li>
                  </ul>
                </li>
                {/* Nav item 3 Pages */}
                <li className="nav-item dropdown align-items-center">
                <a
                  className="avatar avatar-sm p-0 show"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/03.jpg"
                    alt="avatar"
                  />
                </a>
                  <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 show"
                  aria-labelledby="profileDropdown"
                  data-bs-popper="static"
                >
                  {/* Profile info */}
                  <li className="px-3">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src="assets/images/avatar/03.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <a className="h6 mt-2 mt-sm-0" href="#">
                          {" "}
                          Louis Ferguson
                        </a>
                        <p className="small m-0">example@gmail.com</p>
                      </div>
                    </div>
                    <hr />
                  </li>
                  {/* Links */}
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person fa-fw me-2" />
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear fa-fw me-2" />
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-info-circle fa-fw me-2" />
                      Help
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-power fa-fw me-2" />
                      Sign Out
                    </a>
                  </li>
                  <li className="dropdown-divider mb-3" />
                  <li>
                    <div className="dropdown-item">
                      <div className="modeswitch m-0" id="darkModeSwitch">
                        <div className="switch" />
                      </div>
                    </div>
                  </li>
                </ul>
                </li>
              </ul>
              {/* Search dropdown START */}
              <div className="nav my-3 my-xl-0 px-4 px-lg-1 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative">
                    <input
                      className="form-control pe-5 bg-transparent"
                      type="search"
                      placeholder="Pesquisar"
                      aria-label="Search"
                    />
                    <button
                      className="btn bg-transparent border-0 px-2 py-0 position-absolute top-50 end-0 translate-middle-y"
                      type="submit"
                    >
                      <i className="fas fa-search fs-6 " />
                    </button>
                  </form>
                </div>
              </div>
              {/* Search dropdown END */}
            </div>
            {/* Main navbar END */}
            {/* Nav right START */}
            <div className="nav flex-nowrap align-items-center">              
              {/* Profile dropdown START */}
              <div className="nav-item ms-2 ms-md-3 dropdown">
                {/* Avatar */}
                <a
                  className="avatar avatar-sm p-0 show"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="true"
                >
                  <img
                    className="avatar-img rounded-circle"
                    src="assets/images/avatar/03.jpg"
                    alt="avatar"
                  />
                </a>
                {/* Profile dropdown START */}
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 show"
                  aria-labelledby="profileDropdown"
                  data-bs-popper="static"
                >
                  {/* Profile info */}
                  <li className="px-3">
                    <div className="d-flex align-items-center">
                      {/* Avatar */}
                      <div className="avatar me-3">
                        <img
                          className="avatar-img rounded-circle shadow"
                          src="assets/images/avatar/03.jpg"
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <a className="h6 mt-2 mt-sm-0" href="#">
                          {" "}
                          Louis Ferguson
                        </a>
                        <p className="small m-0">example@gmail.com</p>
                      </div>
                    </div>
                    <hr />
                  </li>
                  {/* Links */}
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person fa-fw me-2" />
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear fa-fw me-2" />
                      Account Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-info-circle fa-fw me-2" />
                      Help
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-power fa-fw me-2" />
                      Sign Out
                    </a>
                  </li>
                  <li className="dropdown-divider mb-3" />
                  <li>
                    <div className="dropdown-item">
                      <div className="modeswitch m-0" id="darkModeSwitch">
                        <div className="switch" />
                      </div>
                    </div>
                  </li>
                </ul>
                {/* Profile dropdown END */}
              </div>
              {/* Profile dropdown END */}
              {/* Nav right END */}
            </div>
          </div>
        </nav>
        {/* Logo Nav END */}
      </header>
    </>
  );
}
