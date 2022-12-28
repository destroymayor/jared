type IconProps = {
  className?: string;
};

export const CSSIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 124 141.53">
    <path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" />
    <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
    <path
      d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
      fill="#fff"
    />
  </svg>
);

export const CommandIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path d="M6.023 7.296v5.419H3.648C1.644 12.715 0 14.316 0 16.342 0 18.355 1.644 20 3.648 20a3.657 3.657 0 003.648-3.659v-2.375h5.397v2.376A3.657 3.657 0 0016.343 20c2.004 0 3.647-1.644 3.647-3.659 0-2.025-1.643-3.626-3.648-3.626h-2.375v-5.42h2.376c2.004 0 3.647-1.611 3.647-3.626C19.99 1.644 18.346 0 16.341 0c-2.014 0-3.648 1.644-3.648 3.67v2.364H7.296V3.669C7.296 1.644 5.663 0 3.648 0 1.644 0 0 1.644 0 3.67c0 2.014 1.644 3.626 3.648 3.626h2.375zm-2.375-1.24c-1.294 0-2.375-1.083-2.375-2.387 0-1.315 1.081-2.396 2.375-2.396 1.304 0 2.375 1.081 2.375 2.396v2.386H3.648zm12.694 0h-2.376V3.668c0-1.315 1.071-2.396 2.376-2.396 1.293 0 2.375 1.081 2.375 2.396 0 1.304-1.082 2.386-2.375 2.386zm-9.046 6.67V7.274h5.397v5.45H7.296zm-3.648 1.219h2.375v2.386a2.387 2.387 0 01-2.375 2.386 2.394 2.394 0 01-2.375-2.386 2.394 2.394 0 012.375-2.386zm12.694 0a2.394 2.394 0 012.375 2.386 2.394 2.394 0 01-2.375 2.386 2.387 2.387 0 01-2.376-2.386v-2.386h2.376z"></path>
  </svg>
);

export const GithubIcon = (props: IconProps) => (
  <svg {...props} stroke="currentColor" fill="currentColor" viewBox="0 0 496 512">
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
  </svg>
);

export const GitIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 16 16">
    <path
      fill="currentColor"
      d="M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"
    ></path>
  </svg>
);

export const JavaScriptIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 1052 1052">
    <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
    <path
      d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
      fill="#323330"
    />
  </svg>
);

export const JavaScriptWhiteIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M0 0h24v24H0V0Zm18.347 20.12c-1.113 0-1.742-.58-2.225-1.37l-1.833 1.065c.662 1.308 2.015 2.306 4.11 2.306c2.142 0 3.737-1.112 3.737-3.143c0-1.883-1.082-2.72-2.998-3.543l-.564-.241c-.968-.42-1.387-.693-1.387-1.37c0-.547.42-.966 1.08-.966c.647 0 1.064.273 1.451.966l1.756-1.127c-.743-1.307-1.773-1.806-3.207-1.806c-2.014 0-3.303 1.288-3.303 2.98c0 1.835 1.08 2.704 2.708 3.397l.564.242c1.029.45 1.642.724 1.642 1.497c0 .646-.597 1.113-1.531 1.113Zm-8.74-.015c-.775 0-1.098-.53-1.452-1.16l-1.836 1.112c.532 1.126 1.578 2.06 3.383 2.06c1.999 0 3.368-1.063 3.368-3.398v-7.7h-2.255v7.67c0 1.127-.468 1.416-1.209 1.416Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const ReactIcon = (props: IconProps) => (
  <svg {...props} viewBox="175.7 78 490.6 436.9">
    <g fill="#61dafb">
      <path d="m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z" />
      <circle cx="420.9" cy="296.5" r="45.7" />
    </g>
  </svg>
);

export const ReactWhiteIcon = (props: IconProps) => (
  <svg {...props} role="img" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M410.66 180.72q-7.67-2.62-15.45-4.88q1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83c-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11q-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69c-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07q-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49c25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25q6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93c25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86q4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78c-.02-29-33.52-57.01-85.36-74.9Zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39c16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16a481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89q7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63c13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78q10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32a434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48Zm13.72-73.07q-6.64-12.65-13.81-25q-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39Zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18ZM145.66 65.86c16.06-9.32 51.57 4 89 37.27c2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83Zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81c-11.88-10.19-17.9-20.36-17.9-28.6c0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75a502.46 502.46 0 0 0-23.69 61.58Zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72c-14.78 5.23-26.55 5.38-33.66 1.27c-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39a501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74Zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86c-15.13 8.78-47.48-2.63-82.36-32.72c-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2a477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47Zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94a481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52c44.42 15.32 71.52 38 71.52 55.43c0 18.6-29.27 42.74-76.78 58.52Z"
    ></path>
    <path
      fill="currentColor"
      d="M256 298.55a43 43 0 1 0-42.86-43a42.91 42.91 0 0 0 42.86 43Z"
    ></path>
  </svg>
);

