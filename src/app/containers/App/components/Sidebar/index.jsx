import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'routes/routes';
import Accordion from 'components/Accordion';

import styles from './styles';

const activeStyle = {
  fontWeight: 'bold',
  color: 'rgb(0, 122, 255)'
};

class Sidebar extends Component {
  state = {
    isOpen: true
  };

  toogle = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen
    }));
  };

  render() {
    const { isOpen } = this.state;
    const iconClass = isOpen ? styles.chevronLeft : styles.chevronRight;
    const navClass = isOpen ? '' : styles.navCollapsed;
    return (
      <nav className={ navClass }>
        <div className={ styles.collapserIcon } onClick={ this.toogle }>
          <div className={ iconClass } />
          <div className={ iconClass } />
        </div>
        { isOpen && (
          <Accordion
            allowMultipleOpen={ true }
            className={ styles.accordion }
            openIconClass={ styles.chevronDown }
            closeIconClass={ styles.chevronRight }
            noIcon={ true }
          >
            <div label="USERS ADMINISTRATION" className={ styles.section }>
              <div className={ styles.subNav }>
                <NavLink to={ ROUTES.PRIVATE.USERS.ROOT } activeStyle={ activeStyle }>
                  Users
                </NavLink>
                <NavLink to={ ROUTES.PRIVATE.ROLES.ROOT } activeStyle={ activeStyle }>
                  Roles
                </NavLink>
                <NavLink to={ ROUTES.PRIVATE.PERMITS } activeStyle={ activeStyle }>
                  Permits
                </NavLink>
                <NavLink to={ ROUTES.PRIVATE.MENU_OPTIONS } activeStyle={ activeStyle }>
                  Menu Options
                </NavLink>
              </div>
            </div>
            <div label="LOREM IPSUM" className={ styles.section }>
              <div className={ styles.subNav }>
                <NavLink to={ ROUTES.PRIVATE.USERS.ROOT } activeStyle={ activeStyle }>
                  Users
                </NavLink>
                <NavLink to={ ROUTES.PRIVATE.ROLES.ROOT } activeStyle={ activeStyle }>
                  Roles
                </NavLink>
              </div>
            </div>
            <div label="LOREM IPSUM DOLOR" className={ styles.section }>
              <div className={ styles.subNav }>
                <NavLink to={ ROUTES.PRIVATE.USERS.ROOT } activeStyle={ activeStyle }>
                  Users
                </NavLink>
                <NavLink to={ ROUTES.PRIVATE.ROLES.ROOT } activeStyle={ activeStyle }>
                  Roles
                </NavLink>
              </div>
            </div>
          </Accordion>
        ) }
      </nav>
    );
  }
}

export default Sidebar;
