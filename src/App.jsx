import { Outlet } from "react-router-dom";
import { Box, Container, Heading, Image, Flex } from "@chakra-ui/react";
import Why from "./pages/Why"
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Recommended from "./pages/Recommended";

export default function App() {
  return (
    <Box>
      {/* Navbar / Header */}
      <Box bg="blue.500" color="white" py={4}>
        <Container maxW="container.lg">
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
          <Heading size="lg">Treetop Consulting</Heading>
        </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={6}>
        <Outlet /> {/* This is where pages will be rendered */}
        <Why />
        <Services />
        <AboutUs />
        <Recommended />
      </Container>

      {/* Footer */}
      <Box bg="gray.100" py={4} mt={10} textAlign="center">
        © {new Date().getFullYear()} Treetop Consulting. All rights reserved.
      </Box>
    </Box>
  );
}

