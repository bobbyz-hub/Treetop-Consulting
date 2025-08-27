import { Box, VStack, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionImage = motion(Image);
const MotionHeading = motion(Box);

export default function Recommended() {
  const logos = [
    "./images/Eazicred.png",
    "./images/digital.png",
    "./images/help.png",
    "./images/house.png",
    "./images/novotech.png",
    "./images/Rp.png",
    "./images/sign.png",
    "./images/wakacredit.png",
    "./images/bird.jpg",
    "./images/asc.jpeg",
    "./images/gilpins.jpg",
    "./images/ideo.jpg",
    "./images/farm.jpg",
    "./images/apogee.png",
    "./images/cleftrock.png",
    "./images/interior.png",
  ];

  return (
    <Box bg="gray.100" py={12}>
    <VStack spacing={8} align="center">
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
            Treetop Consulting Ltd is a trusted partner for delivering top-tier global recruitment solutions.
      </MotionHeading>

      <SimpleGrid 
        columns={{ base: 2, md: 3, lg: 5 }} 
        spacing={6} 
        w="100%" 
        maxW="1200px"
      >
        {logos.map((src, index) => (
          <MotionImage
            key={index}
            src={src}
            alt={`Logo ${index + 1}`}
            borderRadius="md"
            boxShadow="md"
            w="100%"
            h="150px"
            objectFit="contain"
            bg="white"
            p={4}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          />
        ))}
      </SimpleGrid>
    </VStack>
    </Box>
  );
}

