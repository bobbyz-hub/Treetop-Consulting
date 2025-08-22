import { 
  Box, Button, FormControl, FormLabel, Input, Stack, Textarea, Avatar, Text 
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function JobSeekerProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setFormData(prev => ({ ...prev, photo: reader.result }));
    reader.readAsDataURL(file);
  };

  const handleCVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setFormData(prev => ({ ...prev, cv: reader.result, cvName: file.name }));
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all fields exist
    const completeData = {
      name: formData.name || "",
      phone: formData.phone || "",
      email: formData.email || "",
      jobTitle: formData.jobTitle || "",
      skills: formData.skills || "",
      experience: formData.experience || "",
      photo: formData.photo || "",
      cv: formData.cv || "",
      cvName: formData.cvName || ""
    };

    localStorage.setItem("jobseeker_user", JSON.stringify(completeData));

    // Navigate after saving
    navigate("/jobseeker-dashboard");
  };

  return (
    <Box maxW="600px" mx="auto" mt={10} p={6} shadow="lg" borderRadius="md">
      <form onSubmit={handleSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Profile Photo</FormLabel>
            <Box position="relative" display="inline-block">
              <Avatar
                src={formData.photo || ""}
                name={formData.name || "User"}
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
            <Input name="name" value={formData.name} onChange={handleChange} required />
          </FormControl>

          <FormControl>
            <FormLabel>Phone Number</FormLabel>
            <Input name="phone" value={formData.phone} onChange={handleChange} required />
          </FormControl>

          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </FormControl>

          <FormControl>
            <FormLabel>Job Title</FormLabel>
            <Input name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Skills</FormLabel>
            <Textarea name="skills" value={formData.skills} onChange={handleChange} placeholder="List your skills..." />
          </FormControl>

          <FormControl>
            <FormLabel>Experience</FormLabel>
            <Textarea name="experience" value={formData.experience} onChange={handleChange} placeholder="Briefly describe your work experience" />
          </FormControl>

          <FormControl>
            <FormLabel>Upload CV</FormLabel>
            <Input type="file" accept=".pdf,.doc,.docx" onChange={handleCVUpload} />
            {formData.cvName && <Text mt={2} fontSize="sm" color="gray.600">Current: {formData.cvName}</Text>}
          </FormControl>

          <Button type="submit" colorScheme="blue">Save & Continue</Button>
        </Stack>
      </form>
    </Box>
  );
}
