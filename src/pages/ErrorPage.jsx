import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useRouteError, useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Box textAlign="center" mt="100px" px={6}>
      <Heading as="h1" size="2xl" mb={4} color="red.500">
        Oops!
      </Heading>
      <Text fontSize="lg" mb={6}>
        Sorry, an unexpected error occurred.
      </Text>
      <Text fontSize="md" color="gray.500" mb={6}>
        {error.statusText || error.message || "404 Not Found"}
      </Text>
      <Button colorScheme="blue" onClick={() => navigate("/")}>
        Go Back Home
      </Button>
    </Box>
  );
}

