import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ role }) {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Authenticate user with backend
    // 2. Check if profile exists
    // If profile exists → go to dashboard
    // If not → redirect to complete profile
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
        <Button type="submit" colorScheme="green" w="full">
          Login
        </Button>
      </Stack>
    </form>
  );
}
