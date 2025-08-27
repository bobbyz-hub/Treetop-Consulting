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

  const MotionHeading = motion(Box);

  // Nigerian Testimonials
  const testimonials = [
    {
      name: "Chukudi Okafor",
      role: "Software Developer",
      feedback:
        "This platform made my job search easy. I got interviews within a week!",
      image: "/images/face1.webp",
    },
    {
      name: "Adeyemi Johnson",
      role: "HR Manager",
      feedback:
        "We’ve found top talent through this website. It has become our go-to recruitment partner.",
      image: "/images/face3.webp",
    },
    {
      name: "Fatima Abubakar",
      role: "Data Analyst",
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
      name: "Olivia Li Min",
      role: "Project Manager",
      feedback:
        "We’ve been able to recruit qualified professionals quickly and efficiently.",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg",
    },
  ];
  
  // Custom Arrow Components
  function SampleNextArrow(props) {
    const { onClick } = props;
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
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
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
      />
    );
  }
  
  export default function Testimonials() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: { slidesToShow: 2 },
        },
        {
          breakpoint: 600,
          settings: { slidesToShow: 1 },
        },
      ],
    };
  
    return (
      <Box bg="gray.50" py={16} position="relative">
        <Container maxW="6xl">
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
                transition: { duration: 3, ease: "linear", repeat: Infinity }
            }}
            viewport={{ once: false }}
            sx={{
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
            }}
      >
            What People Are Saying
          </MotionHeading>
  
          <Slider {...settings}>
            {testimonials.map((t, index) => (
              <Box
                key={index}
                p={6}
                mx={3}
                rounded="2xl"
                shadow="lg"
                bg="white"
                _hover={{ shadow: "2xl" }}
                textAlign="center"
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
  