import Navdash from "../../components/navbar/page";

export default function authorlist() {
  return (
    <>
      <Navdash />
      <br />
      <section className="py-4">
        <div className="container">
          <div className="row g-4 pb-4">
            <div className="col-12">
              <div className="d-sm-flex justify-content-between align-items-center">
                <h1 className="mb-sm-0 h2">Listagem de Autores</h1>
                <a href="#" className="btn btn-sm btn-primary mb-0">
                  <i className="fas fa-plus me-2" />
                  Novo Autor
                </a>
              </div>
            </div>
          </div>
          <div className="card border">
            <div className="card-header border-bottom p-3">
              <div className="row g-3 align-items-center justify-content-between">
                <div className="col-md-8">
                  <form className="rounded position-relative">
                    <input
                      className="form-control bg-transparent"
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
                <div className="col-md-3">
                  <ul
                    className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end"
                    id="pills-tab"
                    role="tablist"
                  ></ul>
                </div>
              </div>
            </div>
            <div className="card-body p-3 pb-0">
              <div className="tab-content py-0 my-0">
                <div
                  className="tab-pane fade active show"
                  id="nav-list-tab"
                  role="tabpanel"
                >
                  <div className="table-responsive border-0">
                    <table className="table align-middle p-4 mb-0 table-hover">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col" className="border-0 rounded-start">
                            Nome Autor
                          </th>
                          <th scope="col" className="border-0">
                          Data de Criação
                          </th>
                          <th scope="col" className="border-0">
                            Total Postagens
                          </th>
                          <th scope="col" className="border-0 rounded-end">
                          Acão
                          </th>
                        </tr>
                      </thead>
                      <tbody className="border-top-0">
                        <tr>
                          <td>
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-md">
                                <img
                                  src="assets/images/avatar/09.jpg"
                                  className="rounded-circle"
                                  alt
                                />
                              </div>
                              <div className="mb-0 ms-2">
                                <h6 className="mb-0">
                                  <a href="#" className="stretched-link">
                                    Lori Stevens
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Jan 22, 2022</td>
                          <td>10</td>
                          <td>
                            <div className="d-flex gap-2">
                              <a
                                href="#"
                                className="btn btn-light btn-round mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="Block"
                                aria-label="Block"
                              >
                                <i className="fas fa-ban" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>

                      <tbody className="border-top-0">
                        <tr>
                          <td>
                            <div className="d-flex align-items-center position-relative">
                              <div className="avatar avatar-md">
                                <img
                                  src="assets/images/avatar/09.jpg"
                                  className="rounded-circle"
                                  alt
                                />
                              </div>
                              <div className="mb-0 ms-2">
                                <h6 className="mb-0">
                                  <a href="#" className="stretched-link">
                                    Stevens Lori
                                  </a>
                                </h6>
                              </div>
                            </div>
                          </td>
                          <td>Jan 22, 2022</td>
                          <td>256</td>
                          <td>
                            <div className="d-flex gap-2">
                              <a
                                href="#"
                                className="btn btn-light btn-round mb-0"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title
                                data-bs-original-title="Block"
                                aria-label="Block"
                              >
                                <i className="fas fa-ban" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>                     
                      <div className="card-footer p-3">
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                          <p className="mb-sm-0 text-center text-sm-start">
                            Mostrando 
                          </p>
                          <nav
                            className="mb-sm-0 d-flex justify-content-center"
                            aria-label="navigation"
                          >
                            <ul className="pagination pagination-sm pagination-bordered mb-0">
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  tabIndex={-1}
                                  aria-disabled="false"
                                >
                                  Anterior
                                </a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="#">
                                  1
                                </a>
                              </li>
                              <li className="page-item ">
                                <a className="page-link" href="#">
                                  2
                                </a>
                              </li>
                              <li className="page-item disabled">
                                <a className="page-link" href="#">
                                  ..
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  15
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                Proximo
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
