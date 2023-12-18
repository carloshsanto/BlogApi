import Script from "next/script";
import React from "react";
import Image from "next/image";

export default function () {
  return (
    <>
      <header className="navbar-light navbar-sticky header-static border-bottom navbar-dashboard">
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <a className="navbar-brand me-3">
              <Image
                className="navbar-brand-item light-mode-item"
                src="/assets/images/logo.svg"
                width={500}
                height={500}
                alt="logo"
              />
              <Image
                className="navbar-brand-item dark-mode-item"
                src="/assets/images/logo-light.svg"
                width={500}
                height={500}
                alt="logo"
              />
            </a>

            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >              
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav navbar-nav-scroll mx-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#">
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
                    <i className="bi bi-pencil me-1" />
                    Postagem
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="postMenu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Lista Postagem
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Categorias Postagem
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Criar Postagem
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Editar Postagem
                      </a>
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
                    <i className="bi bi-person fa-fw me-2" />
                    Usuario
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Lista de Perfil
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Editar Perfil
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                      >
                        Perfil
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="nav-item ms-2 ms-md-3 dropdown">
                <a
                  className="avatar avatar-sm p-0"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Image
                    className="avatar-img rounded-circle shadow"
                    src="/assets/images/avatar/03.jpg"
                    width={500}
                    height={500}
                    alt="Picture of the author"
                  />
                </a>
                <ul
                  className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                  aria-labelledby="profileDropdown"
                >
                  <li className="px-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar me-3">
                        <Image
                          className="avatar-img rounded-circle shadow"
                          src="/assets/images/avatar/03.jpg"
                          width={500}
                          height={500}
                          alt="Picture of the author"
                        />
                      </div>
                      <div>
                        <a className="h6 mt-2 mt-sm-0" href="#">
                          Carlos Henrique
                        </a>
                        <p className="small m-0">carlos.henrique@gmail.com</p>
                      </div>
                    </div>
                    <hr />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person fa-fw me-2" />
                      Editar Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-power fa-fw me-2" />
                      Sair
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Script src='src="assets/js/functions.js' />
      <Script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js" />
      <Script src="assets/vendor/apexcharts/js/apexcharts.min.js" />
      <Script src="src=assets/vendor/overlay-scrollbar/js/OverlayScrollbars.min.js" />
    </>
  );
}