export const NextJSIcon = (props: IconProps) => (
  <svg {...props} role="img" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M29.874 13.964A14.058 14.058 0 0 0 20.3 2.653a14.74 14.74 0 0 0-2.915-.61c-.263-.027-2.072-.057-2.3-.035c-.06 0-.252.024-.424.038A14.034 14.034 0 0 0 4.6 7.848a13.855 13.855 0 0 0-2.471 6.116A10.731 10.731 0 0 0 2 16a10.737 10.737 0 0 0 .126 2.039A14.055 14.055 0 0 0 11.7 29.352a14.772 14.772 0 0 0 2.956.613a25.525 25.525 0 0 0 2.682 0a14.139 14.139 0 0 0 5.045-1.475c.24-.123.287-.156.254-.183s-1.048-1.393-2.28-3.057l-2.239-3.024l-2.8-4.152c-1.544-2.282-2.814-4.148-2.825-4.148s-.022 1.841-.027 4.094a32.213 32.213 0 0 1-.06 4.2a.5.5 0 0 1-.241.249c-.088.044-.165.052-.578.052h-.473l-.126-.079a.517.517 0 0 1-.184-.2l-.057-.123l.005-5.487l.009-5.49l.084-.107a.768.768 0 0 1 .2-.167c.112-.054.156-.06.629-.06c.559 0 .652.022.8.181c.041.044 1.56 2.331 3.377 5.087s4.3 6.519 5.524 8.366L23.59 27.8l.112-.074a14.357 14.357 0 0 0 2.877-2.526a13.932 13.932 0 0 0 3.295-7.156A10.737 10.737 0 0 0 30 16a10.731 10.731 0 0 0-.126-2.036Zm-8.761 1.855l-.008 4.921l-.868-1.33l-.87-1.33V14.5c0-2.312.011-3.612.027-3.675a.558.558 0 0 1 .271-.345c.112-.058.153-.063.583-.063c.4 0 .476.005.566.055a.546.546 0 0 1 .277.323c.022.074.027 1.595.022 5.024Z"
    ></path>
  </svg>
);

export const SpotifyIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 168 168">
    <path
      fill="#1ED760"
      d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"
    ></path>
  </svg>
);

export const SpotifySolidIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 168 168" fill="currentColor">
    <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"></path>
  </svg>
);

export const StyledComponentsIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M128.392 245.844c-2 25.182 20.123 43.73 35.221 43.73c15.119-.705 74.002-50.326 74.002-50.326c27.694-35.025 27.814-50.599 27.814-62.84c-2.31-54.043-100.77 28.27-137.037 69.436zm243.565-20.918c13.365-28.286-4.616-59.703-43.728-32.108c-31.08 19.754-71.317 60.392-90.574 76.3c-8.932 18.041 13.71 67.551 49.59 41.41c42.41-30.812 73.38-59.785 84.712-85.602zm36.4-171.112L416.97 0H512v98.234l-34.827.416l-41.935 142.034c2.61 50.128-22.81 50.944-26.057 73.945c-8.161 57.81-72.81 105.112-97.527 105.112c-16.485-.478-28.536-19.372-32.584-35.836c46.48-51.41 108.984-91.811 108.984-91.811c3.903-27.037-4.675-35.645 24.173-58.684l27.528-144.738c-23.51-15.525-34.48-15.284-31.398-34.858zm-185.487 239.7c24.102 48.564 58.927 49.83 112.92-11.999c1.283 5.716 2.688 11.705.11 26.085C226.064 405.839 122.614 501.45 91.125 512H0v-24.44c14.82-20.552 136.448-120.871 222.87-194.046zm162.328 94.03c-4.945 42.036-43.27 78.82-94.482 124.456H128.412L265.24 396.745c23.62 53.755 65.574 45.968 119.959-9.201zM193.26 292.13L0 456.854v-106.87L113.73 257.4c6.084 34.461 43.355 64.806 79.53 34.732z"
    ></path>
  </svg>
);

