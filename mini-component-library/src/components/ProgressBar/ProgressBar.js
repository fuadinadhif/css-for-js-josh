/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: "8px",
    borderRadius: "4px",
  },
  medium: {
    height: "12px",
    borderRadius: "4px",
  },
  large: {
    height: "16px",
    padding: "4px",
    borderRadius: "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  return (
    <Wrapper
      role="progressbar"
      aria-valuenow={value}
      aria-label="Josh Progressbar"
      style={{
        "--padding": styles.padding,
        "--borderRadius": styles.borderRadius,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          style={{ "--width": value + "%", "--height": styles.height }}
        ></Bar>
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const BarWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const Bar = styled.div`
  width: var(--width);
  height: var(--height);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;

// ! Old Approach - (Uneffective way)
// /* eslint-disable no-unused-vars */
// import React from "react";
// import styled from "styled-components";

// import { COLORS } from "../../constants";
// import VisuallyHidden from "../VisuallyHidden";

// const wrapperSizes = {
//   small: {
//     "--height": "8px",
//   },
//   medium: {
//     "--height": "12px",
//   },
//   large: {
//     "--height": "24px",
//     "--padding": "4px",
//   },
// };

// const indicatorSizes = {
//   small: {
//     "--height": "8px",
//   },
//   medium: {
//     "--height": "12px",
//   },
//   large: {
//     "--height": "16px",
//     "--padding": wrapperSizes.large["--padding"],
//   },
// };

// const ProgressBar = ({ value, size }) => {
//   const wrapperStyles = wrapperSizes[size];
//   const indicatorStyles = indicatorSizes[size];

//   return (
//     <Wrapper
//       role="progressbar"
//       aria-valuenow={value}
//       aria-label="josh progressbar"
//       style={wrapperStyles}
//     >
//       <Indicator value={value} size={size} style={indicatorStyles}></Indicator>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.div`
//   width: 370px;
//   height: var(--height);
//   background-color: ${COLORS.transparentGray15};
//   box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
//   border-radius: 8px;
//   position: relative;
//   padding: var(--padding);
// `;

// const Indicator = styled.div`
//   background-color: ${COLORS.primary};
//   border-radius: ${(props) => {
//     if (props.value >= 90) {
//       return "4px";
//     } else {
//       return "4px 0px 0px 4px";
//     }
//   }};
//   position: absolute;
//   width: ${(props) => {
//     if (props.size === "large") {
//       return `calc(${props.value + "%"} - var(--padding) * 2)`;
//     } else {
//       return props.value + "%";
//     }
//   }};
//   height: var(--height);
// `;

// export default ProgressBar;
