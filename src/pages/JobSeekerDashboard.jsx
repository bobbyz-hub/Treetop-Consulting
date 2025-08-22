import { Box, VStack, Heading, Stack, FormControl, FormLabel, Input, Textarea, Avatar, Button, Text, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function JobSeekerDashboard() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    jobTitle: "",
    skills: "",
    experience: "",
    photo: "",
    cv: "",
    cvName: ""
  });
  const [editMode, setEditMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("jobseeker_user"));
    if (savedUser) {
      setUser(savedUser);
    } else {
      navigate("/jobseeker-profile");
    }
  }, [navigate]);

  const handleChange = (e) => setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setUser(prev => ({ ...prev, photo: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setUser(prev => ({ ...prev, cv: reader.result, cvName: file.name }));
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("jobseeker_user", JSON.stringify(user));
    setEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("jobseeker_user");
    navigate("/jobseeker-profile");
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} shadow="md" borderRadius="md">
      <VStack spacing={6} align="stretch">
        <Heading size="lg">Welcome, {user.name || "User"}</Heading>

        {editMode ? (
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Profile Photo</FormLabel>
              <Box position="relative" display="inline-block">
                <Avatar
                  src={user.photo || ""}
                  name={user.name || "User"}
                  size="xl"
                  cursor="pointer"
                  onClick={() => document.getElementById("dashboardPhoto").click()}
                />
                <Input
                  id="dashboardPhoto"
                  type="file"
                  accept="image/png,image/jpeg"
                  display="none"
                  onChange={handlePhotoUpload}
                />
              </Box>
            </FormControl>

            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input name="name" value={user.name} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input name="email" value={user.email} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Job Title</FormLabel>
              <Input name="jobTitle" value={user.jobTitle} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Skills</FormLabel>
              <Textarea name="skills" value={user.skills} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Experience</FormLabel>
              <Textarea name="experience" value={user.experience} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Upload CV</FormLabel>
              <Input type="file" accept=".pdf,.doc,.docx" onChange={handleCVUpload} />
              {user.cvName && <Text mt={2} fontSize="sm" color="gray.600">Current: {user.cvName}</Text>}
            </FormControl>

            <Stack direction="row" spacing={4}>
              <Button colorScheme="green" onClick={handleSave}>Save</Button>
              <Button variant="outline" onClick={() => setEditMode(false)}>Cancel</Button>
            </Stack>
          </Stack>
        ) : (
          <VStack align="start" spacing={3}>
            <Text><strong>Email:</strong> {user.email}</Text>
            <Text><strong>Job Title:</strong> {user.jobTitle || "Not specified"}</Text>
            <Text><strong>CV:</strong> {user.cvName ? (
              <Link href={user.cv} target="_blank" color="teal.500">{user.cvName}</Link>
            ) : "No CV uploaded"}</Text>

            <Stack direction="row" spacing={4} mt={4}>
              <Button colorScheme="blue" onClick={() => setEditMode(true)}>Edit Profile</Button>
              <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
            </Stack>
          </VStack>
        )}
      </VStack>
    </Box>
  );
}
