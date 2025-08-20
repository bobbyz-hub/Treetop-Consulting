import { Box, Heading, Text, Image, Flex, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionBox = motion(Box);
const MotionHeading = motion(Box);
const MotionButton = motion(Button);

export default function AboutUs() {
  const handleLearnMoreClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box bg="gray.50" py={12}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        gap={8}
        maxW="container.lg"
        mx="auto"
        px={4}
      >
        {/* Image Section */}
        <MotionBox
          flex="1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          _hover={{ transform: "scale(1.05)", opacity: 0.95 }}
        >
          <Image
            src="./images/group-meeting.webp"
            alt="About Treetop Consulting"
            borderRadius="lg"
            boxShadow="lg"
            w="100%"
            h="300px"
            objectFit="cover"
          />
        </MotionBox>

        {/* Text Section */}
        <MotionBox
          flex="1"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <MotionHeading
            as="h2"
            textAlign="center"
            fontSize="4xl"
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
            About Us
          </MotionHeading>

          <Text fontSize="md" color="gray.700" lineHeight="tall" mb={4}>
            Treetop Consulting Ltd is a Strategic HR Consulting firm in Nigeria,
            with the aim of serving clients with practical HR solutions across
            all business sectors.
            <br />
            <br />
            We aim to meet the specific needs of organizations in order to
            deliver optimum services needed. We critically analyze the varying
            needs of clients and proffer feasible and affordable solutions to
            the overall growth of businesses.
          </Text>

          {/* Animated Button with Smooth Scroll */}
          <MotionButton
            as={RouterLink}
            to="/about"
            onClick={handleLearnMoreClick}
            colorScheme="blue"
            size="md"
            mt={2}
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 4px 15px rgba(0, 0, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
          </MotionButton>
        </MotionBox>
      </Flex>
    </Box>
  );
}
