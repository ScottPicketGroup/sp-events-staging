import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Heading1 } from "../../StyledComponents/typography.css";
import { EventsSubMenuWrapper, EventsSubMenuItem } from "../menu.css";
import useMenudata from "./menuEventTypesQuery";
import MobileMenuBackButton from "./MobileMenuBackButton";

const EventsSubMenu = ({ active, setActive, subMenuOpen, setSubMenuOpen }) => {
  const [activeSub, setSubActive] = React.useState("");
  const menuItems = useMenudata();

  return (
      <EventsSubMenuWrapper subMenuOpen={subMenuOpen} active={active}>
        <MobileBackButtonWrapper>
          <MobileMenuBackButton subMenu />
          <Heading1
              style={{
                color: "rgba(255, 255, 255, 50%)",
                paddingLeft: `2rem`,
                marginBottom: `0`,
              }}
              onClick={() => setSubMenuOpen(false)}
          >
            Back
          </Heading1>
        </MobileBackButtonWrapper>
        {menuItems[1] &&
            menuItems[1].eventTypes &&
            menuItems[1].eventTypes.map((item, index) => (
                <Link to={`/events/${item.pageName.toLowerCase().replace(" ", "-")}`} key={index}>
                  <EventsSubMenuItem
                      marginBottom="sm"
                      link
                      onMouseOver={() => setSubActive(item)}
                      item={item}
                      subMenuOpen={subMenuOpen}
                      active={activeSub}
                  >
                    {item.pageName}
                  </EventsSubMenuItem>
                </Link>
            ))}
      </EventsSubMenuWrapper>
  );
};

export default EventsSubMenu;

export const MobileBackButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  @media (min-width: 450px) {
    display: flex;
    flex-direction: row;
    width: 50%;
    display: none;
  }
`;
