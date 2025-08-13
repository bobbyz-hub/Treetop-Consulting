import { VStack, Heading, Input, Button, FormControl, FormLabel, Textarea } from "@chakra-ui/react";

export default function CompanyRequestForm() {
  return (
    <VStack spacing={4} align="stretch">
      <Heading size="lg">Company Staff Request</Heading>

      <FormControl>
        <FormLabel>Company Name</FormLabel>
        <Input placeholder="Enter company name" />
      </FormControl>

      <FormControl>
        <FormLabel>Contact Email</FormLabel>
        <Input type="email" placeholder="Enter contact email" />
      </FormControl>

      <FormControl>
        <FormLabel>Job Description</FormLabel>
        <Textarea placeholder="Describe the staff you need" />
      </FormControl>

      <Button colorScheme="blue">Submit</Button>
    </VStack>
  );
}
