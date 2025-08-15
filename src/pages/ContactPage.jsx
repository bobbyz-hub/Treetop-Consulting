import {
    Box,
    Heading,
    Text,
    Container,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    SimpleGrid,
    VStack,
    HStack,
    Icon
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
  
  const MotionBox = motion(Box);
  const MotionHeading = motion(Box);
  
  export default function ContactPage() {
    return (
      <Container maxW="container.lg" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          
          {/* Left Side - Contact Info */}
          <MotionBox
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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
                Contact Us
           </MotionHeading>
            <Text mb={2}>For questions or more info</Text>
  
            <VStack align="flex-start" spacing={4}>
              <HStack>
                <Icon as={FaMapMarkerAlt} color="blue.500" boxSize={5} />
                <Box>
                  <Text fontWeight="bold">Address</Text>
                  <Text>28 Rainbow Drive, Oregun Road</Text>
                  <Text>Ikeja, Lagos Nigeria.</Text>
                </Box>
              </HStack>
  
              <HStack>
                <Icon as={FaPhoneAlt} color="blue.500" boxSize={5} />
                <Box>
                  <Text fontWeight="bold">Phone Number</Text>
                  <Text>08071824310</Text>
                </Box>
              </HStack>
  
              <HStack>
                <Icon as={FaEnvelope} color="blue.500" boxSize={5} />
                <Box>
                  <Text fontWeight="bold">Email Address</Text>
                  <Text>Akintola.a@consultreetop.com</Text>
                </Box>
              </HStack>
            </VStack>
          </MotionBox>
  
          {/* Right Side - Contact Form */}
          <MotionBox
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
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
                Send us a message
           </MotionHeading>
            <FormControl mb={4}>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Your Email" />
            </FormControl>
            <FormControl mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="blue">Send Message</Button>
          </MotionBox>
  
        </SimpleGrid>
      </Container>
    );
  }
  