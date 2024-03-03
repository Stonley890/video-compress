"use client";
import Marquee from "react-fast-marquee";

const TrustedBy = () => {
  return (
    <div>
      <p className="text-center font-semibold text-2xl md:text-3xl">
        Trusted by
      </p>
      <Marquee autoFill className="h-28 overflow-hidden">
        <div className="px-4">
          <svg
            className="w-52 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-40.446 -22.19 350.532 133.14"
          >
            <path
              d="M115.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.86 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
              fill="currentColor"
            />
            <path
              d="M163.39 46.71c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"
              fill="currentColor"
            />
            <path
              d="M209.39 25.87v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"
              fill="currentColor"
            />
            <path d="M224.64 2.53v65h-9.5v-65z" fill="currentColor" />
            <path
              d="M261.66 54.01l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"
              fill="currentColor"
            />
            <path
              d="M34.93 40.94v-9.41h31.71c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C15.96 68.88 0 53.42 0 34.44 0 15.46 15.96 0 34.94 0c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div className="mt-3 px-4">
          <svg
            className="w-44 text-gray-400"
            viewBox="163.5 163.50000000000003 285 285"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipRule="evenodd" fillRule="evenodd">
              <path
                d="m340.3 330.2c-16.5 12.2-40.5 18.7-61.2 18.7-29 0-55-10.7-74.8-28.5-1.5-1.4-.2-3.3 1.7-2.2 21.3 12.4 47.6 19.8 74.8 19.8 18.3 0 38.5-3.8 57.1-11.7 2.8-1.1 5.1 1.9 2.4 3.9z"
                fill="currentColor"
              />
              <path
                d="m347.2 322.3c-2.1-2.7-14-1.3-19.3-.6-1.6.2-1.9-1.2-.4-2.2 9.5-6.7 25-4.7 26.8-2.5s-.5 17.8-9.4 25.2c-1.4 1.1-2.7.5-2.1-1 2-5 6.5-16.1 4.4-18.9z"
                fill="currentColor"
              />
              <path
                fill="currentColor"
                d="m328.2 272.5v-6.5c0-1 .7-1.6 1.6-1.6h29c.9 0 1.7.7 1.7 1.6v5.5c0 .9-.8 2.1-2.2 4.1l-15 21.4c5.6-.1 11.5.7 16.5 3.5 1.1.6 1.4 1.6 1.5 2.5v6.9c0 1-1 2.1-2.1 1.5-8.9-4.7-20.8-5.2-30.6.1-1 .5-2.1-.5-2.1-1.5v-6.6c0-1 0-2.8 1.1-4.4l17.4-24.9h-15.1c-.9 0-1.7-.7-1.7-1.6zm-105.7 40.3h-8.8c-.8-.1-1.5-.7-1.6-1.5v-45.2c0-.9.8-1.6 1.7-1.6h8.2c.9 0 1.5.7 1.6 1.5v5.9h.2c2.1-5.7 6.2-8.4 11.6-8.4 5.5 0 9 2.7 11.4 8.4 2.1-5.7 7-8.4 12.2-8.4 3.7 0 7.7 1.5 10.2 5 2.8 3.8 2.2 9.3 2.2 14.2v28.6c0 .9-.8 1.6-1.7 1.6h-8.7c-.9-.1-1.6-.8-1.6-1.6v-24c0-1.9.2-6.7-.2-8.5-.7-3-2.6-3.9-5.2-3.9-2.1 0-4.4 1.4-5.3 3.7s-.8 6.1-.8 8.7v24c0 .9-.8 1.6-1.7 1.6h-8.8c-.9-.1-1.6-.8-1.6-1.6v-24c0-5 .8-12.5-5.4-12.5-6.3 0-6.1 7.2-6.1 12.5v24c-.1.8-.8 1.5-1.8 1.5zm163-49.3c13.1 0 20.2 11.2 20.2 25.5 0 13.8-7.8 24.8-20.2 24.8-12.8 0-19.8-11.2-19.8-25.2-.1-14.1 7-25.1 19.8-25.1zm0 9.3c-6.5 0-6.9 8.9-6.9 14.4s-.1 17.3 6.8 17.3c6.8 0 7.2-9.5 7.2-15.3 0-3.8-.2-8.4-1.3-12-1-3.2-3-4.4-5.8-4.4zm37.1 40h-8.8c-.9-.1-1.6-.8-1.6-1.6v-45.3c.1-.8.8-1.5 1.7-1.5h8.2c.8 0 1.4.6 1.6 1.3v6.9h.2c2.5-6.2 5.9-9.1 12-9.1 3.9 0 7.8 1.4 10.3 5.3 2.3 3.6 2.3 9.7 2.3 14.1v28.5c-.1.8-.8 1.4-1.7 1.4h-8.8c-.8-.1-1.5-.7-1.6-1.4v-24.6c0-5 .6-12.2-5.5-12.2-2.1 0-4.1 1.4-5.1 3.6-1.2 2.8-1.4 5.5-1.4 8.6v24.4c-.1.9-.9 1.6-1.8 1.6zm-117.5-21.6c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.9 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8zm-124.4-21.5c0 3.4.1 6.3-1.6 9.4-1.4 2.5-3.6 4-6.1 4-3.4 0-5.4-2.6-5.4-6.4 0-7.5 6.7-8.9 13.1-8.9zm8.8 21.5c-.6.5-1.4.6-2.1.2-2.9-2.4-3.5-3.6-5.1-5.9-4.8 4.9-8.3 6.4-14.5 6.4-7.4 0-13.2-4.6-13.2-13.7 0-7.2 3.9-12 9.4-14.4 4.8-2.1 11.5-2.5 16.6-3.1v-1.1c0-2.1.2-4.6-1.1-6.4-1.1-1.6-3.1-2.3-4.9-2.3-3.4 0-6.4 1.7-7.1 5.3-.2.8-.7 1.6-1.5 1.6l-8.5-.9c-.7-.2-1.5-.7-1.3-1.8 2-10.4 11.3-13.5 19.7-13.5 4.3 0 9.9 1.1 13.3 4.4 4.3 4 3.9 9.4 3.9 15.2v13.7c0 4.1 1.7 5.9 3.3 8.2.6.8.7 1.8 0 2.3-1.9 1.5-5.1 4.3-6.9 5.8z"
              />
            </g>
          </svg>
        </div>
        <div className="flex items-center px-4">
          <svg
            viewBox="0 0 24 24"
            className="w-16 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H11.5V11.5H4V4ZM12.5 4H20V11.5H12.5V4ZM4 12.5H11.5V20H4V12.5ZM12.5 12.5H20V20H12.5V12.5Z"
              fill="currentColor"
            />
          </svg>
          <p className="text-4xl font-semibold text-gray-400">Microsoft</p>
        </div>
        <div className="pl-5 mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-44 text-gray-400"
            viewBox="0 0 192.756 192.756"
          >
            <path
              d="M78.445 105.738l-2.4 11.158h-5.52l9.12-40.438h6.539l8.58 40.438h-5.58l-2.34-11.158h-8.399zm7.739-4.5l-1.86-9.661c-.54-2.76-1.08-6.358-1.499-9.239h-.241c-.419 2.94-1.021 6.659-1.559 9.239l-1.92 9.661h7.079zM115.834 75.379v34.018c0 2.221.12 5.461.239 7.5h-4.859l-.36-3.539h-.18c-.96 2.039-3.18 4.02-6.119 4.02-5.4 0-8.7-5.881-8.7-14.939 0-10.32 4.379-15.18 9-15.18 2.339 0 4.199 1.081 5.219 3.3h.12v-15.18h5.64zm-5.641 23.459c0-.539 0-1.199-.06-1.801-.3-2.639-1.8-4.919-3.839-4.919-3.541 0-4.74 4.919-4.74 10.32 0 6 1.56 10.199 4.56 10.199 1.26 0 2.939-.66 3.899-4.139.12-.48.18-1.201.18-1.859v-7.801zM129.268 117.377c-5.819 0-10.02-4.98-10.02-14.998 0-10.621 4.979-15.121 10.319-15.121 5.76 0 9.899 5.16 9.899 15 0 11.58-5.7 15.119-10.139 15.119h-.059zm.179-4.439c3.479 0 4.26-6.18 4.26-10.619 0-4.381-.78-10.62-4.379-10.62-3.721 0-4.44 6.239-4.44 10.62 0 4.859.84 10.619 4.5 10.619h.059zM142.866 75.379h5.639v15.659h.12c1.5-2.639 3.54-3.78 6.12-3.78 4.979 0 8.1 5.64 8.1 14.58 0 10.439-4.26 15.539-9.06 15.539-2.88 0-4.5-1.561-5.761-4.141h-.238l-.301 3.66h-4.859c.12-1.979.24-5.279.24-7.5V75.379zm5.639 31.197c0 .662.06 1.322.24 1.801.899 3.541 2.64 4.26 3.779 4.26 3.36 0 4.62-4.439 4.62-10.439 0-5.58-1.319-10.08-4.68-10.08-1.86 0-3.36 2.22-3.78 4.32-.12.6-.18 1.381-.18 1.98v8.158h.001zM171.167 103.457c.06 7.5 3.299 9.359 6.719 9.359 2.04 0 3.78-.479 5.04-1.08l.84 4.08c-1.74.9-4.38 1.381-6.96 1.381-7.319 0-11.159-5.52-11.159-14.52 0-9.54 4.379-15.42 10.439-15.42 6.06 0 8.88 5.82 8.88 13.141 0 1.439-.061 2.34-.12 3.119l-13.679-.06zm8.459-4.019c.06-5.16-1.74-7.919-3.959-7.919-2.941 0-4.261 4.26-4.44 7.919h8.399z"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
              d="M38.741 76.566h16.847v40.33l-16.847-40.33zM26.873 76.566H10.014v40.33l16.859-40.33zM32.808 91.429l10.734 25.467h-7.034l-3.21-8.111h-7.857l7.367-17.356z"
            />
            <path
              d="M184.487 87.183a1.28 1.28 0 0 1 1.274 1.297c0 .732-.565 1.303-1.28 1.303-.709 0-1.286-.57-1.286-1.303a1.29 1.29 0 0 1 1.286-1.297h.006zm-.006.201c-.57 0-1.038.491-1.038 1.096 0 .617.468 1.101 1.044 1.101.576.006 1.037-.484 1.037-1.095s-.461-1.102-1.037-1.102h-.006zm-.242 1.852h-.23v-1.448c.121-.017.237-.035.41-.035.219 0 .362.047.449.11.087.063.133.161.133.3 0 .19-.127.306-.283.352v.011c.127.023.214.139.242.352.035.225.069.311.093.358h-.242c-.035-.047-.069-.179-.098-.369-.035-.185-.127-.254-.312-.254h-.161v.623h-.001zm0-.802h.167c.19 0 .353-.069.353-.248 0-.127-.093-.254-.353-.254-.074 0-.127.006-.167.012v.49zM57.809 76.566a1.28 1.28 0 0 1 1.274 1.297c0 .732-.565 1.303-1.28 1.303-.709 0-1.286-.57-1.286-1.303a1.29 1.29 0 0 1 1.286-1.297h.006zm-.006.201c-.571 0-1.038.491-1.038 1.096 0 .617.467 1.101 1.044 1.101.576.006 1.038-.484 1.038-1.095s-.462-1.102-1.038-1.102h-.006zm-.242 1.852h-.231v-1.448a2.52 2.52 0 0 1 .41-.034c.219 0 .363.045.449.109.087.063.133.162.133.3 0 .19-.127.306-.283.352v.011c.127.023.214.139.243.353.034.225.069.311.092.358h-.242c-.035-.047-.07-.179-.098-.369-.035-.185-.127-.254-.312-.254h-.161v.622zm0-.802h.167c.19 0 .352-.069.352-.248 0-.127-.092-.254-.352-.254-.075 0-.127.006-.167.012v.49z"
              fillRule="evenodd"
              clipRule="evenodd"
              fill="currentColor"
            />
          </svg>
        </div>
      </Marquee>
    </div>
  );
};

export default TrustedBy;
