import React, { useState } from 'react';
import {Button,Navbar,Nav,DropdownToggle,DropdownMenu,DropdownItem,ButtonDropdown,Input} from 'reactstrap';
import {TiUser} from "react-icons/ti"
import {GoSearch} from "react-icons/go";
import {GiSpellBook} from 'react-icons/gi'

export const Navbar=(props)=>{
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  return (
    <div style={{ backgroundColor:'#000000' }}>
      <Navbar expand="md">
        <Button  className="btn  float-left ml-3" size="lg" style={{backgroundColor:'#000000',border:'0px' }} href="/"><h1><GiSpellBook size="35px"/></h1></Button>
        <Nav className="ml-auto" navbar>
          <Input className="mt-2" type="search" name="search" id="exampleSearch" placeholder="search here" size="lg"></Input>
          <Button className="btn btn-dark float-left " style={{backgroundColor:'#000000',border:'0px' }} size="lg"><GoSearch size="15px"></GoSearch></Button>
          <Button className="btn btn-dark btn float-left ml-3"style={{backgroundColor:'#000000',border:'0px' }} size="lg">About</Button>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} size="lg">
              <DropdownToggle caret style={{backgroundColor:'#000000',border:'0px' }} className="btn btn-dark float-left ml-3 nav-link" left>
                Upload
              </DropdownToggle >
              <DropdownMenu right style={{border:'0px'}}>
                <DropdownItem href="/UplBook">Upload Book</DropdownItem>
                <DropdownItem >Upload Material</DropdownItem>
                <DropdownItem divider/>
                <DropdownItem >Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
            <Button style={{backgroundColor:'#000000',border:'0px' }} className="btn btn-dark btn float-right ml-3" size="lg" href="/Login"><TiUser size="25px"></TiUser></Button>
        </Nav>
        </Navbar>
    </div>
  );
}