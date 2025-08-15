import { Box, Heading, Text, SimpleGrid, VStack, Icon, Flex, Button } from "@chakra-ui/react";
import { FaUsers, FaClipboardCheck, FaHandshake, FaUserCog, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

const MotionHeading = motion(Box);
const MotionButton = motion(Button);

export default function Services() {
  const handleLearnMoreClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const services = [
    {
      title: "Recruitment / Selection",
      description:
        "We recruit across different sectors with focus on Lower level to Top Executive Management positions. Our Recruitment & Selection process is designed to meet business needs in relation to the categories below.",
      icon: FaUsers
    },
    {
      title: "Psychometric Assessment / Assessment Center",
      description:
        "One major setback in recruitment is Recruitment Error; some organizations have fallen into the hurdle of bad hire, due to ineffective recruitment process.",
      icon: FaClipboardCheck
    },
    {
      title: "Outsourcing | Employee Relations",
      description:
        "For effectiveness and efficiency of core business operations, we partner with Clients across various business sectors to drive personnel Management, with focus on profitability and increased productivity.",
      icon: FaHandshake
    },
    {
      title: "Personnel Management",
      description:
        "Most Organizations encounter challenges such as frequency of hiring demands, high attrition rate, decreased productivity and poor adhoc services.",
      icon: FaUserCog
    },
    {
      title: "Exit Management",
      description:
        "Employees Career Progression upon exit consultation service. Management and documentation of Termination process.",
      icon: FaSignOutAlt
    },
    {
      title: "Background Check",
      description:
        "Credentials & Vital Document Verification. Previous Employment Check.",
      icon: FaSearch
    }
  ];

  return (
    <Box py={10}>
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
            Services
      </MotionHeading>


      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {services.map((service, index) => (
          <Box
            key={index}
            p={6}
            bg="gray.50"
            borderRadius="lg"
            boxShadow="md"
            role="group"
            _hover={{
              boxShadow: "xl",
              transform: "translateY(-5px)"
            }}
            transition="all 0.3s ease"
          >
            <VStack align="start" spacing={3}>
              {/* Icon with group hover */}
              <Flex
                w={12}
                h={12}
                borderRadius="full"
                bg="blue.100"
                align="center"
                justify="center"
                transition="all 0.3s ease"
                _groupHover={{
                  bg: "blue.500"
                }}
              >
                <Icon
                  as={service.icon}
                  w={6}
                  h={6}
                  color="blue.600"
                  transition="all 0.3s ease"
                  _groupHover={{ color: "white" }}
                />
              </Flex>

              <Heading size="md">{service.title}</Heading>
              <Text color="gray.600">{service.description}</Text>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
      {/* Animated Button with Smooth Scroll */}
      <Flex justify="center" align="center" mt={4}>
        <MotionButton
              as={RouterLink}
              to="/services"
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
      </Flex>
    </Box>
  );
}
