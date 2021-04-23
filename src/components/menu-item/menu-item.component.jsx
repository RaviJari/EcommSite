import React from "react";
import {withRouter} from 'react-router-dom';

import "./menu-item.styles.scss";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size ,history,linkUrl ,match}) => (
  <MenuItemContainer onClick={()=> history.push(`${match.url}${linkUrl}`)}>
    <BackgroundImageContainer
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <ContentContainer>
      <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
