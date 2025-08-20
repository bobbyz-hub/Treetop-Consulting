import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SignUpForm({ role }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Call backend API to register user
    // 2. Auto-create an empty profile in backend
    // 3. Redirect to complete profile page
    navigate(`/${role}-profile`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={4}>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" required />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input type="password" required />
        </FormControl>
        <Button type="submit" colorScheme="blue" w="full">
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}
