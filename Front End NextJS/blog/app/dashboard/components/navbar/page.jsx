import Link from 'next/link'
import Image from 'next/image'

export default function navbar() {
  return (
    <>

    
      <header className="navbar-light navbar-sticky header-static border-bottom navbar-dashboard">
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <a className="navbar-brand me-3">
              <Image
                className="navbar-brand-item light-mode-item"
                src="/public/assets/images/logo.svg"
                width={500}
                height={500}
                alt="logo"
              />
              <img
                className="navbar-brand-item dark-mode-item"
                src="/public/assets/images/logo-light.svg"
                alt="logo"
              />
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <i className="bi bi-house-door me-1" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="postMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bi  bi-blockquote-left me-1" />
                    Postagens
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="postMenu">
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

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="pagesMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bi bi-people me-1" />
                    Usuarios
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    <li>                      
                      <a
                        className="dropdown-item"                        
                      >
                        <Link href="/dashboard/Autores/list">Author List</Link>
                      </a>
                    </li>
                    <li>                     
                      <a
                        className="dropdown-item"
                        href="dashboard-author-single.html"
                      >
                        Author Single
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-edit-profile.html"
                      >
                        Edit Profile
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-reviews.html"
                      >
                        Reviews
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a
                        className="dropdown-item"
                        href="dashboard-settings.html"
                      >
                        Settings
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown align-items-center">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="postMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="bi bi-person-circle me-1" />
                    Louis Ferguson
                  </a>
                  <ul
                    className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 show"
                    aria-labelledby="profileDropdown"
                    data-bs-popper="static"
                  >
                    <li className="px-3">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            className="avatar-img rounded-circle shadow"
                            src="assets/images/avatar/03.jpg"
                            alt="avatar"
                          />
                        </div>
                        <div>
                          <p className="small m-0">example@gmail.com</p>
                        </div>
                      </div>
                      <hr />
                    </li>
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
                        <i className="bi bi-door-closed fa-fw me-2" />
                        Sair
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
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
