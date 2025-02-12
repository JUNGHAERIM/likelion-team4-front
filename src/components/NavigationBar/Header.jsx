import React, { Fragment } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsKeyboardFill } from "react-icons/bs";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
// import logo from "../../../public/logo.png";

export default function Header() {
  return (
    <header id="header">
      <div className="headerLeft">
        <button className="menuStyle">
          <SlMenu />
        </button>
        <Link to="/">
          <img alt="youtube" src={"./logo.png"} width={100} height={20} />
        </Link>
      </div>
      <div className="headerMiddle">
        <div className="searchBar">
          <form className="searchForm">
            <input placeholder="검색" className="searchInput" />
            <BsKeyboardFill />
          </form>
          <button className="searchBtn">
            <FiSearch />
          </button>
        </div>
        <div className="voiceBtn">
          <MdKeyboardVoice />
        </div>
      </div>
      <div className="headerRight">
        <AiOutlineVideoCamera />
        <IoMdNotificationsOutline />
        <div className="profileImage"></div>
      </div>
    </header>
  );
}
