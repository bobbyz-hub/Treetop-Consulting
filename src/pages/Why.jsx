import { VStack, Box, Container, HStack, Icon, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

// Motion components
const MotionBox = motion(Box);
const MotionHStack = motion(HStack);
const MotionIcon = motion(Icon);
const MotionImage = motion(Image);
const MotionHeading = motion(Box);

export default function Why() {
  const leftVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6 }
    })
  };

  // Bounce animation for icons
  const iconVariants = {
    hidden: { scale: 0 },
    visible: (i) => ({
      scale: [0, 1.3, 1],
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        type: "spring",
        stiffness: 300
      }
    })
  };

  return (
    <Box bg="gray.50" py={12}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          
          {/* Left side image */}
          <MotionBox
            variants={leftVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <MotionImage
              src="/images/front-building.webp" 
              alt="Why Choose Us"
              borderRadius="lg"
              boxShadow="lg"
              w="100%"
              h="auto"
            />
          </MotionBox>

          {/* Right side text */}
          <MotionBox
            variants={rightVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <VStack spacing={6} align="start">
              
              {/* Animated Gradient Heading */}
              <MotionHeading
                as="h2"
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
                Why Choose Us
              </MotionHeading>

              {[
                "Delivering Cutting-Edge Recruitment Services across the Globe.",
                "Specialists in our Chosen Vertical Markets.",
                "Engaging Intellectual Minds in Professional Service Delivery."
              ].map((text, index) => (
                <MotionHStack
                  key={index}
                  spacing={3}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={itemVariants}
                  custom={index}
                >
                  <MotionIcon
                    as={CheckCircleIcon}
                    color="green.500"
                    boxSize={6}
                    variants={iconVariants}
                    custom={index}
                    borderRadius="full"
                    cursor="pointer"
                    transition="all 0.3s ease-in-out"
                    _hover={{
                      boxShadow: "0 0 12px rgba(72, 187, 120, 0.8), 0 0 6px rgba(72, 187, 120, 0.4)"
                    }}
                  />
                  <Text fontSize="lg" color="gray.700">
                    {text}
                  </Text>
                </MotionHStack>
              ))}
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
