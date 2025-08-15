import { Outlet, Link as RouterLink } from "react-router-dom";
import {
  Box,
  Container,
  Heading,
  Image,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  useBreakpointValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const fontSize = useBreakpointValue({ base: "lg", md: "md" });

  return (
    <Box fontFamily="Poppins, sans-serif">
      {/* Navbar */}
      <Box bg="blue.500" color="white" py={4} boxShadow="md">
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            {/* Logo + Brand */}
            <Flex align="center">
              <Image
                src="/images/Treetop-site-logo.jpg"
                alt="company logo"
                boxSize="50px"
                objectFit="contain"
                mr={3}
                borderRadius="md"
                boxShadow="lg"
              />
              <Heading size="lg">Treetop Consulting Ltd</Heading>
            </Flex>

            {/* Desktop Navigation */}
            <HStack spacing={6} display={{ base: "none", md: "flex" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  fontWeight="medium"
                  fontSize={fontSize}
                  _hover={{ color: "blue.200" }}
                >
                  {link.label}
                </Link>
              ))}
            </HStack>

            {/* Mobile Hamburger Icon */}
            <IconButton
              aria-label="Open menu"
              icon={<HamburgerIcon />}
              display={{ base: "inline-flex", md: "none" }}
              onClick={onOpen}
              variant="outline"
              color="white"
              borderColor="white"
              _hover={{ bg: "blue.600" }}
            />
          </Flex>
        </Container>
      </Box>

      {/* Mobile Drawer Menu */}
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="blue.500" color="white">
          {/* X Button inside the drawer */}
          <DrawerCloseButton 
           fontSize="2xl"   // Makes the icon bigger
           top="20px"       // Optional: Adjust vertical position
           right="20px"
           _hover={{ color: "blue.200" }} />
          <DrawerHeader borderBottomWidth="1px" borderColor="blue.300">
            Menu
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  onClick={onClose}
                  fontSize="lg"
                  fontWeight="medium"
                  _hover={{ color: "blue.200" }}
                >
                  {link.label}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      {/* Main Content */}
      <Container maxW="container.lg" py={6}>
        <ScrollToTop />
        <Outlet />
      </Container>

      {/* Footer */}
      <Box bg="gray.100" py={4} mt={10} textAlign="center">
        © {new Date().getFullYear()} Treetop Consulting. All rights reserved.
      </Box>
    </Box>
  );
}
