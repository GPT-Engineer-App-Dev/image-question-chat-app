import React, { useState } from "react";
import { Container, VStack, Input, Button, Text, Image, Box, useToast } from "@chakra-ui/react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const toast = useToast();

  const handleImageUpload = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleSubmit = async () => {
    if (!selectedImage || !question) {
      toast({
        title: "Error",
        description: "Please upload an image and enter a question.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch("https://okligg.buildship.run/image-chat", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: selectedImage,
          question: question,
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setAnswer(data);
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error processing your request.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {selectedImage && (
          <Box boxSize="sm">
            <Image src={selectedImage} alt="Uploaded" objectFit="cover" />
          </Box>
        )}
        <Input
          placeholder="Type your question here..."
          value={question}
          onChange={handleQuestionChange}
        />
        <Button colorScheme="blue" onClick={handleSubmit}>
          Submit
        </Button>
        {answer && (
          <Text fontSize="lg" mt={4}>
            Answer: {answer}
          </Text>
        )}
      </VStack>
    </Container>
  );
};

export default Index;