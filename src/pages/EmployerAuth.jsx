import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

export default function EmployerAuth() {
  return (
    <Box maxW="500px" mx="auto" mt={10} p={6} shadow="md" borderRadius="md">
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>Sign Up</Tab>
          <Tab>Login</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SignUpForm role="employer" />
          </TabPanel>
          <TabPanel>
            <LoginForm role="employer" />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
