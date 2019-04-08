import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toRenderProps from 'recompose/toRenderProps';
import withState from 'recompose/withState';

import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

const WithState = toRenderProps(withState('anchorEl', 'updateAnchorEl', null));

const Color = styled.div`
  color: #fff;
  text-transform: capitalize;
  font-size: 16px;
  font-family: 'Comfortaa', cursive;

  @media ${props => props.theme.mediaQueries.minMobile} {
    font-size: 12px;
  }
`;

function RenderPropsMenu({ genres = []}) {

  return (
    <WithState>
      {({ anchorEl, updateAnchorEl }) => {
        const open = Boolean(anchorEl);
        const handleClose = () => {
          updateAnchorEl(null);
        };

        return (
          <React.Fragment>
            <Button
              aria-owns={open ? 'render-props-menu' : undefined}
              aria-haspopup="true"
              onClick={event => {
                updateAnchorEl(event.currentTarget);
              }}
            >
              <Color>
                Фильмы
              </Color>
            </Button>
            <Menu id="render-props-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
              {
                genres.map(item => {
                  return <NavLink 
                      key={item.id} 
                      to={`/genre/${item.name}`}
                    >
                    <MenuItem 
                      onClick={handleClose}>{item.name}</MenuItem>
                  </NavLink>
                
                })
              }
            </Menu>
          </React.Fragment>
        );
      }}
    </WithState>
  );
}

const mapStateToProps = ({ geral }) => {
  return {
    genres: geral.genres
  }
}

export default connect(mapStateToProps)(RenderPropsMenu);