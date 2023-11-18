"use client";
import { useState } from "react";

const MobileNav = () => {
  const [opened, setopened] = useState(false);
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
  const handlenewSideClick = () => {
    setc1opened(false);
    setc2opened(false);
    setc3opened(false);
    setc4opened(false);
    setc5opened(false);
    setc6opened(false);
    setc7opened(false);
  };
  return (
    <nav
      //   onClick={handleOutSideClick}
      className={`xl:hidden bg-[#129104] h-[100vh] w-[70vw] flex flex-col pt-[20vh] pb-5 items-center transition-all duration-500 fixed overflow-y-auto ${
        opened ? "right-0" : "right-[-100%]"
      }`}
    >
      <button
        className={`fixed bottom-5 right-5 p-3 rounded-full lg:hidden ${
          !opened ? "bg-[#129104]" : "bg-[#dcf3da]"
        }`}
        onClick={() => {
          setopened(!opened);
          handlenewSideClick();
        }}
      >
        {opened ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.5rem"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        )}
      </button>
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
              c1opened ? "flex gap-1" : "hidden"
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
              c2opened ? "flex gap-1" : "hidden"
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
              c3opened ? "flex gap-1" : "hidden"
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
              c4opened ? "flex gap-1" : "hidden"
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
              c5opened ? "flex gap-1" : "hidden"
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
              c6opened ? "flex gap-1" : "hidden"
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
              c7opened ? "flex gap-1" : "hidden"
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
