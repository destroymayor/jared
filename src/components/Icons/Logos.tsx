type IconProps = {
  className?: string
}

export const CSSIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 124 141.53">
    <path d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z" fill="#1b73ba" />
    <path d="M62.468 129.275V12.085l51.064.17-9.106 104.85z" fill="#1c88c7" />
    <path
      d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
      fill="#fff"
    />
  </svg>
)

export const CommandIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 20 20" fill="currentColor">
    <path d="M6.023 7.296v5.419H3.648C1.644 12.715 0 14.316 0 16.342 0 18.355 1.644 20 3.648 20a3.657 3.657 0 003.648-3.659v-2.375h5.397v2.376A3.657 3.657 0 0016.343 20c2.004 0 3.647-1.644 3.647-3.659 0-2.025-1.643-3.626-3.648-3.626h-2.375v-5.42h2.376c2.004 0 3.647-1.611 3.647-3.626C19.99 1.644 18.346 0 16.341 0c-2.014 0-3.648 1.644-3.648 3.67v2.364H7.296V3.669C7.296 1.644 5.663 0 3.648 0 1.644 0 0 1.644 0 3.67c0 2.014 1.644 3.626 3.648 3.626h2.375zm-2.375-1.24c-1.294 0-2.375-1.083-2.375-2.387 0-1.315 1.081-2.396 2.375-2.396 1.304 0 2.375 1.081 2.375 2.396v2.386H3.648zm12.694 0h-2.376V3.668c0-1.315 1.071-2.396 2.376-2.396 1.293 0 2.375 1.081 2.375 2.396 0 1.304-1.082 2.386-2.375 2.386zm-9.046 6.67V7.274h5.397v5.45H7.296zm-3.648 1.219h2.375v2.386a2.387 2.387 0 01-2.375 2.386 2.394 2.394 0 01-2.375-2.386 2.394 2.394 0 012.375-2.386zm12.694 0a2.394 2.394 0 012.375 2.386 2.394 2.394 0 01-2.375 2.386 2.387 2.387 0 01-2.376-2.386v-2.386h2.376z"></path>
  </svg>
)

export const GitIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 16 16">
    <path
      fill="currentColor"
      d="M15.698 7.287L8.712.302a1.03 1.03 0 0 0-1.457 0l-1.45 1.45l1.84 1.84a1.223 1.223 0 0 1 1.55 1.56l1.773 1.774a1.224 1.224 0 0 1 1.267 2.025a1.226 1.226 0 0 1-2.002-1.334L8.58 5.963v4.353a1.226 1.226 0 1 1-1.008-.036V5.887a1.226 1.226 0 0 1-.666-1.608L5.093 2.465l-4.79 4.79a1.03 1.03 0 0 0 0 1.457l6.986 6.986a1.03 1.03 0 0 0 1.457 0l6.953-6.953a1.031 1.031 0 0 0 0-1.457"
    ></path>
  </svg>
)

export const JavaScriptIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 1052 1052">
    <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
    <path
      d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
      fill="#323330"
    />
  </svg>
)

export const ReactWhiteIcon = (props: IconProps) => (
  <svg {...props} role="img" viewBox="0 0 512 512">
    <path
      fill="currentColor"
      d="M410.66 180.72q-7.67-2.62-15.45-4.88q1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83c-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11q-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69c-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07q-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49c25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25q6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93c25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86q4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78c-.02-29-33.52-57.01-85.36-74.9Zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39c16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16a481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89q7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63c13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78q10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32a434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48Zm13.72-73.07q-6.64-12.65-13.81-25q-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39Zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18ZM145.66 65.86c16.06-9.32 51.57 4 89 37.27c2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83Zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81c-11.88-10.19-17.9-20.36-17.9-28.6c0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75a502.46 502.46 0 0 0-23.69 61.58Zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72c-14.78 5.23-26.55 5.38-33.66 1.27c-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39a501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74Zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86c-15.13 8.78-47.48-2.63-82.36-32.72c-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2a477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47Zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94a481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52c44.42 15.32 71.52 38 71.52 55.43c0 18.6-29.27 42.74-76.78 58.52Z"
    ></path>
    <path fill="currentColor" d="M256 298.55a43 43 0 1 0-42.86-43a42.91 42.91 0 0 0 42.86 43Z"></path>
  </svg>
)

