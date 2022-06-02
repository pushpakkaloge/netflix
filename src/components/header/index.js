import React, { useState } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {Background,Logo,Container,Frame,Button,Feature,SearchIcon,
    SearchInput,
    ButtonLink,
    Link,
    Dropdown,
  Picture,
  Search,
  Profile,
  Group,
    PlayButton,FeatureTitle,Text} from './styles/header';


export default function Header({bg=true,children,...restProps}){
    return  bg ? (<Background {...restProps}>{children}</Background>):children;
}

Header.Frame =  function HeaderFrame({children,...restProps}){
    return <Container {...restProps}>{children}</Container>
}

Header.Feature =  function HeaderFeature({children,...restProps}){
    return <Feature {...restProps}>{children}</Feature>
}


Header.Text =  function HeaderText({children,...restProps}){
    return <Text {...restProps}>{children}</Text>
}


Header.FeatureTitle =  function HeaderFeatureTitle({children,...restProps}){
    return <FeatureTitle {...restProps}>{children}</FeatureTitle>
}

Header.Logo =  function HeaderLogo({to,...restProps}){
    return (
        <Link to={to}>
            <Logo {...restProps}/>
        </Link>
    )
}

Header.Button = function HeaderButton({to,children,...restProps}){
    return <Button to={to} {...restProps}>{children}</Button>
}


Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };
  
  Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
      <ReactRouterLink to={to}>
        <Logo {...restProps} />
      </ReactRouterLink>
    );
  };
  
  Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
  
    return (
      <Search {...restProps}>
        <SearchIcon onClick={() => setSearchActive((searchActive) => !searchActive)} data-testid="search-click">
          <img src="/images/icons/search.png" alt="Search" />
        </SearchIcon>
        <SearchInput
          value={searchTerm}
          onChange={({ target }) => setSearchTerm(target.value)}
          placeholder="Search films and series"
          active={searchActive}
          data-testid="search-input"
        />
      </Search>
    );
  };
  
  Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return <Profile {...restProps}>{children}</Profile>;
  };

  Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png`} />;
  };
  
  Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
  };
  
  Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
  };
  
  Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
    return <PlayButton {...restProps}>{children}</PlayButton>;
  };

  Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
  };