import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
background: ${(p) => p.theme.elColor};
color: ${(P)=> P.theme.textColor};
display: flex;
align-items: center;
justify-content: center;
gap: 8px;
padding: 1rem;
`
const Link = styled.a`
color: ${(P)=> P.theme.textColor};
text-decoration: none;
font-weight: bold;
`

const Footer = () => {
  return (
    <Container>
        Developed by <Link href='https://linktr.ee/toridev_'>Victory Akpofure</Link>
    </Container>
  )
}

export default Footer