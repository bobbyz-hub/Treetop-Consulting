import {
  Box,
  Flex,
  Text,
  Button,
  Stack,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Why from "./Why";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Recommended from "./Recommended";

// Motion wrappers
const MotionBox = motion(Box);
const MotionStack = motion(Stack);

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <Box
        as="section"
        minH="100vh"
        w="100%"
        bgGradient="linear(to-br, blue.50, white)"
        _dark={{ bgGradient: "linear(to-br, gray.800, gray.900)" }}
        overflowX="hidden"
      >
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          h="100vh"
          px={{ base: 6, md: 12 }}
          maxW="1200px"
          mx="auto"
          gap={{ base: 0, md: 12 }}
        >
          {/* Left: Text with slide-in from left */}
          <MotionStack
            spacing={6}
            flex="1"
            maxW={{ base: "100%", md: "45%" }}
            textAlign={{ base: "center", md: "left" }}
            zIndex={1}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Box
              as={motion.h2}
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="bold"
              bgGradient="linear(to-r, blue.500, green.400, blue.500)"
              bgClip="text"
              initial={{ backgroundPosition: "200% center" }}
              whileInView={{
                backgroundPosition: ["200% center", "-200% center"],
                transition: { duration: 3, ease: "linear", repeat: Infinity },
              }}
              viewport={{ once: false }}
              sx={{
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Find Your Dream Job or Your Next Great Hire
            </Box>

            <Text
              fontSize="lg"
              color={useColorModeValue("gray.600", "gray.300")}
            >
              Whether you're a job seeker ready to take the next step in your
              career, or an employer looking for top talent, we’ve got the tools
              to help you succeed.
            </Text>

            <Stack
              direction={{ base: "column", sm: "row" }}
              spacing={4}
              mb={4}
              justify={{ base: "center", md: "flex-start" }}
              flexWrap="wrap"
              maxW="100%"
            >
              <Button
                size="lg"
                colorScheme="blue"
                onClick={() => navigate("/jobseeker")}
                boxShadow="lg"
                whiteSpace="normal"
                textAlign="center"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
              >
                Job Seeker – Sign Up / Login
              </Button>
              <Button
                size="lg"
                colorScheme="green"
                onClick={() => navigate("/employer")}
                boxShadow="lg"
                whiteSpace="normal"
                textAlign="center"
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}
                transition="all 0.3s ease"
              >
                Employer – Sign Up / Login
              </Button>
            </Stack>
          </MotionStack>

          {/* Right: Hero Image with slide-in from right */}
          <MotionBox
            flex="1"
            w={{ base: "100%", md: "55%" }}
            h={{ base: "300px", md: "90%" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="images/handshake.webp"
              alt="Recruitment illustration"
              objectFit="cover"
              borderRadius="xl"
              w={{ base: "100%", md: "100%" }}
              h="100%"
            />
          </MotionBox>
        </Flex>
      </Box>

      {/* Additional Sections */}
      <Why />
      <Services />
      <AboutUs />
      <Recommended />
    </>
  );
}
