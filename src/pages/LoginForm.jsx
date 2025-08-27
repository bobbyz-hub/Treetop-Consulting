import { Box, Button, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ role }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem(`${role}_user`));
    if (savedUser && savedUser.email === form.email && savedUser.password === form.password) {
      navigate(`/${role}-dashboard`);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        {error && <Text color="red.500">{error}</Text>}
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" name="email" value={form.email} onChange={handleChange} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" name="password" value={form.password} onChange={handleChange} />
        </FormControl>

        <Button type="submit" colorScheme="green" w="full">Login</Button>
      </VStack>
    </Box>
  );
}

