import React from "react";
import { Div } from "./HeroBgAnimationStyle";

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient
          id="dynamicGradient"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0%" stopColor="#FBFBFB">
            <animate
              attributeName="stop-color"
              values="#FBFBFB; #945DD6; #F46737; #13ADC7; #FBFBFB"
              dur="8s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g opacity="0.2" filter="url(#glow)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437Z"
          stroke="url(#dynamicGradient)"
        />
      </g>

      {/* Animated Ellipses */}
      <ellipse
        cx="295"
        cy="193"
        rx="1.5"
        ry="1.5"
        fill="#F46737"
        filter="url(#glow)"
      >
        <animateMotion
          dur="8s"
          repeatCount="indefinite"
          rotate="auto"
          keyTimes="0; 0.5; 1"
          keySplines="0.25 0.1 0.25 1"
        >
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </ellipse>

      {/* Add Hover Interaction */}
      <ellipse
        cx="165"
        cy="95"
        rx="2"
        ry="2"
        fill="#945DD6"
        style={{ cursor: "pointer", transition: "transform 0.3s ease" }}
        onMouseOver={(e) => (e.target.style.transform = "scale(1.5)")}
        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
      >
        <animateMotion
          dur="10s"
          repeatCount="indefinite"
          rotate="auto"
          begin="1s"
        >
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </ellipse>

      {/* Complex Animations */}
      <path
        d="M294.685 193.474L268.932 219.258"
        stroke="url(#dynamicGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transition: "stroke-width 0.3s ease" }}
        onMouseOver={(e) => (e.target.style.strokeWidth = "4")}
        onMouseOut={(e) => (e.target.style.strokeWidth = "2")}
      >
        <animateMotion
          dur="6s"
          repeatCount="indefinite"
          rotate="auto"
          begin="2s"
        >
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>
    </svg>
  </Div>
);

export default HeroBgAnimation;
