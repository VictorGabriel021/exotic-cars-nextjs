import * as React from "react";

import { SVGProps } from "react";

const ScrollTopSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" height={100} width={100} viewBox="0 0 118 118" {...props}>
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={118}
        height={118}
        filterUnits="userSpaceOnUse"
      >
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={7.5} result="b" />
        <feFlood floodOpacity={0.149} />
        <feComposite operator="in" in2="b" />
        <feComposite in="SourceGraphic" />
      </filter>
    </defs>
    <g
      style={{
        filter: "url(#a)",
      }}
    >
      <circle
        cx={36.5}
        cy={36.5}
        r={36.5}
        transform="translate(22.5 14.5)"
        style={{
          fill: "#e6d3f1",
          color: '#000',
          backgroundColor: '#000'
        }}
      />
    </g>
    <path
      d="M23.539 42.288a2.663 2.663 0 0 1-2.077-.985L8.6 25.323a2.663 2.663 0 0 1 0-3.382l13.315-15.98a2.667 2.667 0 0 1 4.1 3.409l-11.9 14.275L25.617 37.92a2.663 2.663 0 0 1-2.077 4.368Z"
      transform="rotate(90 23.817 58.827)"
      style={{
        fill: "#fff",
      }}
    />
  </svg>
);

export default ScrollTopSvg;
