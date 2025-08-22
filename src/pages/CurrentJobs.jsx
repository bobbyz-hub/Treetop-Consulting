import {
    Box,
    Heading,
    Text,
    VStack,
    Button,
    SimpleGrid,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  import { motion } from "framer-motion";

  const MotionBox = motion(Box);
  const MotionHeading = motion(Box);
  export default function CurrentJobs() {
    const navigate = useNavigate();
  
    // Example job listings
    const jobs = [
      {
        id: 1,
        title: "Frontend Developer",
        location: "Lagos, Nigeria",
        description: "Build and maintain user-friendly web interfaces using React.",
      },
      {
        id: 2,
        title: "HR Officer",
        location: "Abuja, Nigeria",
        description: "Manage recruitment processes and employee engagement.",
      },
      {
        id: 3,
        title: "Sales Executive",
        location: "Port Harcourt, Nigeria",
        description: "Drive sales growth and maintain strong client relationships.",
      },
    ];
  
    // Handle apply logic
    const handleApply = (jobId) => {
      const isLoggedIn = localStorage.getItem("user"); // check if logged in
  
      if (isLoggedIn) {
        navigate(`/apply/${jobId}`); // go to application form
      } else {
        navigate("/jobseeker"); // send to signup/login
      }
    };
  
    return (
      <Box py={12} bg="gray.50">
        <VStack spacing={6} textAlign="center" mb={8}>
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
            transition: { duration: 3, ease: "linear", repeat: Infinity },
          }}
          viewport={{ once: false }}
          sx={{
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Current Job Openings
        </MotionHeading>
          <Text fontSize="lg" color="gray.600">
            Explore opportunities and apply today
          </Text>
        </VStack>
  
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} px={6}>
          {jobs.map((job) => (
            <Card key={job.id} shadow="lg" borderRadius="xl" p={4}>
              <CardHeader>
                <Heading size="md" color="blue.500">
                  {job.title}
                </Heading>
                <Text fontSize="sm" color="gray.500">
                  {job.location}
                </Text>
              </CardHeader>
              <CardBody>
                <Text>{job.description}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="blue"
                  w="full"
                  borderRadius="md"
                  _hover={{ bg: "blue.600" }}
                  onClick={() => handleApply(job.id)}
                >
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    );
  }
  