import React from 'react'
import styled from "styled-components"

const ContactContainer = styled.div`
    background: #080808;
`;
const Content = styled.div`
    width: var(--mainWidth);
    margin:auto;
    padding:var(--padding);
`
const Title = styled.h2`
    text-align:center;
    color: var(--titleColor);
`;
const ContactList = styled.div`
    display:flex;
    flex-flow:column;
    align-items:center;
    line-height:2rem;
`;

const Contact = styled.div`
`;


const Header = ({ links }) => {
  return (
    <ContactContainer>
        <Content>
            <Title>Contact</Title>
            <ContactList>
                {links.map((link) => 
                    <a href={link.url}>{link.text}</a>
                )}
            </ContactList>
        </Content>
    </ContactContainer>
    )
}
export default Header