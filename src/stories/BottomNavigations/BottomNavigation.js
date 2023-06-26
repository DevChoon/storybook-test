import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { onChangeNavigation } from "./BottomNavigationSlice";
import "./bottomNavigation.css";

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
            className={`home icon ${selectNav === "home" ? "on" : "off"}`}
            onClick={() => handleClick("home")}
            selectNav={selectNav}
          />
        </li>
        <li>
          <IconItem
            className={`zzim icon ${selectNav === "zzim" ? "on" : "off"}`}
            onClick={() => handleClick("zzim")}
            selectNav={selectNav}
          />
        </li>
        <li>
          <IconItem
            className={`map icon ${selectNav === "map" ? "on" : "off"}`}
            onClick={() => handleClick("map")}
            selectNav={selectNav}
          />
        </li>
        <li>
          <IconItem
            className={`magazine icon ${
              selectNav === "magazine" ? "on" : "off"
            }`}
            onClick={() => handleClick("magazine")}
            selectNav={selectNav}
          />
        </li>
        <li>
          <IconItem
            className={`more icon ${selectNav === "more" ? "on" : "off"}`}
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
`;
