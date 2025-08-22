import {
    Box,
    Heading,
    Text,
    Image,
    Stack,
    SimpleGrid,
    Container,
  } from "@chakra-ui/react";
  import { motion } from "framer-motion";
  
  const MotionBox = motion(Box);
  const MotionHeading = motion(Box);
  
  const blogs = [
    {
      title: "5 Tips to Ace Your Next Job Interview",
      content:
        "Practical advice to help you stand out and impress recruiters during your interviews.",
      image: "/images/front-standing.webp",
    },
    {
      title: "Why Companies Choose Consult Treetop",
      content:
        "Discover why leading organizations trust us to connect them with top talent.",
      image: "/images/back-standing.webp",
    },
    {
      title: "Top In-Demand Skills in Nigeria (2025)",
      content:
        "See the most sought-after skills employers are looking for in today’s job market.",
      image: "/images/standing-with-laptop.webp",
    },
  ];
  
  export default function Blogs() {
    return (
      <Box py={16}>
        <Container maxW="6xl">
          {/* Animated Heading */}
          <MotionHeading
            as="h2"
            mb={8}
            textAlign="center"
            fontSize="5xl"
            fontWeight="bold"
            bgGradient="linear(to-r, blue.500, green.400, blue.500)"
            bgClip="text"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Blogs
          </MotionHeading>
  
          {/* Animated Blog Cards */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {blogs.map((blog, index) => (
              <MotionBox
                key={index}
                bg="white"
                shadow="lg"
                rounded="xl"
                overflow="hidden"
                _hover={{ shadow: "2xl" }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  h="250px"
                  w="full"
                  objectFit="cover"
                />
                <Stack p={6} spacing={4}>
                  <Heading size="md">{blog.title}</Heading>
                  <Text color="gray.700">{blog.content}</Text>
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>
    );
  }
  