"use client";
import { useState } from "react";

const MobileNav = () => {
  const [opened, setopened] = useState(true);
  const [c1opened, setc1opened] = useState(false);
  const [c2opened, setc2opened] = useState(false);
  const [c3opened, setc3opened] = useState(false);
  const [c4opened, setc4opened] = useState(false);
  const [c5opened, setc5opened] = useState(false);
  const [c6opened, setc6opened] = useState(false);
  const [c7opened, setc7opened] = useState(false);
  const handleNav = () => {
    setopened(!opened);
  };
  const handleOutSideClick = () => {
    setc1opened(false);
  };
  return (
    <nav
      //   onClick={handleOutSideClick}
      className={`lg:hidden bg-[#129104] h-[100vh] w-[70vw] flex flex-col pt-[20vh] pb-5 items-center transition-all duration-500 fixed overflow-y-auto ${
        opened ? "right-0" : "right-[-100%]"
      }`}
    >
      <ul className="flex flex-col gap-4 font-semibold text-xl">
        <li>Home</li>
        <a href="#" onClick={handleNav}>
          Extended Profile
        </a>
        <li
          onClick={() => {
            setc1opened(!c1opened);
          }}
        >
          Criterion - 1
          <div
            className={`${
              c1opened ? "flex" : "hidden"
            } flex flex-col pl-10 py-2 bg-[#129104]`}
          >
            <a href="/criterion1/1.1" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="/criterion1/1.2" onClick={handleNav}>
              Criterion - 1.2
            </a>
            <a href="/criterion1/1.3" onClick={handleNav}>
              Criterion - 1.3
            </a>
            <a href="/criterion1/1.4" onClick={handleNav}>
              Criterion - 1.4
            </a>
          </div>
        </li>

        <li
          onClick={() => {
            setc2opened(!c2opened);
          }}
        >
          Criterion - 2
          <div
            className={`${
              c2opened ? "flex" : "hidden"
            } flex flex-col pl-10 py-2 bg-[#129104]`}
          >
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
          </div>
        </li>
        <li
          onClick={() => {
            setc3opened(!c3opened);
          }}
        >
          Criterion - 3
          <div
            className={`${
              c3opened ? "flex" : "hidden"
            } flex flex-col pl-10 py-2 bg-[#129104]`}
          >
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
          </div>
        </li>
        <li
          onClick={() => {
            setc4opened(!c4opened);
          }}
        >
          Criterion - 4
          <div
            className={`${
              c4opened ? "flex" : "hidden"
            } flex flex-col pl-10 py-2 bg-[#129104]`}
          >
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
          </div>
        </li>
        <li
          onClick={() => {
            setc5opened(!c5opened);
          }}
        >
          Criterion - 5
          <div
            className={`${
              c5opened ? "flex" : "hidden"
            } flex flex-col pl-10 py-2 bg-[#129104]`}
          >
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
          </div>
        </li>
        <li
          onClick={() => {
            setc6opened(!c6opened);
          }}
        >
          Criterion - 6
          <div
            className={`${
              c6opened ? "flex" : "hidden"
            } flex flex-col pl-10 py-2 bg-[#129104]`}
          >
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
          </div>
        </li>
        <li
          onClick={() => {
            setc7opened(!c7opened);
          }}
        >
          Criterion - 7
          <div
            className={`${
              c7opened ? "flex" : "hidden"
            } flex flex-col pl-10 py-2 bg-[#129104]`}
          >
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
            <a href="#" onClick={handleNav}>
              Criterion - 1.1
            </a>
          </div>
        </li>
        <li>Feedback</li>
      </ul>
    </nav>
  );
};

export default MobileNav;
