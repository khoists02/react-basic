import React, { FC } from "react";

const Sidebar: FC = () => {
  return (
    <div className="sidebar sidebar-dark sidebar-main sidebar-expand-lg">
      <div className="sidebar-section bg-black bg-opacity-10 border-bottom border-bottom-white border-opacity-10">
        <div className="sidebar-logo d-flex justify-content-center align-items-center">
          <a
            href="index.html"
            className="d-inline-flex align-items-center py-2"
          >
            <img
              src="../../../assets/images/logo_icon.svg"
              className="sidebar-logo-icon"
              alt=""
            />
            <img
              src="../../../assets/images/logo_text_light.svg"
              className="sidebar-resize-hide ms-3"
              height="14"
              alt=""
            />
          </a>

          <div className="sidebar-resize-hide ms-auto">
            <button
              type="button"
              className="btn btn-flat-white btn-icon btn-sm rounded-pill border-transparent sidebar-control sidebar-main-resize d-none d-lg-inline-flex"
            >
              <i className="ph-arrows-left-right"></i>
            </button>

            <button
              type="button"
              className="btn btn-flat-white btn-icon btn-sm rounded-pill border-transparent sidebar-mobile-main-toggle d-lg-none"
            >
              <i className="ph-x"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="sidebar-content">
        <div className="sidebar-section">
          <div className="nav nav-sidebar">
            <div className="nav-item">
              <a href="#" className="nav-link">
                <i className="ph-swatches"></i>
                <span>Themes</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="alert bg-secondary bg-opacity-20 sidebar-resize-hide rounded p-3 m-3"></div>
    </div>
  );
};

export default Sidebar;
