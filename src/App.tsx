import React from "react";
import "./app.scss";
import Sidebar from "./parts/Sidebar";
import Navbar from "./parts/Navbar";
// import PageHeader from "./parts/PageHeader";
import Footer from "./parts/Footer";

function App() {
  return (
    <div className="page-content">
      {/* Sidebar */}
      <Sidebar />
      <div className="content-wrapper">
        {/* Navbar */}
        <Navbar />
        <div className="content-inner">
          {/* Page Header */}
          {/* <PageHeader /> */}
          <div className="content pt-2">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">Card</div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">Card</div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
