import { VStack, Heading, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";

export default function JobSeekerForm() {
  return (
    <VStack spacing={4} align="stretch">
      <Heading size="lg">Job Seeker Registration</Heading>

      <FormControl>
        <FormLabel>Full Name</FormLabel>
        <Input placeholder="Enter your name" />
      </FormControl>

      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Enter your email" />
      </FormControl>

      <FormControl>
        <FormLabel>Upload CV</FormLabel>
        <Input type="file" />
      </FormControl>

      <Button colorScheme="teal">Submit</Button>
    </VStack>
  );
}
