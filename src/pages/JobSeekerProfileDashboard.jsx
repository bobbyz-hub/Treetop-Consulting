import {
  Box, Button, FormControl, FormLabel, Input, Stack, Textarea,
  Avatar, Text, VStack, Link
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function JobSeekerProfileDashboard() {
  const navigate = useNavigate();

  const initialUser = {
    name: "",
    phone: "",
    email: "",
    jobTitle: "",
    skills: "",
    experience: "",
    photo: "",
    cv: "",
    cvName: "",
    location: "",
    sector: ""
  };

  const [user, setUser] = useState(initialUser);
  const [editMode, setEditMode] = useState(true); // start in profile/edit mode

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("jobseeker_user"));
    if (savedUser) {
      setUser(savedUser);
      setEditMode(false); // if user exists, show dashboard view
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

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
    const completeData = { ...initialUser, ...user };
    localStorage.setItem("jobseeker_user", JSON.stringify(completeData));
    setUser(completeData);
    setEditMode(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("jobseeker_user");
    setUser(initialUser);
    setEditMode(true);
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} shadow="md" borderRadius="md">
      <VStack spacing={6} align="stretch">
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
                  onClick={() => document.getElementById("photoInput").click()}
                />
                <Input
                  id="photoInput"
                  type="file"
                  accept="image/png,image/jpeg"
                  display="none"
                  onChange={handlePhotoUpload}
                />
                <Text fontSize="sm" color="gray.500" mt={2}>Click photo to upload/change</Text>
              </Box>
            </FormControl>

            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input name="name" value={user.name} onChange={handleChange} required />
            </FormControl>

            <FormControl>
              <FormLabel>Phone Number</FormLabel>
              <Input name="phone" value={user.phone} onChange={handleChange} required />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" name="email" value={user.email} onChange={handleChange} required />
            </FormControl>

            <FormControl>
              <FormLabel>Job Title</FormLabel>
              <Input name="jobTitle" value={user.jobTitle} onChange={handleChange} />
            </FormControl>

            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input name="location" value={user.location} onChange={handleChange} placeholder="e.g. Ogba" />
            </FormControl>

            <FormControl>
              <FormLabel>Sector</FormLabel>
              <Input name="sector" value={user.sector} onChange={handleChange} placeholder="e.g. Restaurant" />
            </FormControl>

            <FormControl>
              <FormLabel>Skills</FormLabel>
              <Textarea name="skills" value={user.skills} onChange={handleChange} placeholder="List your skills..." />
            </FormControl>

            <FormControl>
              <FormLabel>Experience</FormLabel>
              <Textarea name="experience" value={user.experience} onChange={handleChange} placeholder="Briefly describe your work experience" />
            </FormControl>

            <FormControl>
              <FormLabel>Upload CV</FormLabel>
              <Input type="file" accept=".pdf,.doc,.docx" onChange={handleCVUpload} />
              {user.cvName && <Text mt={2} fontSize="sm" color="gray.600">Current: {user.cvName}</Text>}
            </FormControl>

            <Button colorScheme="blue" onClick={handleSave}>Save & Continue</Button>
          </Stack>
        ) : (
          <VStack align="start" spacing={3}>
            <Text>
              <strong>Photo:</strong>{" "}
              {user.photo && <Avatar src={user.photo} size="xl" />}
            </Text>
            <Text><strong>Name:</strong> {user.name}</Text>
            <Text><strong>Email:</strong> {user.email}</Text>
            <Text><strong>Phone:</strong> {user.phone}</Text>
            <Text><strong>Job Title:</strong> {user.jobTitle || "Not specified"}</Text>
            <Text><strong>Location:</strong> {user.location || "Not specified"}</Text>
            <Text><strong>Sector:</strong> {user.sector || "Not specified"}</Text>
            <Text><strong>Skills:</strong> {user.skills || "None"}</Text>
            <Text><strong>Experience:</strong> {user.experience || "None"}</Text>
            <Text>
              <strong>CV:</strong>{" "}
              {user.cvName ? (
                <Link href={user.cv} target="_blank" color="teal.500">{user.cvName}</Link>
              ) : "No CV uploaded"}
            </Text>

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
