import React from 'react'
import styled from "styled-components"

const ContactContainer = styled.footer`
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

const Footer = ({ email, links }) => {
  return (
    <ContactContainer>
        <Content>
            <ContactList>
                <a key={email.text} href={email.url}>{email.text}</a>
                <div>
                    {links.map((link) =>  {
                        if(link.text.toLowerCase() == "github")
                            return <a href={link.url}><svg class="github" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg></a>
                        else if(link.text.toLowerCase() == "linkedin")
                            return <a href={link.url}><svg class="linkedin" role="img" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path  d="m100.3 479h-92.9v-299.1h92.9zm-46.5-339.9c-29.7 0-53.8-24.6-53.8-54.3 0-14.3 5.7-27.9 15.7-38 10.1-10.1 23.8-15.8 38.1-15.8 14.2 0 27.9 5.7 38 15.8 10.1 10.1 15.8 23.7 15.8 38 0 29.7-24.1 54.3-53.8 54.3zm394.1 339.9h-92.7v-145.6c0-34.7-0.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7v148.1h-92.7v-299.1h89v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3v164.3z"/></svg></a>
                        else if(link.text.toLowerCase() == "leetcode")
                            return <a href={link.url}><svg class="leetcode" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LeetCode</title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
                    })}
                </div>
            </ContactList>
        </Content>
    </ContactContainer>
    )
}
export default Footer