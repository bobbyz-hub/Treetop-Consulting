import {
  Box,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  Divider,
  useColorModeValue,
  HStack,
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaSearch,
  FaBullseye,
  FaChartLine,
  FaClipboardList,
  FaUsers,
  FaUserCog,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Box);

export default function ServicePage() {
  const headingColor = useColorModeValue("teal.600", "teal.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");

  return (
    <Box px={{ base: 4, md: 8 }} py={{ base: 6, md: 10 }} maxW="900px" mx="auto">
      <VStack align="start" spacing={10}>
        {/* Page Title */}
        <MotionHeading
          as="h2"
          textAlign="center"
          fontSize="5xl"
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
        >
          Our Services
        </MotionHeading>

        {/* Service Sections */}
        <Section
          icon={FaUserTie}
          title="Recruitment / Selection"
          text="We recruit across different sectors with focus on Lower level to Top Executive Management positions. Our Recruitment & Selection process is designed to meet business needs in relation to the categories below."
          image="/images/small-meeting.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />

        <Section
          icon={FaSearch}
          title="Executive Search / Headhunting"
          text="The essence of strategic, goal-driven, and transformational professionals at executive management level can never be over-emphasized. As a Strategic HR Solutions provider, we partner with top-tier and reputable brands to target high-caliber talent for key executive roles."
          image="/images/discuss-business.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />

        <Section
          icon={FaBullseye}
          title="Strategic Hire"
          text="The greatest asset of every organization is its employees. We ensure the right hires—especially at managerial levels—to maximize ROI and prevent costly recruitment errors."
          image="/images/strategic-hire.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />

        <Section
          icon={FaChartLine}
          title="Actuarial Placement"
          text="Actuaries play a critical role in organizational sustainability through skills in Financial Valuations, Modelling, Pricing, Product Development, and Underwriting. We champion the value of Actuarial Professionals and connect clients directly with them."
          image="/images/actuarial.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />

        <Section
          icon={FaClipboardList}
          title="Our Recruitment Methodologies"
          text="To reduce recruitment errors, we incorporate Psychometric and Technical Assessments tailored to job levels."
          listItems={[
            "Psychometric / Behavioral / DISC Personality Test",
            "Logical & Critical Reasoning",
            "Problem Solving",
            "Decision making & Judgment",
            "Comprehension",
            "Abstract Reasoning",
            "Visual & Spatial Reasoning",
            "Personality Test",
            "Leadership Based Assessment",
            "Technical Skills Assessment",
          ]}
          image="/images/methodology.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />

        <Section
          icon={FaUsers}
          title="Outsourcing | Employee Relations"
          text="We provide turnkey HR solutions to optimize core business operations, focusing on profitability and productivity."
          image="/images/studying.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />

        <Section
          icon={FaUserCog}
          title="Personnel Management"
          text="We address challenges like frequent hiring needs, high attrition, and low productivity through tailored Employee Management solutions."
          listItems={[
            "HR Audit / Strategic Review",
            "Job Analysis",
            "Policy Development Payroll Administration",
            "Performance Management",
            "Training & Development",
          ]}
          subTitle="Delivery Methodology"
          subText="Our in-house team works collaboratively to deliver satisfaction, including:"
          subList={[
            "Recruitment Specialists for all hiring/replacement needs",
            "HR Strategist for Employee Management",
            "Training/Development Personnel for periodic training programs",
          ]}
          image="/images/personnel.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />

        <Section
          icon={FaSignOutAlt}
          title="Exit Management"
          listItems={[
            "Review of Exit option",
            "Management and documentation of Termination process",
            "Exit interview",
            "Coordination of handover process",
            "Employees Career Progression consultation upon exit",
          ]}
          image="/images/exit.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />

        <Section
          icon={FaShieldAlt}
          title="Background Check Services"
          text="Our checks include but are not limited to:"
          listItems={[
            "Previous Employment Check",
            "Reference Verification",
            "Credentials & Vital Document Verification",
            "Bio Data & Address Verification",
            "Credit Checks",
          ]}
          subTitle="Benefits"
          subList={[
            "Improved Quality of Hire",
            "Increased Workplace Safety",
            "Reduction in Employee Turnover",
          ]}
          image="/images/smiling-woman.webp"
          cardBg={cardBg}
          cardBorder={cardBorder}
        />
      </VStack>
    </Box>
  );
}

function Section({
  icon: Icon,
  title,
  text,
  listItems,
  subTitle,
  subText,
  subList,
  image,
  cardBg,
  cardBorder,
}) {
  return (
    <MotionBox
      w="full"
      p={{ base: 4, md: 6 }}
      borderWidth="1px"
      borderColor={cardBorder}
      borderRadius="lg"
      bg={cardBg}
      boxShadow="sm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <HStack mb={3} spacing={3}>
        {Icon && <Icon size={24} color="teal" />}
        <Heading as="h2" size="lg" color="teal.500">
          {title}
        </Heading>
      </HStack>

      {image && (
        <Image
          src={image}
          alt={title}
          borderRadius="md"
          w="100%"
          maxH="350px"
          objectFit="cover"
          mb={4}
        />
      )}

      {text && (
        <Text mb={4} lineHeight="tall" fontSize={{ base: "sm", md: "md" }}>
          {text}
        </Text>
      )}

      {listItems && (
        <UnorderedList spacing={2} mb={4} fontSize={{ base: "sm", md: "md" }}>
          {listItems.map((item, idx) => (
            <ListItem key={idx}>{item}</ListItem>
          ))}
        </UnorderedList>
      )}

      {subTitle && (
        <Heading as="h3" size="md" mt={4} mb={2} color="teal.400">
          {subTitle}
        </Heading>
      )}
      {subText && (
        <Text mb={4} lineHeight="tall" fontSize={{ base: "sm", md: "md" }}>
          {subText}
        </Text>
      )}
      {subList && (
        <UnorderedList spacing={2} fontSize={{ base: "sm", md: "md" }}>
          {subList.map((item, idx) => (
            <ListItem key={idx}>{item}</ListItem>
          ))}
        </UnorderedList>
      )}
      <Divider mt={6} />
    </MotionBox>
  );
}
