import { Box, HStack, Link, Icon, Text } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Socials() {
  return (
    <Box textAlign="center" py={6}>
      <Text fontWeight="bold" mb={3}>
        Follow Us
      </Text>
      <HStack spacing={6} justify="center">
        <Link href="https://instagram.com/Consult_treetop" isExternal>
          <Icon as={FaInstagram} boxSize={6} color="pink.500" />
        </Link>
        <Link href="https://twitter.com/ConsultTreetop" isExternal>
          <Icon as={FaTwitter} boxSize={6} color="blue.400" />
        </Link>
        <Link href="https://facebook.com/ConsultTreetop" isExternal>
          <Icon as={FaFacebook} boxSize={6} color="blue.600" />
        </Link>
      </HStack>
    </Box>
  );
}