export const VSCodeIcon = (props: IconProps) => (
  <svg {...props} viewBox="-11.9 -2 1003.9 995.6">
    <path
      d="m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
      fill="#2489ca"
    />
    <path
      d="m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
      fill="#1070b3"
    />
    <path d="m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z" fill="#0877b9" />
    <path
      d="m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
      fill="#3c99d4"
    />
  </svg>
);

export const ITermIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 1024 1024" fill="none">
    <g filter="url(#filter0_d)">
      <rect x="100" y="100" width="824" height="824" rx="179" fill="url(#paint0_linear)" />
    </g>
    <rect x="121.788" y="121.789" width="780.423" height="780.423" rx="156" fill="black" />
    <rect x="183.192" y="183.192" width="657.615" height="657.615" rx="94" fill="#202A2F" />
    <rect
      x="367.404"
      y="226.769"
      width="89.1346"
      height="178.269"
      fill="#0EE827"
      fillOpacity="0.35"
    />
    <path
      d="M274.468 374.622C269.807 374.227 265.438 373.568 261.36 372.645C257.427 371.59 253.786 370.47 250.436 369.284C247.232 368.097 244.392 366.977 241.916 365.922C239.586 364.736 237.838 363.813 236.673 363.154L246.067 345.754C247.086 346.413 248.834 347.335 251.31 348.522C253.786 349.708 256.553 350.96 259.612 352.279C262.816 353.465 266.093 354.52 269.443 355.442C272.793 356.365 275.924 356.827 278.837 356.827C293.402 356.827 300.684 351.356 300.684 340.415C300.684 337.778 300.174 335.603 299.154 333.89C298.281 332.176 296.897 330.726 295.004 329.54C293.256 328.221 291.071 327.101 288.45 326.178C285.974 325.124 283.134 324.069 279.929 323.015C273.812 320.905 268.351 318.73 263.544 316.489C258.884 314.117 254.878 311.48 251.529 308.58C248.179 305.68 245.63 302.385 243.882 298.694C242.135 295.003 241.261 290.784 241.261 286.039C241.261 282.348 242.062 278.789 243.664 275.361C245.266 271.934 247.523 268.902 250.436 266.266C253.349 263.498 256.845 261.191 260.923 259.345C265.001 257.368 269.516 255.984 274.468 255.193V226.769H292.382V254.797C296.169 255.193 299.81 255.786 303.305 256.577C306.801 257.368 309.932 258.225 312.699 259.147C315.467 260.07 317.797 260.993 319.69 261.916C321.729 262.707 323.186 263.3 324.06 263.695L315.321 279.909C314.156 279.382 312.481 278.723 310.296 277.932C308.257 277.009 305.927 276.086 303.305 275.164C300.684 274.241 297.844 273.45 294.785 272.791C291.727 272.132 288.668 271.802 285.61 271.802C280.658 271.802 276.215 272.725 272.283 274.57C268.496 276.284 266.603 279.25 266.603 283.468C266.603 286.105 267.113 288.478 268.132 290.587C269.297 292.564 270.899 294.344 272.938 295.925C275.123 297.507 277.745 299.023 280.803 300.473C284.007 301.791 287.649 303.11 291.727 304.428C297.115 306.405 301.922 308.448 306.145 310.558C310.369 312.667 313.937 315.039 316.85 317.676C319.763 320.312 321.948 323.344 323.404 326.771C325.006 330.199 325.807 334.219 325.807 338.833C325.807 342.788 325.079 346.61 323.623 350.301C322.312 353.992 320.2 357.42 317.287 360.583C314.52 363.747 311.025 366.515 306.801 368.888C302.723 371.129 297.916 372.777 292.382 373.831V403.058H274.468V374.622Z"
      fill="#0EE827"
    />
    <defs>
      <filter
        id="filter0_d"
        x="78"
        y="86"
        width="868"
        height="868"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="10" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="512"
        y1="100"
        x2="512"
        y2="924"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#D4E6E8" />
        <stop offset="1" stopColor="#767573" />
      </linearGradient>
    </defs>
  </svg>
);

