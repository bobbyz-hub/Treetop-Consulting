import {
    Box,
    Heading,
    Text,
    Image,
    Stack,
    SimpleGrid,
    Container,
    Button,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import { motion } from "framer-motion";
  
  const MotionBox = motion(Box);
  const MotionHeading = motion(Box);
  
  const blogs = [
    {
      title: "5 Tips to Ace Your Next Job Interview",
      description:
        "Practical advice to help you stand out and impress recruiters during your interviews.",
      image: "/images/front-standing.webp",
      link: "/blogs/1",
    },
    {
      title: "Why Companies Choose Consult Treetop",
      description:
        "Discover why leading organizations trust us to connect them with top talent.",
      image: "/images/back-standing.webp",
      link: "/blogs/2",
    },
    {
      title: "Top In-Demand Skills in Nigeria (2025)",
      description:
        "See the most sought-after skills employers are looking for in today’s job market.",
      image: "/images/standing-with-laptop.webp",
      link: "/blogs/3",
    },
  ];
  
  export default function BlogSection() {
    return (
      <Box bg="gray.50" py={16}>
        <Container maxW="6xl">
          {/* Animated heading */}
          <MotionHeading
            as="h2"
            mb={8}
            textAlign="center"
            fontSize="5xl"
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
            Latest Blogs
          </MotionHeading>
  
          {/* Blog cards with slide-in animation */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
            {blogs.map((blog, index) => (
              <MotionBox
                key={index}
                bg="white"
                shadow="lg"
                rounded="xl"
                overflow="hidden"
                _hover={{ shadow: "2xl" }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  h="200px"
                  w="full"
                  objectFit="cover"
                />
                <Stack p={6} spacing={3}>
                  <Heading size="md">{blog.title}</Heading>
                  <Text color="gray.600">{blog.description}</Text>
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
  
          {/* View all blogs button */}
          <Box textAlign="center" mt={10}>
            <Button as={Link} to="/blogs" colorScheme="blue">
              View All Blogs
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }
  