import {
  Box,
  Heading,
  Text,
  Avatar,
  Stack,
  Container,
  IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MotionHeading = motion(Heading);

// Testimonials data
const testimonials = [
  {
    name: "kayode Olufemi",
    role: "Business Owner",
    feedback:
      "Fast, simple, and effective—I found the help my business needed here.",
    image: "/images/lawyer.webp",
  },
  {
    name: "Adeyemi Johnson",
    role: "HR Manager",
    feedback:
      "We’ve found top talent through this website. It has become our go-to recruitment partner.",
    image: "/images/seriousman.webp",
  },
  {
    name: "Fatima Abubakar",
    role: "Administrative Assistant",
    feedback:
      "I really appreciate how smooth the application process was. Everything felt professional.",
    image: "/images/face2.webp",
  },
  {
    name: "Tunde Balogun",
    role: "Civil Engineer",
    feedback:
      "Very reliable recruitment site! I was connected to the right company without stress.",
    image: "/images/face4.webp",
  },
  {
    name: "Yetunde Oluwaseyi",
    role: "Project Manager",
    feedback:
      "We’ve been able to recruit qualified professionals quickly and efficiently.",
    image: "/images/officewoman.webp",
  },
];

// Custom Arrows (desktop only)
function SampleNextArrow({ onClick }) {
  return (
    <IconButton
      aria-label="Next"
      icon={<ChevronRightIcon boxSize={8} />}
      onClick={onClick}
      position="absolute"
      right="-50px"
      top="50%"
      transform="translateY(-50%)"
      bg="green.500"
      color="white"
      _hover={{ bg: "green.600" }}
      rounded="full"
      shadow="lg"
      zIndex={2}
      display={{ base: "none", lg: "flex" }} // only desktop
    />
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <IconButton
      aria-label="Previous"
      icon={<ChevronLeftIcon boxSize={8} />}
      onClick={onClick}
      position="absolute"
      left="-50px"
      top="50%"
      transform="translateY(-50%)"
      bg="green.500"
      color="white"
      _hover={{ bg: "green.600" }}
      rounded="full"
      shadow="lg"
      zIndex={2}
      display={{ base: "none", lg: "flex" }} // only desktop
    />
  );
}

export default function Testimonials() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  // ✅ Fix: detect screen size on mount + resize
  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };
    updateSlides(); // run on mount
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow, // controlled by state
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Box bg="gray.50" py={16} position="relative">
      <Container maxW={{ base: "full", md: "6xl" }} px={{ base: 2, md: 0 }}>
        <MotionHeading
          as="h2"
          textAlign="center"
          fontSize="4xl"
          fontWeight="bold"
          bgGradient="linear(to-r, blue.500, green.400, blue.500)"
          bgClip="text"
          initial={{ backgroundPosition: "200% center" }}
          whileInView={{
            backgroundPosition: ["200% center", "-200% center"],
            transition: { duration: 3, ease: "linear", repeat: Infinity },
          }}
          viewport={{ once: false }}
          sx={{
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          mb={10}
        >
          What People Are Saying
        </MotionHeading>

        <Slider {...settings}>
          {testimonials.map((t, index) => (
            <Box
              key={index}
              p={6}
              mx={{ base: 0, md: 3 }}
              rounded="2xl"
              shadow="lg"
              bg="white"
              _hover={{ shadow: "2xl" }}
              textAlign="center"
              w="100%"
            >
              <Stack spacing={4} align="center">
                <Avatar src={t.image} size="xl" />
                <Text fontWeight="bold">{t.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {t.role}
                </Text>
                <Text fontSize="md" color="gray.700">
                  “{t.feedback}”
                </Text>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Container>
    </Box>
  );
}
