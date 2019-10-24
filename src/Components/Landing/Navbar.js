import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
const red = {
    color:'red',
    fontSize:'1.5em',
    fontWeight:'bold'
}
export default class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  render() {
    return (
      <div>
        <Navbar color="" light expand="md">
          <NavbarBrand href="/"><span style={red}>H</span>ouse Food</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-2 mt-2" navbar>
              <NavItem>
                <NavLink href="/components/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Foods</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Add Custom Order
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/">About Us</NavLink>
              </NavItem>
            </Nav>
              <Nav className="ml-auto mt-2 text-white" navbar>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret className="text-white">
                        Account
                    </DropdownToggle>
                    <DropdownMenu left="true">
                        <DropdownItem>
                            Profile
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                <NavItem>
                    <NavLink className="text-white">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </NavLink>
                </NavItem>             
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}