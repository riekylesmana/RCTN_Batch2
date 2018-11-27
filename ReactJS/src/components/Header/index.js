import React from "react";
import {Button, Hero, HeroBody,Title, Subtitle, Container, Icon} from "bloomer";

import PropTypes from "prop-types";

const Header = ({ onClick, people }) => {
  return (
    <Hero isColor='light' isSize='medium'>
      <HeroBody>
        <Container hasTextAlign='centered'>
          <Icon className="fa fa-home"></Icon>
          <Title>
            Header
          </Title>
          <Subtitle>Created by: { people }</Subtitle>
          <Button
            isColor="warning"
            onClick={() => onClick()}
          >
            Change Creator
          </Button>
        </Container>
      </HeroBody>
    </Hero>
  );
};

export default Header;

Header.propTypes = {
  people: PropTypes.string.isRequired,
  onClickHandle: PropTypes.func
};
