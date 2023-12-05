export default function Authorlist() {
  return (
    <>


      <div className="card border">
        {/* Card header START */}
        <div className="card-header border-bottom p-3">
          {/* Search and select START */}
          <div className="row g-3 align-items-center justify-content-between">
            {/* Search bar */}
            <div className="col-md-8">
              <form className="rounded position-relative">
                <input
                  className="form-control bg-transparent"
                  type="search"
                  placeholder="Search"
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
            {/* Tab buttons */}
            <div className="col-md-3">
              {/* Tabs START */}
              <ul
                className="list-inline mb-0 nav nav-pills nav-pill-dark-soft border-0 justify-content-end"
                id="pills-tab"
                role="tablist"
              >
                {/* Grid tab */}
                <li className="nav-item" role="presentation">
                  <a
                    href="#nav-list-tab"
                    className="nav-link mb-0 me-2 active"
                    data-bs-toggle="tab"
                    aria-selected="true"
                    role="tab"
                  >
                    <i className="fas fa-fw fa-list-ul" />
                  </a>
                </li>
                {/* List tab */}
                <li className="nav-item" role="presentation">
                  <a
                    href="#nav-grid-tab"
                    className="nav-link mb-0"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                  >
                    <i className="fas fa-fw fa-th-large" />
                  </a>
                </li>
              </ul>
              {/* Tabs end */}
            </div>
          </div>
          {/* Search and select END */}
        </div>
        {/* Card header END */}
        {/* Card body START */}
        <div className="card-body p-3 pb-0">
          {/* Tabs content START */}
          <div className="tab-content py-0 my-0">
            {/* Tabs content item START */}
            <div
              className="tab-pane fade active show"
              id="nav-list-tab"
              role="tabpanel"
            >
              {/* Table START */}
              <div className="table-responsive border-0">
                <table className="table align-middle p-4 mb-0 table-hover">
                  {/* Table head */}
                  <thead className="table-dark">
                    <tr>
                      <th scope="col" className="border-0 rounded-start">
                        Author name
                      </th>
                      <th scope="col" className="border-0">
                        Join date
                      </th>
                      <th scope="col" className="border-0">
                        Total post
                      </th>
                      <th scope="col" className="border-0">
                        Total followers
                      </th>
                      <th scope="col" className="border-0">
                        Payment
                      </th>
                      <th scope="col" className="border-0 rounded-end">
                        Action
                      </th>
                    </tr>
                  </thead>
                  {/* Table body START */}
                  <tbody className="border-top-0">
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img
                              src="assets/images/avatar/09.jpg"
                              className="rounded-circle"
                              alt
                            />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Lori Stevens
                              </a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>Jan 22, 2022</td>
                      {/* Table data */}
                      <td>256</td>
                      {/* Table data */}
                      <td>5,354</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-success bg-opacity-10 text-success mb-2">
                          Paid
                        </span>
                      </td>
                      {/* Table data */}
                      <td>
                        <div className="d-flex gap-2">
                          <a
                            href="#"
                            className="btn btn-light btn-round mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-bs-original-title="Message"
                            aria-label="Message"
                          >
                            <i className="bi bi-envelope" />
                          </a>
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
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img
                              src="assets/images/avatar/01.jpg"
                              className="rounded-circle"
                              alt
                            />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Carolyn Ortiz
                              </a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>Jan 19, 2022</td>
                      {/* Table data */}
                      <td>56</td>
                      {/* Table data */}
                      <td>15,523</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-success bg-opacity-10 text-success mb-2">
                          Paid
                        </span>
                      </td>
                      {/* Table data */}
                      <td>
                        <div className="d-flex gap-2">
                          <a
                            href="#"
                            className="btn btn-light btn-round mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-bs-original-title="Message"
                            aria-label="Message"
                          >
                            <i className="bi bi-envelope" />
                          </a>
                          <a
                            href="#"
                            className="btn btn-danger-soft btn-round mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-bs-original-title="Unblock"
                            aria-label="Block"
                          >
                            <i className="fas fa-ban" />
                          </a>
                        </div>
                      </td>
                    </tr>
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img
                              src="assets/images/avatar/03.jpg"
                              className="rounded-circle"
                              alt
                            />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Dennis Barrett
                              </a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>Nov 11, 2022</td>
                      {/* Table data */}
                      <td>98</td>
                      {/* Table data */}
                      <td>2,546</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-warning bg-opacity-15 text-warning mb-2">
                          Pending
                        </span>
                      </td>
                      {/* Table data */}
                      <td>
                        <div className="d-flex gap-2">
                          <a
                            href="#"
                            className="btn btn-light btn-round mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-bs-original-title="Message"
                            aria-label="Message"
                          >
                            <i className="bi bi-envelope" />
                          </a>
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
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img
                              src="assets/images/avatar/04.jpg"
                              className="rounded-circle"
                              alt
                            />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Billy Vasquez
                              </a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>Jan 22, 2022</td>
                      {/* Table data */}
                      <td>1258</td>
                      {/* Table data */}
                      <td>12,786</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-success bg-opacity-10 text-success mb-2">
                          Paid
                        </span>
                      </td>
                      {/* Table data */}
                      <td>
                        <div className="d-flex gap-2">
                          <a
                            href="#"
                            className="btn btn-light btn-round mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-bs-original-title="Message"
                            aria-label="Message"
                          >
                            <i className="bi bi-envelope" />
                          </a>
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
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img
                              src="assets/images/avatar/05.jpg"
                              className="rounded-circle"
                              alt
                            />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Jacqueline Miller
                              </a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>Jan 29, 2022</td>
                      {/* Table data */}
                      <td>2568</td>
                      {/* Table data */}
                      <td>21,245</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-success bg-opacity-10 text-success mb-2">
                          Paid
                        </span>
                      </td>
                      {/* Table data */}
                      <td>
                        <div className="d-flex gap-2">
                          <a
                            href="#"
                            className="btn btn-light btn-round mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-bs-original-title="Message"
                            aria-label="Message"
                          >
                            <i className="bi bi-envelope" />
                          </a>
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
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img
                              src="assets/images/avatar/06.jpg"
                              className="rounded-circle"
                              alt
                            />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Amanda Reed
                              </a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td className="text-center text-sm-start">Apr 25 2022</td>
                      {/* Table data */}
                      <td>895</td>
                      {/* Table data */}
                      <td>8,546</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-success bg-opacity-10 text-success mb-2">
                          Paid
                        </span>
                      </td>
                      {/* Table data */}
                      <td>
                        <div className="d-flex gap-2">
                          <a
                            href="#"
                            className="btn btn-light btn-round mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-bs-original-title="Message"
                            aria-label="Message"
                          >
                            <i className="bi bi-envelope" />
                          </a>
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
                    {/* Table row */}
                    <tr>
                      {/* Table data */}
                      <td>
                        <div className="d-flex align-items-center position-relative">
                          {/* Image */}
                          <div className="avatar avatar-md">
                            <img
                              src="assets/images/avatar/07.jpg"
                              className="rounded-circle"
                              alt
                            />
                          </div>
                          <div className="mb-0 ms-2">
                            {/* Title */}
                            <h6 className="mb-0">
                              <a href="#" className="stretched-link">
                                Samuel Bishop
                              </a>
                            </h6>
                          </div>
                        </div>
                      </td>
                      {/* Table data */}
                      <td>Mar 17 2022</td>
                      {/* Table data */}
                      <td>856</td>
                      {/* Table data */}
                      <td>5,354</td>
                      {/* Table data */}
                      <td>
                        <span className="badge bg-danger bg-opacity-10 text-danger mb-2">
                          Cancel
                        </span>
                      </td>
                      {/* Table data */}
                      <td>
                        <div className="d-flex gap-2">
                          <a
                            href="#"
                            className="btn btn-light btn-round mb-0"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title
                            data-bs-original-title="Message"
                            aria-label="Message"
                          >
                            <i className="bi bi-envelope" />
                          </a>
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
                  {/* Table body END */}
                </table>
              </div>
              {/* Table END */}
            </div>
            {/* Tabs content item END */}
            {/* Tabs content item START */}
            <div className="tab-pane fade" id="nav-grid-tab" role="tabpanel">
              <div className="row g-4">
                {/* Card item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card border p-2">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* avatar */}
                        <div className="avatar avatar-lg me-3 flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/10.jpg"
                            alt
                          />
                        </div>
                        {/* Connections holder */}
                        <div className="flex-grow-1 d-block">
                          <h5 className="mb-1">
                            <a href="#">Frances Guerrero</a>
                          </h5>
                          <div className="small">Editor at Blogzine</div>
                        </div>
                      </div>
                      {/* Followers and Post */}
                      <div className="d-sm-flex justify-content-sm-between mt-3">
                        {/* Followers */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-people-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">5,354</h5>
                            <h6 className="mb-0 fw-light">Followers</h6>
                          </div>
                        </div>
                        {/* Total post */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-file-earmark-text-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">846</h5>
                            <h6 className="mb-0 fw-light">Total Blogs</h6>
                          </div>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="d-sm-flex gap-2 mt-4">
                        <a href="#" className="btn btn-primary-soft w-100">
                          <i className="fab fa-facebook-messenger pe-2" />{" "}
                          Message
                        </a>
                        <a href="#" className="btn btn-danger-soft w-100">
                          <i className="fas fa-ban pe-2" /> Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card border p-2">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* avatar */}
                        <div className="avatar avatar-lg me-3 flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/01.jpg"
                            alt
                          />
                        </div>
                        {/* Connections holder */}
                        <div className="flex-grow-1 d-block">
                          <h5 className="mb-1">
                            <a href="#">Carolyn Ortiz</a>
                          </h5>
                          <div className="small">Editor at eduport</div>
                        </div>
                      </div>
                      {/* Followers and Post */}
                      <div className="d-sm-flex justify-content-sm-between mt-3">
                        {/* Followers */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-people-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">2,545</h5>
                            <h6 className="mb-0 fw-light">Followers</h6>
                          </div>
                        </div>
                        {/* Total post */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-file-earmark-text-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">586</h5>
                            <h6 className="mb-0 fw-light">Total Blogs</h6>
                          </div>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="d-sm-flex gap-2 mt-4">
                        <a href="#" className="btn btn-primary-soft w-100">
                          <i className="fab fa-facebook-messenger pe-2" />{" "}
                          Message
                        </a>
                        <a href="#" className="btn btn-danger-soft w-100">
                          <i className="fas fa-ban pe-2" /> Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card border p-2">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* avatar */}
                        <div className="avatar avatar-lg me-3 flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/02.jpg"
                            alt
                          />
                        </div>
                        {/* Connections holder */}
                        <div className="flex-grow-1 d-block">
                          <h5 className="mb-1">
                            <a href="#">Louis Ferguson</a>
                          </h5>
                          <div className="small">Editor at folio</div>
                        </div>
                      </div>
                      {/* Followers and Post */}
                      <div className="d-sm-flex justify-content-sm-between mt-3">
                        {/* Followers */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-people-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">3,546</h5>
                            <h6 className="mb-0 fw-light">Followers</h6>
                          </div>
                        </div>
                        {/* Total post */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-file-earmark-text-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">786</h5>
                            <h6 className="mb-0 fw-light">Total Blogs</h6>
                          </div>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="d-sm-flex gap-2 mt-4">
                        <a href="#" className="btn btn-primary-soft w-100">
                          <i className="fab fa-facebook-messenger pe-2" />{" "}
                          Message
                        </a>
                        <a href="#" className="btn btn-danger-soft w-100">
                          <i className="fas fa-ban pe-2" /> Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card border p-2">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* avatar */}
                        <div className="avatar avatar-lg me-3 flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/03.jpg"
                            alt
                          />
                        </div>
                        {/* Connections holder */}
                        <div className="flex-grow-1 d-block">
                          <h5 className="mb-1">
                            <a href="#">Billy Vasquez</a>
                          </h5>
                          <div className="small">Editor at Wizixo</div>
                        </div>
                      </div>
                      {/* Followers and Post */}
                      <div className="d-sm-flex justify-content-sm-between mt-3">
                        {/* Followers */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-people-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">6,586</h5>
                            <h6 className="mb-0 fw-light">Followers</h6>
                          </div>
                        </div>
                        {/* Total post */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-file-earmark-text-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">1,235</h5>
                            <h6 className="mb-0 fw-light">Total Blogs</h6>
                          </div>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="d-sm-flex gap-2 mt-4">
                        <a href="#" className="btn btn-primary-soft w-100">
                          <i className="fab fa-facebook-messenger pe-2" />{" "}
                          Message
                        </a>
                        <a href="#" className="btn btn-danger-soft w-100">
                          <i className="fas fa-ban pe-2" /> Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card border p-2">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* avatar */}
                        <div className="avatar avatar-lg me-3 flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/04.jpg"
                            alt
                          />
                        </div>
                        {/* Connections holder */}
                        <div className="flex-grow-1 d-block">
                          <h5 className="mb-1">
                            <a href="#">Samuel Bishop</a>
                          </h5>
                          <div className="small">Editor at Realty</div>
                        </div>
                      </div>
                      {/* Followers and Post */}
                      <div className="d-sm-flex justify-content-sm-between mt-3">
                        {/* Followers */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-people-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">996</h5>
                            <h6 className="mb-0 fw-light">Followers</h6>
                          </div>
                        </div>
                        {/* Total post */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-file-earmark-text-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">156</h5>
                            <h6 className="mb-0 fw-light">Total Blogs</h6>
                          </div>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="d-sm-flex gap-2 mt-4">
                        <a href="#" className="btn btn-primary-soft w-100">
                          <i className="fab fa-facebook-messenger pe-2" />{" "}
                          Message
                        </a>
                        <a href="#" className="btn btn-danger-soft w-100">
                          <i className="fas fa-ban pe-2" /> Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card border p-2">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* avatar */}
                        <div className="avatar avatar-lg me-3 flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/06.jpg"
                            alt
                          />
                        </div>
                        {/* Connections holder */}
                        <div className="flex-grow-1 d-block">
                          <h5 className="mb-1">
                            <a href="#">Amanda Reed</a>
                          </h5>
                          <div className="small">Editor at Blogzine</div>
                        </div>
                      </div>
                      {/* Followers and Post */}
                      <div className="d-sm-flex justify-content-sm-between mt-3">
                        {/* Followers */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-people-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">2,586</h5>
                            <h6 className="mb-0 fw-light">Followers</h6>
                          </div>
                        </div>
                        {/* Total post */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-file-earmark-text-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">665</h5>
                            <h6 className="mb-0 fw-light">Total Blogs</h6>
                          </div>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="d-sm-flex gap-2 mt-4">
                        <a href="#" className="btn btn-primary-soft w-100">
                          <i className="fab fa-facebook-messenger pe-2" />{" "}
                          Message
                        </a>
                        <a href="#" className="btn btn-danger-soft w-100">
                          <i className="fas fa-ban pe-2" /> Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card border p-2">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* avatar */}
                        <div className="avatar avatar-lg me-3 flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/07.jpg"
                            alt
                          />
                        </div>
                        {/* Connections holder */}
                        <div className="flex-grow-1 d-block">
                          <h5 className="mb-1">
                            <a href="#">Lori Stevens</a>
                          </h5>
                          <div className="small">Editor at Eduport</div>
                        </div>
                      </div>
                      {/* Followers and Post */}
                      <div className="d-sm-flex justify-content-sm-between mt-3">
                        {/* Followers */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-people-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">1,586</h5>
                            <h6 className="mb-0 fw-light">Followers</h6>
                          </div>
                        </div>
                        {/* Total post */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-file-earmark-text-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">458</h5>
                            <h6 className="mb-0 fw-light">Total Blogs</h6>
                          </div>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="d-sm-flex gap-2 mt-4">
                        <a href="#" className="btn btn-primary-soft w-100">
                          <i className="fab fa-facebook-messenger pe-2" />{" "}
                          Message
                        </a>
                        <a href="#" className="btn btn-danger-soft w-100">
                          <i className="fas fa-ban pe-2" /> Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
                {/* Card item START */}
                <div className="col-md-6 col-xl-4">
                  <div className="card border p-2">
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        {/* avatar */}
                        <div className="avatar avatar-lg me-3 flex-shrink-0">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/12.jpg"
                            alt
                          />
                        </div>
                        {/* Connections holder */}
                        <div className="flex-grow-1 d-block">
                          <h5 className="mb-1">
                            <a href="#">Jacqueline Miller</a>
                          </h5>
                          <div className="small">Editor at Blogzine</div>
                        </div>
                      </div>
                      {/* Followers and Post */}
                      <div className="d-sm-flex justify-content-sm-between mt-3">
                        {/* Followers */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-people-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">9,586</h5>
                            <h6 className="mb-0 fw-light">Followers</h6>
                          </div>
                        </div>
                        {/* Total post */}
                        <div className="d-flex text-start align-items-center mt-3">
                          <div className="icon-md bg-light text-body rounded-circle flex-shrink-0">
                            <i className="bi bi-file-earmark-text-fill fa-fw" />
                          </div>
                          <div className="ms-2">
                            <h5 className="mb-0">2,586</h5>
                            <h6 className="mb-0 fw-light">Total Blogs</h6>
                          </div>
                        </div>
                      </div>
                      {/* Buttons */}
                      <div className="d-sm-flex gap-2 mt-4">
                        <a href="#" className="btn btn-primary-soft w-100">
                          <i className="fab fa-facebook-messenger pe-2" />{" "}
                          Message
                        </a>
                        <a href="#" className="btn btn-danger-soft w-100">
                          <i className="fas fa-ban pe-2" /> Block
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card item END */}
              </div>{" "}
              {/* Row END */}
            </div>
            {/* Tabs content item END */}
          </div>
          {/* Tabs content END */}
        </div>
        {/* Card body END */}
        {/* Card Footer START */}
        <div className="card-footer p-3">
          {/* Pagination START */}
          <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
            {/* Content */}
            <p className="mb-sm-0 text-center text-sm-start">
              Showing 1 to 8 of 20 entries
            </p>
            {/* Pagination */}
            <nav
              className="mb-sm-0 d-flex justify-content-center"
              aria-label="navigation"
            >
              <ul className="pagination pagination-sm pagination-bordered mb-0">
                <li className="page-item disabled">
                  <a
                    className="page-link"
                    href="#"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item active">
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
                    Next
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Pagination END */}
        </div>
        {/* Card Footer END */}
      </div>

      
    </>
  );
}
