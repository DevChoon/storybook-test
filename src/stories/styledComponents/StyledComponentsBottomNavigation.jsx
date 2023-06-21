import React from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";

/**
 * Primary UI component for user interaction
 */

const TestBox = styled.div`
  font-size: ${(props) => props.test};
  background: url("../assets/badge_hot.svg");
`;

export const StyledComponentsBottomNavigation = ({
  displayLight,
  ...props
}) => {
  const mode = displayLight
    ? "bottom-navigation-basic-dark-mode"
    : "bottom-navigation-basic-light-mode";

  const onClick = (a) => {
    console.log(a);
  };

  return (
    <section className={mode}>
      <TestBox test={"20px"}>hi</TestBox>
      <div className="m-10 font-bold" onClick={() => onClick(11)}>
        1
      </div>
      <div>1</div>
      <div>1</div>
    </section>
    // <button
    //   type="button"
    //   className={["storybook-button", `storybook-button--${size}`, mode].join(
    //     " "
    //   )}
    //   {...props}
    // >
    //   {label}
    //   <style jsx>{`
    //     button {
    //       background-color: ${backgroundColor};
    //     }
    //   `}</style>
    // </button>
  );
};

StyledComponentsBottomNavigation.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  // backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  displayLight: PropTypes.bool,
  // displayLight: PropTypes.oneOf(["light", "dark"]),
  /**
   * Button contents
   */
  // label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,
};

StyledComponentsBottomNavigation.defaultProps = {
  // backgroundColor: null,
  // primary: false,
  displayLight: false,
  // onClick: undefined,
};
