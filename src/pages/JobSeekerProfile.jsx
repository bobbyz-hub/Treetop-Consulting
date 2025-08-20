import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function JobSeekerProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save details to backend
    navigate("/jobseeker-dashboard");
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} shadow="lg" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Full Name</FormLabel>
            <Input type="text" required />
          </FormControl>
          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input type="tel" required />
          </FormControl>
          <FormControl>
            <FormLabel>Skills</FormLabel>
            <Textarea placeholder="List your skills..." />
          </FormControl>
          <FormControl>
            <FormLabel>Experience</FormLabel>
            <Textarea placeholder="Briefly describe your work experience" />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Save & Continue
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
