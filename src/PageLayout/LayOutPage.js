import React from "react";
import "./Layout.css";
import { Link, Outlet } from "react-router-dom";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { TbCricket } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";

const LayOutPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <nav className="nav  col-lg-2">
            <div className="side_bar">
              <div className="all_link">
                <Link className="nav-link active" to="players">
                  <span>
                    <TbCricket className="logo_icon" />
                  </span>
                  Player List
                </Link>
                <br />
                <Link className="nav-link" to="players/create">
                  <span>
                    <AiOutlineAppstoreAdd className="logo_icon" />
                  </span>
                  Player Add
                </Link>
                <br />

                {/* <Link className="nav-link" to="edite">
                  <span>
                    <BiEdit className="logo_icon" />
                  </span>
                  Edite
                </Link> */}

                <Link className="nav-link active" to="coach">
                  <span>
                    <TbCricket className="logo_icon" />
                  </span>
                  Coach List
                </Link>
                <br />
                <Link className="nav-link" to="coach/added">
                  <span>
                    <AiOutlineAppstoreAdd className="logo_icon" />
                  </span>
                  Player Add
                </Link>
              </div>
            </div>
          </nav>

          <div className="col-lg-10  outlet_div">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default LayOutPage;
