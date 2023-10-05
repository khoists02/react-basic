import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-static shadow">
      <div className="container-fluid">
        <div className="d-flex d-lg-none me-2">
          <button
            type="button"
            className="navbar-toggler sidebar-mobile-main-toggle rounded-pill"
          >
            <i className="ph-list"></i>
          </button>
        </div>
        <div
          className="navbar-collapse flex-lg-1 order-2 order-lg-1 collapse"
          id="navbar_search"
        >
          <div className="navbar-search flex-fill dropdown mt-2 mt-lg-0">
            {/* <div className="form-control-feedback form-control-feedback-start flex-grow-1">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                data-bs-toggle="dropdown"
              />
              <div className="form-control-feedback-icon">
                <i className="ph-magnifying-glass"></i>
              </div>
              <div className="dropdown-menu w-100">
                <button type="button" className="dropdown-item">
                  <div className="text-center w-32px me-3">
                    <i className="ph-magnifying-glass"></i>
                  </div>
                  <span>
                    Search <span className="fw-bold">"in"</span> everywhere
                  </span>
                </button>

                <div className="dropdown-divider"></div>

                <div className="dropdown-menu-scrollable-lg">
                  <div className="dropdown-header">
                    Contacts
                    <a href="#" className="float-end">
                      See all
                      <i className="ph-arrow-circle-right ms-1"></i>
                    </a>
                  </div>

                  <div className="dropdown-item cursor-pointer">
                    <div className="me-3">
                      <img
                        src="../../../assets/images/demo/users/face3.jpg"
                        className="w-32px h-32px rounded-pill"
                        alt=""
                      />
                    </div>

                    <div className="d-flex flex-column flex-grow-1">
                      <div className="fw-semibold">
                        Christ<mark>in</mark>e Johnson
                      </div>
                      <span className="fs-sm text-muted">
                        c.johnson@awesomecorp.com
                      </span>
                    </div>

                    <div className="d-inline-flex">
                      <a href="#" className="text-body ms-2">
                        <i className="ph-user-circle"></i>
                      </a>
                    </div>
                  </div>

                  <div className="dropdown-item cursor-pointer">
                    <div className="me-3">
                      <img
                        src="../../../assets/images/demo/users/face24.jpg"
                        className="w-32px h-32px rounded-pill"
                        alt=""
                      />
                    </div>

                    <div className="d-flex flex-column flex-grow-1">
                      <div className="fw-semibold">
                        Cl<mark>in</mark>ton Sparks
                      </div>
                      <span className="fs-sm text-muted">
                        c.sparks@awesomecorp.com
                      </span>
                    </div>

                    <div className="d-inline-flex">
                      <a href="#" className="text-body ms-2">
                        <i className="ph-user-circle"></i>
                      </a>
                    </div>
                  </div>

                  <div className="dropdown-divider"></div>

                  <div className="dropdown-header">
                    Clients
                    <a href="#" className="float-end">
                      See all
                      <i className="ph-arrow-circle-right ms-1"></i>
                    </a>
                  </div>

                  <div className="dropdown-item cursor-pointer">
                    <div className="me-3">
                      <img
                        src="../../../assets/images/brands/adobe.svg"
                        className="w-32px h-32px rounded-pill"
                        alt=""
                      />
                    </div>

                    <div className="d-flex flex-column flex-grow-1">
                      <div className="fw-semibold">
                        Adobe <mark>In</mark>c.
                      </div>
                      <span className="fs-sm text-muted">
                        Enterprise license
                      </span>
                    </div>

                    <div className="d-inline-flex">
                      <a href="#" className="text-body ms-2">
                        <i className="ph-briefcase"></i>
                      </a>
                    </div>
                  </div>

                  <div className="dropdown-item cursor-pointer">
                    <div className="me-3">
                      <img
                        src="../../../assets/images/brands/holiday-inn.svg"
                        className="w-32px h-32px rounded-pill"
                        alt=""
                      />
                    </div>

                    <div className="d-flex flex-column flex-grow-1">
                      <div className="fw-semibold">
                        Holiday-<mark>In</mark>n
                      </div>
                      <span className="fs-sm text-muted">
                        On-premise license
                      </span>
                    </div>

                    <div className="d-inline-flex">
                      <a href="#" className="text-body ms-2">
                        <i className="ph-briefcase"></i>
                      </a>
                    </div>
                  </div>

                  <div className="dropdown-item cursor-pointer">
                    <div className="me-3">
                      <img
                        src="../../../assets/images/brands/ing.svg"
                        className="w-32px h-32px rounded-pill"
                        alt=""
                      />
                    </div>

                    <div className="d-flex flex-column flex-grow-1">
                      <div className="fw-semibold">
                        <mark>IN</mark>G Group
                      </div>
                      <span className="fs-sm text-muted">
                        Perpetual license
                      </span>
                    </div>

                    <div className="d-inline-flex">
                      <a href="#" className="text-body ms-2">
                        <i className="ph-briefcase"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="position-static">
              <a
                href="#"
                className="navbar-nav-link align-items-center justify-content-center w-40px h-32px position-absolute end-0 top-50 translate-middle-y p-0 me-1"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <i className="ph-faders-horizontal"></i>
              </a>

              <div className="dropdown-menu w-100 p-3">
                <div className="d-flex align-items-center mb-3">
                  <h6 className="mb-0">Search options</h6>
                  <a href="#" className="text-body rounded-pill ms-auto">
                    <i className="ph-clock-counter-clockwise"></i>
                  </a>
                </div>

                <div className="mb-3">
                  <label className="d-block form-label">Category</label>
                  <label className="form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" />
                    <span className="form-check-label">Invoices</span>
                  </label>
                  <label className="form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" />
                    <span className="form-check-label">Files</span>
                  </label>
                  <label className="form-check form-check-inline">
                    <input type="checkbox" className="form-check-input" />
                    <span className="form-check-label">Users</span>
                  </label>
                </div>

                <div className="mb-3">
                  <label className="form-label">Addition</label>
                  <div className="input-group">
                    <select className="form-select w-auto flex-grow-0">
                      <option value="1">has</option>
                      <option value="2">has not</option>
                    </select>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the word(s)"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <div className="input-group">
                    <select className="form-select w-auto flex-grow-0">
                      <option value="1">is</option>
                      <option value="2">is not</option>
                    </select>
                    <select className="form-select">
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                      <option value="3">New</option>
                      <option value="4">Expired</option>
                      <option value="5">Pending</option>
                    </select>
                  </div>
                </div>

                <div className="d-flex">
                  <button type="button" className="btn btn-light">
                    Reset
                  </button>

                  <div className="ms-auto">
                    <button type="button" className="btn btn-light">
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary ms-2">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="nav hstack gap-sm-1 flex-row justify-content-end order-1 order-lg-2">
          <li className="nav-item d-lg-none">
            <a
              href="#navbar_search"
              className="navbar-nav-link navbar-nav-link-icon rounded-pill"
              data-bs-toggle="collapse"
            >
              <i className="ph-magnifying-glass"></i>
            </a>
          </li>

          <li className="nav-item nav-item-dropdown-lg dropdown">
            <a
              href="#"
              className="navbar-nav-link navbar-nav-link-icon rounded-pill"
              data-bs-toggle="dropdown"
            >
              <i className="ph-squares-four"></i>
            </a>

            <div className="dropdown-menu dropdown-menu-end dropdown-menu-scrollable-sm wmin-lg-600 p-0">
              <div className="d-flex align-items-center border-bottom p-3">
                <h6 className="mb-0">Browse apps</h6>
                <a href="#" className="ms-auto">
                  View all
                  <i className="ph-arrow-circle-right ms-1"></i>
                </a>
              </div>

              <div className="row row-cols-1 row-cols-sm-2 g-0">
                <div className="col">
                  <button
                    type="button"
                    className="dropdown-item text-wrap h-100 align-items-start border-end-sm border-bottom p-3"
                  >
                    <div>
                      <img
                        src="../../../assets/images/demo/logos/1.svg"
                        className="h-40px mb-2"
                        alt=""
                      />
                      <div className="fw-semibold my-1">
                        Customer data platform
                      </div>
                      <div className="text-muted">
                        Unify customer data from multiple sources
                      </div>
                    </div>
                  </button>
                </div>

                <div className="col">
                  <button
                    type="button"
                    className="dropdown-item text-wrap h-100 align-items-start border-bottom p-3"
                  >
                    <div>
                      <img
                        src="../../../assets/images/demo/logos/2.svg"
                        className="h-40px mb-2"
                        alt=""
                      />
                      <div className="fw-semibold my-1">Data catalog</div>
                      <div className="text-muted">
                        Discover, inventory, and organize data assets
                      </div>
                    </div>
                  </button>
                </div>

                <div className="col">
                  <button
                    type="button"
                    className="dropdown-item text-wrap h-100 align-items-start border-end-sm border-bottom border-bottom-sm-0 rounded-bottom-start p-3"
                  >
                    <div>
                      <img
                        src="../../../assets/images/demo/logos/3.svg"
                        className="h-40px mb-2"
                        alt=""
                      />
                      <div className="fw-semibold my-1">Data governance</div>
                      <div className="text-muted">
                        The collaboration hub and data marketplace
                      </div>
                    </div>
                  </button>
                </div>

                <div className="col">
                  <button
                    type="button"
                    className="dropdown-item text-wrap h-100 align-items-start rounded-bottom-end p-3"
                  >
                    <div>
                      <img
                        src="../../../assets/images/demo/logos/4.svg"
                        className="h-40px mb-2"
                        alt=""
                      />
                      <div className="fw-semibold my-1">Data privacy</div>
                      <div className="text-muted">
                        Automated provisioning of non-production datasets
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </li>

          <li className="nav-item">
            <a
              href="#"
              className="navbar-nav-link navbar-nav-link-icon rounded-pill"
              data-bs-toggle="offcanvas"
              data-bs-target="#notifications"
            >
              <i className="ph-bell"></i>
              <span className="badge bg-yellow text-black position-absolute top-0 end-0 translate-middle-top zindex-1 rounded-pill mt-1 me-1">
                2
              </span>
            </a>
          </li>

          <li className="nav-item nav-item-dropdown-lg dropdown">
            <a
              href="#"
              className="navbar-nav-link align-items-center rounded-pill p-1"
              data-bs-toggle="dropdown"
            >
              <div className="status-indicator-container">
                <img
                  src="../../../assets/images/demo/users/face11.jpg"
                  className="w-32px h-32px rounded-pill"
                  alt=""
                />
                <span className="status-indicator bg-success"></span>
              </div>
              <span className="d-none d-lg-inline-block mx-lg-2">Victoria</span>
            </a>

            <div className="dropdown-menu dropdown-menu-end">
              <a href="#" className="dropdown-item">
                <i className="ph-user-circle me-2"></i>
                My profile
              </a>
              <a href="#" className="dropdown-item">
                <i className="ph-currency-circle-dollar me-2"></i>
                My subscription
              </a>
              <a href="#" className="dropdown-item">
                <i className="ph-shopping-cart me-2"></i>
                My orders
              </a>
              <a href="#" className="dropdown-item">
                <i className="ph-envelope-open me-2"></i>
                My inbox
                <span className="badge bg-primary rounded-pill ms-auto">
                  26
                </span>
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="ph-gear me-2"></i>
                Account settings
              </a>
              <a href="#" className="dropdown-item">
                <i className="ph-sign-out me-2"></i>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
