/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useState, useEffect } from 'react'
import { BuilderComponent, builder } from '@builder.io/react'
import { useCart } from '@lib/shopify/storefront-data-hooks'
import {
  jsx,
  Box,
  Flex,
  NavLink,
  useThemeUI,
  Heading,
  Button,
} from 'theme-ui'
import { keyframes } from '@emotion/react'
import { useUI } from '@components/common/context'
import Image from 'next/legacy/image'
import Searchbar from './Searchbar'
import { Bag } from '@components/icons'

const Navbar: FC = () => {
  const [announcement, setAnnouncement] = useState()
  const { theme } = useThemeUI()
  const { navigationLinks, logo, openSidebar } = useUI()
  const cart = useCart()

  useEffect(() => {
    async function fetchContent() {
      const items = cart?.lineItems || []
      const announcementContent = await builder
        .get('announcement-bar', {
          cacheSeconds: 120,
          userAttributes: {
            itemInCart: items.map((item: any) => item.variant.product.handle),
          } as any,
        })
        .toPromise()
      setAnnouncement(announcementContent)
    }
    fetchContent()
  }, [cart?.lineItems])

  // Define the keyframes for the shine effect
  const shine = keyframes`
    0% {
      left: -150%;
    }
    50% {
      left: 50%;
    }
    100% {
      left: 150%;
    }
  `

  return (
    <React.Fragment>
      <BuilderComponent
        content={announcement}
        data={{ theme }}
        model="announcement-bar"
      />
      <Box
        as="header"
        sx={{
          margin: `0 auto`,
          maxWidth: 1920,
          py: 2,
          px: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Navigation Links */}
        <Flex
          as="nav"
          sx={{
            display: ['none', 'none', 'flex'],
            flexBasis: 'auto',
            minWidth: 240,
            justifyContent: 'space-evenly',
          }}
        >
          {navigationLinks?.map((link, index) => (
            <NavLink
              key={index}
              href={link.link || '#!'}
              sx={{
                position: 'relative',
                display: 'inline-block',
                padding: '15px',
                paddingRight: '40px',
                borderRadius: '4px',
                textDecoration: 'none',
                color: 'text',
                textAlign: 'left',
                overflow: 'hidden',
                '&:hover': {
                  color: 'primary',
                  backgroundColor: 'muted',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-150%',
                  width: '100%',
                  height: '100%',
                  background:
                    'linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)',
                  transform: 'skewX(-25deg)',
                },
                '&:hover::before': {
                  animation: `${shine} 0.75s forwards`,
                },
              }}
            >
              {link.title}
            </NavLink>
          ))}
        </Flex>

        {/* Logo */}
        <Box
          sx={{
            transform: 'translateX(-50%)',
            left: '50%',
            position: 'absolute',
          }}
        >
          <Heading
            sx={{
              fontSize: 20,
              fontWeight: 'bold',
            }}
          >
            {logo && logo.image && (
              <NavLink
                href="/"
                sx={{
                  letterSpacing: -1,
                  textDecoration: `none`,
                  paddingLeft: '5px',
                }}
              >
                <Image
                  alt="Logo"
                  width={logo.width}
                  height={logo.height}
                  src={logo.image}
                />
              </NavLink>
            )}
            {logo && logo.text && !logo.image && (
              <NavLink
                href="/"
                sx={{
                  letterSpacing: -1,
                  textDecoration: `none`,
                  paddingLeft: '5px',
                }}
              >
                {logo.text}
              </NavLink>
            )}
          </Heading>
        </Box>

        {/* Search and Cart */}
        <Box
          sx={{
            display: 'flex',
            minWidth: 140,
            width: '100%',
            justifyContent: ['space-between', 'flex-end'],
            alignItems: 'center',
          }}
        >
          <Searchbar />
          <Button onClick={openSidebar} aria-label="Cart">
            <Bag />
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Navbar
