import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { onChangeNavigation } from "./BottomNavigationSlice";

export const BottomNavigation = ({ display }) => {
  const selectNav = useSelector((state) => state.selectNavigation.value);
  const dispatch = useDispatch();

  const handleClick = (path) => {
    dispatch(onChangeNavigation(path));
  };

  return (
    <section>
      <BottomNavigationContainer display={display}>
        <li>
          <IconItem
            className="home"
            onClick={() => handleClick("home")}
            selectNav={selectNav}
          />
        </li>
        <li>
          <IconItem
            className="zzim"
            onClick={() => handleClick("zzim")}
            selectNav={selectNav}
          />
        </li>
        <li>
          <IconItem
            className="map"
            onClick={() => handleClick("map")}
            selectNav={selectNav}
          />
        </li>
        <li>
          <IconItem
            className="magazine"
            onClick={() => handleClick("magazine")}
            selectNav={selectNav}
          />
        </li>
        <li>
          <IconItem
            className="more"
            onClick={() => handleClick("more")}
            selectNav={selectNav}
          />
        </li>
      </BottomNavigationContainer>
    </section>
  );
};

const BottomNavigationContainer = styled.ul`
  display: flex;
  bottom: 0;
  width: 100%;
  height: 100%;
  max-width: 720px;
  z-index: 1;
  box-shadow: 0 0 10px 0 rgba(5, 44, 82, 0.1);
  background: ${(props) =>
    props.display === "light-mode" ? "#fff" : "#1b1e21"};
  & > li {
    text-align: center;
    flex: 1;
  }
`;

const IconItem = styled.a`
  display: block;
  height: 56px;
  cursor: pointer;

  &.home {
    background-image: ${(props) =>
      props.selectNav === "home"
        ? `url("../../stories/assets/button_navigation_home_on.svg")`
        : `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_home_off.svg")`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90px 56px;
  }
  &.zzim {
    background-image: ${(props) =>
      props.selectNav === "zzim"
        ? `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_heart_on.svg")`
        : `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_heart_off.svg")`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90px 56px;
  }
  &.map {
    background-image: ${(props) =>
      props.selectNav === "map"
        ? `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_map_on.svg")`
        : `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_map_off.svg")`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90px 56px;
  }
  &.magazine {
    background-image: ${(props) =>
      props.selectNav === "magazine"
        ? `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_magazine_on.svg")`
        : `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_magazine_off.svg")`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90px 56px;
  }
  &.more {
    background-image: ${(props) =>
      props.selectNav === "more"
        ? `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_more_on.svg")`
        : `url("http://localhost:6006/static/media/src/stories/assets/button_navigation_more_off.svg")`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: 90px 56px;
  }
`;
