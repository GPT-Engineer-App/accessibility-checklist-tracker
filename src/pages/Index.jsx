import React, { useState } from "react";
import {
  Container,
  VStack,
  HStack,
  Input,
  Button,
  Checkbox,
  Progress,
  Text,
  Box,
  Heading,
  Divider,
} from "@chakra-ui/react";

const defaultChecklist = [
  { id: 1, text: "Ensure all images have alt text", type: "implementation" },
  { id: 2, text: "Use semantic HTML elements", type: "implementation" },
  { id: 3, text: "Ensure keyboard navigability", type: "post-implementation" },
  { id: 4, text: "Test with screen readers", type: "post-implementation" },
];

const Index = () => {
  const [projectName, setProjectName] = useState("");
  const [checklist, setChecklist] = useState(defaultChecklist);
  const [checkedItems, setCheckedItems] = useState([]);

  const handleProjectNameChange = (e) => setProjectName(e.target.value);

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateProgress = () => {
    return (checkedItems.length / checklist.length) * 100;
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Accessibility Checklist
        </Heading>
        <Input
          placeholder="Enter Project Name"
          value={projectName}
          onChange={handleProjectNameChange}
        />
        <Divider />
        <Box width="100%">
          <Heading as="h2" size="md" mb={4}>
            Implementation
          </Heading>
          {checklist
            .filter((item) => item.type === "implementation")
            .map((item) => (
              <Checkbox
                key={item.id}
                isChecked={checkedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              >
                {item.text}
              </Checkbox>
            ))}
        </Box>
        <Box width="100%">
          <Heading as="h2" size="md" mb={4}>
            Post-Implementation
          </Heading>
          {checklist
            .filter((item) => item.type === "post-implementation")
            .map((item) => (
              <Checkbox
                key={item.id}
                isChecked={checkedItems.includes(item.id)}
                onChange={() => handleCheckboxChange(item.id)}
              >
                {item.text}
              </Checkbox>
            ))}
        </Box>
        <Divider />
        <Box width="100%">
          <Text>Progress</Text>
          <Progress value={calculateProgress()} size="lg" colorScheme="green" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;