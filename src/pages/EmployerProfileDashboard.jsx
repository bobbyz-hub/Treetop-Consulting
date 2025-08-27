import {
    Box, Button, FormControl, FormLabel, Input, Stack,
    Avatar, Text, VStack, Textarea, Divider, HStack
  } from "@chakra-ui/react";
  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  
  export default function EmployerProfileDashboard() {
    const navigate = useNavigate();
  
    const initialEmployer = {
      companyName: "",
      email: "",
      phone: "",
      website: "",
      description: "",
      logo: "",
      jobs: [] // multiple job offers
    };
  
    const [employer, setEmployer] = useState(initialEmployer);
    const [editMode, setEditMode] = useState(true);
  
    const [newJob, setNewJob] = useState({
      title: "",
      description: "",
      offer: "",
      pricing: ""
    });
  
    useEffect(() => {
      const savedEmployer = JSON.parse(localStorage.getItem("employer_user"));
      if (savedEmployer) {
        setEmployer({ ...initialEmployer, ...savedEmployer, jobs: savedEmployer.jobs || [] });
        setEditMode(false);
      }
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setEmployer(prev => ({ ...prev, [name]: value }));
    };
  
    const handleLogoUpload = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onloadend = () => setEmployer(prev => ({ ...prev, logo: reader.result }));
      reader.readAsDataURL(file);
    };
  
    const handleSave = () => {
      const completeData = { ...initialEmployer, ...employer };
      localStorage.setItem("employer_user", JSON.stringify(completeData));
      setEmployer(completeData);
      setEditMode(false);
    };
  
    const handleLogout = () => {
      localStorage.removeItem("employer_user");
      setEmployer(initialEmployer);
      setEditMode(true);
      navigate("/"); // send them home after logout
    };
  
    const handleJobChange = (e) => {
      const { name, value } = e.target;
      setNewJob(prev => ({ ...prev, [name]: value }));
    };
  
    const addJob = () => {
      if (!newJob.title || !newJob.pricing) return; // must have title and pricing
      const updatedJobs = [...employer.jobs, newJob];
      const updatedEmployer = { ...employer, jobs: updatedJobs };
      setEmployer(updatedEmployer);
      localStorage.setItem("employer_user", JSON.stringify(updatedEmployer));
      setNewJob({ title: "", description: "", offer: "", pricing: "" }); // reset form
    };
  
    const deleteJob = (index) => {
      const updatedJobs = employer.jobs.filter((_, idx) => idx !== index);
      const updatedEmployer = { ...employer, jobs: updatedJobs };
      setEmployer(updatedEmployer);
      localStorage.setItem("employer_user", JSON.stringify(updatedEmployer));
    };
  
    return (
      <Box maxW="700px" mx="auto" mt={10} p={6} shadow="md" borderRadius="md">
        <VStack spacing={6} align="stretch">
          {editMode ? (
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Company Logo</FormLabel>
                <Box position="relative" display="inline-block">
                  <Avatar
                    src={employer.logo || ""}
                    name={employer.companyName || "Company"}
                    size="xl"
                    cursor="pointer"
                    onClick={() => document.getElementById("logoInput").click()}
                  />
                  <Input
                    id="logoInput"
                    type="file"
                    accept="image/png,image/jpeg"
                    display="none"
                    onChange={handleLogoUpload}
                  />
                  <Text fontSize="sm" color="gray.500" mt={2}>
                    Click logo to upload/change
                  </Text>
                </Box>
              </FormControl>
  
              <FormControl>
                <FormLabel>Company Name</FormLabel>
                <Input name="companyName" value={employer.companyName} onChange={handleChange} required />
              </FormControl>
  
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" value={employer.email} onChange={handleChange} required />
              </FormControl>
  
              <FormControl>
                <FormLabel>Phone Number</FormLabel>
                <Input name="phone" value={employer.phone} onChange={handleChange} required />
              </FormControl>
  
              <FormControl>
                <FormLabel>Website</FormLabel>
                <Input name="website" value={employer.website} onChange={handleChange} />
              </FormControl>
  
              <FormControl>
                <FormLabel>Company Description</FormLabel>
                <Textarea
                  name="description"
                  value={employer.description}
                  onChange={handleChange}
                  placeholder="Tell jobseekers about your company..."
                />
              </FormControl>
  
              <Button colorScheme="blue" onClick={handleSave}>Save & Continue</Button>
            </Stack>
          ) : (
            <VStack align="start" spacing={3} w="100%">
              <Text>{employer.logo && <Avatar src={employer.logo} size="xl" />}</Text>
              <Text><strong>Company:</strong> {employer.companyName}</Text>
              <Text><strong>Email:</strong> {employer.email}</Text>
              <Text><strong>Phone:</strong> {employer.phone}</Text>
              <Text><strong>Website:</strong> {employer.website || "Not provided"}</Text>
              <Text><strong>Description:</strong> {employer.description || "Not provided"}</Text>
  
              <Divider my={4} />
              <Text fontSize="lg" fontWeight="bold">Job Offers</Text>
  
              {employer.jobs.length > 0 ? (
                employer.jobs.map((job, idx) => (
                  <Box key={idx} p={3} borderWidth="1px" borderRadius="md" w="100%">
                    <Text><strong>Title:</strong> {job.title}</Text>
                    <Text><strong>Description:</strong> {job.description || "Not provided"}</Text>
                    <Text><strong>Pricing:</strong> {job.pricing}</Text>
                    <HStack mt={2}>
                      <Button colorScheme="red" size="sm" onClick={() => deleteJob(idx)}>Delete</Button>
                    </HStack>
                  </Box>
                ))
              ) : (
                <Text>No job offers posted yet.</Text>
              )}
  
              <Divider my={4} />
              <Text fontSize="md" fontWeight="semibold">Add New Job Offer</Text>
              <FormControl>
                <FormLabel>Job Title</FormLabel>
                <Input name="title" value={newJob.title} onChange={handleJobChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Job Description</FormLabel>
                <Textarea name="description" value={newJob.description} onChange={handleJobChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Pricing</FormLabel>
                <Input name="pricing" value={newJob.pricing} onChange={handleJobChange} placeholder="e.g. ₦150,000" />
              </FormControl>
              <Button colorScheme="green" onClick={addJob}>Add Job</Button>
  
              <Stack direction="row" spacing={4} mt={6}>
                <Button colorScheme="blue" onClick={() => setEditMode(true)}>Edit Profile</Button>
                <Button colorScheme="red" onClick={handleLogout}>Logout</Button>
              </Stack>
            </VStack>
          )}
        </VStack>
      </Box>
    );
  }
  