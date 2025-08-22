import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobSeekerAuth() {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({ name: "", email: "", password: "" });
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  // Handle input changes
  const handleSignupChange = (e) => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  // Sign Up
  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem("jobseeker_user", JSON.stringify(signupForm));
    navigate("/jobseeker-profile"); // redirect to profile setup
  };

  // Login
  const handleLogin = (e) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("jobseeker_user"));
    if (savedUser && savedUser.email === loginForm.email && savedUser.password === loginForm.password) {
      navigate("/jobseeker-dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Box maxW="500px" mx="auto" mt={10} p={6} shadow="md" borderRadius="md">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Sign Up</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanels>
          {/* Sign Up Tab */}
          <TabPanel>
            <Box as="form" onSubmit={handleSignup}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" value={signupForm.email} onChange={handleSignupChange} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" value={signupForm.password} onChange={handleSignupChange} />
                </FormControl>
                <Button type="submit" colorScheme="teal">
                  Sign Up
                </Button>
              </Stack>
            </Box>
          </TabPanel>

          {/* Login Tab */}
          <TabPanel>
            <Box as="form" onSubmit={handleLogin}>
              <Stack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" name="email" value={loginForm.email} onChange={handleLoginChange} />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" name="password" value={loginForm.password} onChange={handleLoginChange} />
                </FormControl>
                {error && <Text color="red.500">{error}</Text>}
                <Button type="submit" colorScheme="blue">
                  Login
                </Button>
              </Stack>
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
