import React, { Component } from 'react'
import { NavLink, Link} from 'react-router-dom'
import { NavItem, Navbar } from 'react-materialize'
export class header extends Component {
  render() {
    return (
      <div>
        <Navbar brand={<a />} alignLinks="left">
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
          <NavItem>
            <NavLink to="/candidates">Candidates</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/headhunters">Head Hunters</NavLink>
          </NavItem>
                  </Navbar>
            {/* <nav>
                <div class="nav-wrapper">
                    <a href="#" className="brand-logo right">Company</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><NavLink to="/candidates">Candidates</NavLink></li>
                        <li><NavLink to="/headhunters">Head Hunters</NavLink></li>
                        <li><NavLink to="/recruit">Recruit</NavLink></li>
                    </ul>
                </div>
            </nav> */}
      </div>
    )
  }
}

export default header
