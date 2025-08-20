import { Box, Button, FormControl, FormLabel, Input, Stack, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function EmployerProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save details to backend
    navigate("/employer-dashboard");
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} shadow="lg" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Company Name</FormLabel>
            <Input type="text" required />
          </FormControl>
          <FormControl>
            <FormLabel>Industry</FormLabel>
            <Input type="text" required />
          </FormControl>
          <FormControl>
            <FormLabel>Company Size</FormLabel>
            <Input type="number" placeholder="Number of employees" />
          </FormControl>
          <FormControl>
            <FormLabel>Company Bio</FormLabel>
            <Textarea placeholder="Tell us about your company..." />
          </FormControl>
          <Button type="submit" colorScheme="green">
            Save & Continue
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