export const NextJSIcon = (props: IconProps) => (
  <svg {...props} role="img" viewBox="0 0 32 32">
    <path
      fill="currentColor"
      d="M29.874 13.964A14.058 14.058 0 0 0 20.3 2.653a14.74 14.74 0 0 0-2.915-.61c-.263-.027-2.072-.057-2.3-.035c-.06 0-.252.024-.424.038A14.034 14.034 0 0 0 4.6 7.848a13.855 13.855 0 0 0-2.471 6.116A10.731 10.731 0 0 0 2 16a10.737 10.737 0 0 0 .126 2.039A14.055 14.055 0 0 0 11.7 29.352a14.772 14.772 0 0 0 2.956.613a25.525 25.525 0 0 0 2.682 0a14.139 14.139 0 0 0 5.045-1.475c.24-.123.287-.156.254-.183s-1.048-1.393-2.28-3.057l-2.239-3.024l-2.8-4.152c-1.544-2.282-2.814-4.148-2.825-4.148s-.022 1.841-.027 4.094a32.213 32.213 0 0 1-.06 4.2a.5.5 0 0 1-.241.249c-.088.044-.165.052-.578.052h-.473l-.126-.079a.517.517 0 0 1-.184-.2l-.057-.123l.005-5.487l.009-5.49l.084-.107a.768.768 0 0 1 .2-.167c.112-.054.156-.06.629-.06c.559 0 .652.022.8.181c.041.044 1.56 2.331 3.377 5.087s4.3 6.519 5.524 8.366L23.59 27.8l.112-.074a14.357 14.357 0 0 0 2.877-2.526a13.932 13.932 0 0 0 3.295-7.156A10.737 10.737 0 0 0 30 16a10.731 10.731 0 0 0-.126-2.036Zm-8.761 1.855l-.008 4.921l-.868-1.33l-.87-1.33V14.5c0-2.312.011-3.612.027-3.675a.558.558 0 0 1 .271-.345c.112-.058.153-.063.583-.063c.4 0 .476.005.566.055a.546.546 0 0 1 .277.323c.022.074.027 1.595.022 5.024Z"
    ></path>
  </svg>
)

export const SpotifySolidIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 168 168" fill="currentColor">
    <path d="M83.996.277C37.747.277.253 37.77.253 84.019c0 46.251 37.494 83.741 83.743 83.741 46.254 0 83.744-37.49 83.744-83.741 0-46.246-37.49-83.738-83.745-83.738l.001-.004zm38.404 120.78a5.217 5.217 0 01-7.18 1.73c-19.662-12.01-44.414-14.73-73.564-8.07a5.222 5.222 0 01-6.249-3.93 5.213 5.213 0 013.926-6.25c31.9-7.291 59.263-4.15 81.337 9.34 2.46 1.51 3.24 4.72 1.73 7.18zm10.25-22.805c-1.89 3.075-5.91 4.045-8.98 2.155-22.51-13.839-56.823-17.846-83.448-9.764-3.453 1.043-7.1-.903-8.148-4.35a6.538 6.538 0 014.354-8.143c30.413-9.228 68.222-4.758 94.072 11.127 3.07 1.89 4.04 5.91 2.15 8.976v-.001zm.88-23.744c-26.99-16.031-71.52-17.505-97.289-9.684-4.138 1.255-8.514-1.081-9.768-5.219a7.835 7.835 0 015.221-9.771c29.581-8.98 78.756-7.245 109.83 11.202a7.823 7.823 0 012.74 10.733c-2.2 3.722-7.02 4.949-10.73 2.739z"></path>
  </svg>
)

export const UnsplashIcon = (props: IconProps) => (
  <svg {...props} viewBox="0 0 24 24">
    <path d="M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z" className="fill-black dark:fill-zinc-50" />
  </svg>
)

export const XIcon = () => (
  <svg viewBox="0 0 24 24">
    <g>
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        className="fill-white"
      ></path>
    </g>
  </svg>
)
