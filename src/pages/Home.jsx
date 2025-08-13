import { 
  Box, Flex, Heading, Text, Button, Stack, useColorModeValue, Image, keyframes 
 } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MotionHeading = motion(Box);

export default function Home() {
  const navigate = useNavigate();

  // Animations
  const fadeInLeft = keyframes`
    0% { opacity: 0; transform: translateX(-50px); }
    100% { opacity: 1; transform: translateX(0); }
  `;

  const fadeInRight = keyframes`
    0% { opacity: 0; transform: translateX(50px); }
    100% { opacity: 1; transform: translateX(0); }
  `;

  return (
    <Box
      minH="100vh"
      bgGradient="linear(to-br, blue.50, white)"
      _dark={{ bgGradient: "linear(to-br, gray.800, gray.900)" }}
      py={16}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        maxW="1200px"
        mx="auto"
        px={6}
        gap={10}
      >
        {/* Text Section */}
        <Stack 
          spacing={6} 
          flex="1" 
          animation={`${fadeInLeft} 0.8s ease-out`}
          animationDelay="0s"
          animationFillMode="both"
        >
          <MotionHeading
              as="h2"
              textAlign="center"
              fontSize="5xl"
              fontWeight="bold"
              bgGradient="linear(to-r, blue.500, green.400, blue.500)"
              bgClip="text"
              initial={{ backgroundPosition: "200% center" }}
              whileInView={{
                  backgroundPosition: ["200% center", "-200% center"],
                  transition: { duration: 3, ease: "linear", repeat: Infinity }
              }}
              viewport={{ once: false }}
              sx={{
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
              }}
          >
          Find Your Dream Job or Your Next Great Hire
         </MotionHeading>
          <Text fontSize="lg" color={useColorModeValue("gray.600", "gray.300")}>
            Whether you're a job seeker ready to take the next step in your career, 
            or an employer looking for top talent, we’ve got the tools to help you succeed.
          </Text>

          <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
            <Button
              size="lg"
              colorScheme="blue"
              onClick={() => navigate("/jobseeker")}
              boxShadow="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.3s ease"
            >
              Job Seeker – Sign Up / Login
            </Button>
            <Button
              size="lg"
              colorScheme="green"
              onClick={() => navigate("/employer")}
              boxShadow="lg"
              _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
              transition="all 0.3s ease"
            >
              Employer – Sign Up / Login
            </Button>
          </Stack>
        </Stack>
        <Box
        flex={{ base: "1", md: "1.3" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        animation={`${fadeInRight} 0.8s ease-out`}
        animationDelay="0.4s"
        animationFillMode="both"
        >
        <Image
          src="images/about-us.png"
          alt="Recruitment illustration"
          maxW={{ base: "100%", md: "115%" }} // prevent over-expansion on mobile
          h="auto"
          objectFit="contain"
          transform="scale(1.05)"
          borderRadius="lg"
          boxShadow="2xl"
          transition="transform 0.3s ease, box-shadow 0.3s ease"
        />
        </Box>
      </Flex>
    </Box>
  );
}