export const FigIcon = (props: IconProps) => (
  <svg
    {...props}
    className={`${props.className} rounded-md bg-white`}
    viewBox="0 0 400.000000 400.000000"
  >
    <g
      transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
      fill="#000000"
      stroke="none"
    >
      <path
        d="M1006 3394 c-140 -34 -288 -147 -353 -270 -66 -125 -63 -70 -63
          -1124 0 -850 2 -962 16 -1011 50 -167 168 -295 339 -365 l70 -29 952 -3 c1052
          -3 1023 -4 1147 60 79 42 192 155 234 234 63 121 62 95 62 1114 0 1020 1 994
          -63 1114 -63 119 -171 213 -305 265 l-67 26 -955 2 c-799 1 -965 -1 -1014 -13z
          m1869 -303 c83 -33 182 -133 216 -216 l24 -60 3 -794 c2 -693 1 -801 -13 -854
          -29 -112 -107 -206 -214 -256 l-56 -26 -280 0 -280 0 -60 32 c-80 42 -141 104
          -179 183 l-31 65 0 835 0 835 28 56 c37 76 94 139 158 174 90 49 132 54 389
          52 221 -3 239 -4 295 -26z"
      />
    </g>
  </svg>
);

export const WakaTimeIcon = (props: IconProps) => (
  <svg
    {...props}
    className={`${props.className} stroke-zinc-700 dark:stroke-zinc-300`}
    viewBox="0 0 340 340"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M170 20C87.156 20 20 87.156 20 170C20 252.844 87.156 320 170 320C252.844 320 320 252.844 320 170C320 87.156 252.844 20 170 20V20V20Z"
      strokeWidth="40"
    />
    <path
      d="M190.183 213.541C188.74 215.443 186.576 216.667 184.151 216.667C183.913 216.667 183.677 216.651 183.443 216.627C183.042 216.579 182.823 216.545 182.606 216.497C182.337 216.434 182.137 216.375 181.94 216.308C181.561 216.176 181.392 216.109 181.228 216.035C180.843 215.849 180.707 215.778 180.572 215.701C180.205 215.478 180.109 215.412 180.014 215.345C179.856 215.233 179.698 215.117 179.547 214.992C179.251 214.746 179.147 214.65 179.044 214.552C178.731 214.241 178.531 214.018 178.341 213.785C177.982 213.331 177.69 212.888 177.438 212.415L168.6 198.214L159.766 212.415C158.38 214.939 155.874 216.667 152.995 216.667C150.106 216.667 147.588 214.926 146.243 212.346L107.607 156.061C106.337 154.529 105.556 152.499 105.556 150.258C105.556 145.514 109.043 141.665 113.344 141.665C116.127 141.665 118.564 143.282 119.942 145.708L152.555 193.9L161.735 178.952C163.058 176.288 165.626 174.478 168.575 174.478C171.273 174.478 173.652 175.996 175.049 178.298L184.517 193.839L235.684 120.583C237.075 118.226 239.475 116.667 242.213 116.667C246.514 116.667 250 120.514 250 125.258C250 127.332 249.337 129.232 248.23 130.715L190.183 213.541Z"
      className="fill-black dark:fill-zinc-50"
      strokeWidth="10"
    />
  </svg>
);

export const UnsplashIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z"
      className="fill-black dark:fill-zinc-50"
    />
  </svg>
);

export const TailwindCSSIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      fill="currentColor"
      d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624c1.177 1.194 2.538 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"
    ></path>
  </svg>
);

export const TypeScriptIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M0 16v16h32V0H0zm25.786-1.276a4.023 4.023 0 0 1 2.005 1.156c.292.312.729.885.766 1.026c.01.042-1.38.974-2.224 1.495c-.031.021-.156-.109-.292-.313c-.411-.599-.844-.859-1.505-.906c-.969-.063-1.594.443-1.589 1.292a1.26 1.26 0 0 0 .135.599c.214.443.615.708 1.854 1.245c2.292.984 3.271 1.635 3.88 2.557c.682 1.031.833 2.677.375 3.906c-.51 1.328-1.771 2.234-3.542 2.531c-.547.099-1.849.083-2.438-.026c-1.286-.229-2.505-.865-3.255-1.698c-.297-.323-.87-1.172-.833-1.229c.016-.021.146-.104.292-.188l1.188-.688l.922-.536l.193.286c.271.411.859.974 1.214 1.161c1.021.542 2.422.464 3.115-.156c.281-.234.438-.594.417-.958c0-.37-.047-.536-.24-.813c-.25-.354-.755-.656-2.198-1.281c-1.651-.714-2.365-1.151-3.01-1.854a4.236 4.236 0 0 1-.88-1.599c-.12-.453-.151-1.589-.057-2.042c.339-1.599 1.547-2.708 3.281-3.036c.563-.109 1.875-.068 2.427.068zm-7.51 1.339l.01 1.307h-4.167v11.839h-2.948V17.37H7.01v-1.281c0-.714.016-1.307.036-1.323c.016-.021 2.547-.031 5.62-.026l5.594.016z"
    ></path>
  </svg>
);
