import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
`
const NavBar = styled.div`
    display:flex;
    border-bottom: 1px solid red;
    flex-direction:row-reverse;
`
const Links = styled.a`
    margin:1rem;
`


function Header () {
    return (
        <Wrapper>
            <NavBar>
                <Links>Contact Me</Links>
                <Links>About Me</Links>
                <Links>Home</Links>
            </NavBar>
        </Wrapper>
    )
}

export default Header