import PropTypes from "prop-types";
import "./basicCssBottomNavigation.css";

/**
 * Primary UI component for user interaction
 */

export const BasicCssBottomNavigation = ({ displayLight, ...props }) => {
  let currentSelecter = 0;
  const mode = displayLight
    ? "bottom-navigation-basic-dark-mode"
    : "bottom-navigation-basic-light-mode";

  const onMoveToPage = (path, current) => {
    console.log(path);
    currentSelecter = current;
  };

  const checkRouterPath = () => {
    return;
  };

  // 리덕스 같은 전역상태관리 툴 활용해서 state값 조회로 nav이동 on조건 충족해줘야 할듯?

  return (
    <section className={mode + " bottom-navigation-container"}>
      <ul>
        <li>
          <a
            className={"home" + (currentSelecter === 0 ? " on" : "")}
            onClick={() => onMoveToPage("/home", 0)}
          ></a>
        </li>
        <li>
          <a
            className={
              "zzim" + (currentSelecter === 1 ? " on" : "")
              // + (router.pathname.startsWith("/zzim") ? " on" : "")
            }
            onClick={() => onMoveToPage("/zzim", 1)}
          ></a>
        </li>
        <li>
          <a
            className={"map" + (currentSelecter === 2 ? " on" : "")}
            onClick={() => onMoveToPage("/map", 2)}
          ></a>
        </li>
        <li>
          <a
            className={"magazine" + (currentSelecter === 3 ? " on" : "")}
            onClick={() => onMoveToPage("/magazine", 3)}
          ></a>
        </li>
        <li>
          <a
            className={
              "more" + (currentSelecter === 4 ? " on" : "")
              // + (router.pathname.startsWith("/more") ? " on" : "")
            }
            onClick={() => onMoveToPage("/more", 4)}
          ></a>
        </li>
      </ul>
    </section>
  );
};

BasicCssBottomNavigation.propTypes = {
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
  onMoveToPage: PropTypes.func,
};

BasicCssBottomNavigation.defaultProps = {
  // backgroundColor: null,
  // primary: false,
  displayLight: false,
  onMoveToPage: undefined,
};
