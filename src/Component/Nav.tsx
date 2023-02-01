import React from "react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
// import { Logo } from "@choc-ui/logo";


function Nav() {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
  
  return (
    <>
     <React.Fragment >
      <chakra.header 
         bg="#0A244F"
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
        
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto" >
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <Logo /> */}
              <VisuallyHidden>Tourism</VisuallyHidden>
            </chakra.a>
            <chakra.h1 color='white' fontSize="xl" fontWeight="medium" ml="2">
            Tourism
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
                
                <Link href='' isExternal>
              <Button variant="ghost" color='white'>Features</Button>
                </Link>
              <Button variant="ghost" color='white'>Pricing</Button>
              <Button variant="ghost" color='white'>Blog</Button>
              <Button variant="ghost" color='white'>Company</Button>
              <Button variant="ghost" color='white'>Sign in</Button>
            </HStack>
            <Button color='white' colorScheme="brand" size="sm">
              Get Started
            </Button>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button color='white' w="full" variant="ghost">
                  Features
                </Button>
                <Button color='white' w="full" variant="ghost">
                  Pricing
                </Button>
                <Button color='white' w="full" variant="ghost">
                  Blog
                </Button>
                <Button color='white' w="full" variant="ghost">
                  Company
                </Button>
                <Button color='white' w="full" variant="ghost">
                  Sign in
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
   
    </>
  )
}

export default Nav
