import {
  VStack,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Box,
  Card,
  CardBody,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobSeekerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobTitle: "",
    cv: null,
  });

  const toast = useToast();
  const navigate = useNavigate();

  // handle input change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.jobTitle || !formData.cv) {
      toast({
        title: "Missing Fields",
        description: "Please complete all fields before submitting.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Save to localStorage (simulate login)
    localStorage.setItem("jobSeeker", JSON.stringify(formData));

    toast({
      title: "Registration Successful 🎉",
      description: "You are now logged in as a Job Seeker.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    // Redirect to job application page (or home)
    navigate("/");
  };

  return (
    <Box py={10} px={4} display="flex" justifyContent="center">
      <Card w={{ base: "100%", md: "500px" }} shadow="lg" borderRadius="xl">
        <CardBody>
          <form onSubmit={handleSubmit}>
            <VStack spacing={5} align="stretch">
              <Heading size="lg" textAlign="center" color="teal.600">
                Job Seeker Registration
              </Heading>

              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Job Title</FormLabel>
                <Input
                  name="jobTitle"
                  placeholder="e.g. Secretary"
                  value={formData.jobTitle}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Upload CV</FormLabel>
                <Input type="file" name="cv" onChange={handleChange} />
              </FormControl>

              <Button
                type="submit"
                colorScheme="teal"
                size="md"
                alignSelf="flex-end"
                borderRadius="md"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </CardBody>
      </Card>
    </Box>
  );
}
