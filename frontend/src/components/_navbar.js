import React from "react";
import { Link } from "react-router-dom";
import "./_navbar.css";
import { ACCESS_TOKEN } from "../constants";
function _navbar() {

  // 로그아웃 버튼을 눌렀을시 로컬스토리지에 저장된 엑세스코드 클리어 함수
  // 메인페이지에서 로그아웃버튼을 눌렀을 시에만 새로고침
  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  // 로그인이 돼있는 상태면 로그인버튼/레지스터 버튼 X 로그아웃 버튼 O
  // 로그인이 안돼어 있다면 로그인/레지스터 버튼
  const token = localStorage.getItem(ACCESS_TOKEN);
  return (
    <div className="navbar-wrapper">
      <Link className="logo" to="/">
        <h1 className="logo">
          <img className="logo-img" src="../img/yogalogo.png" />
          Mindfulday
        </h1>
      </Link>

      <ul className="navbar-list">
        <li className="list-links">
          <Link className="list-links" to="/yoga">
            Yoga
          </Link>
        </li>
        <li className="list-links">
          <Link className="list-links" to="/meditate">
            Meditate
          </Link>
        </li>
        {token ? (
          <li className="list-links">
            <Link className="list-links" to="/" onClick={logout}>
              logout
            </Link>
          </li>
        ) : (
          <div className="lgn_reg_btn_add">
            {" "}
            <li className="list-links">
              <Link className="list-links" to="/login">
                Login
              </Link>
            </li>
            <li className="list-links">
              <Link className="list-links" to="/register">
                Register
              </Link>
            </li>{" "}
          </div>
        )}
      </ul>
    </div>
  );
}

export default _navbar;
