import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Container, Heading, VStack } from '@chakra-ui/react';
import { SimpleCBA } from './features/simple/SimpleCBA.jsx';
import { AdvancedCBA } from './features/advanced/AdvancedCBA.jsx';

export function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.md" py={8}>
        <VStack spacing={6} align="stretch">
          <Heading size="lg" textAlign="center" color="blue.800">CBA Analyzer</Heading>
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList>
              <Tab>Simple Version</Tab>
              <Tab>Advanced Version</Tab>
            </TabList>
            <TabPanels>
              <TabPanel bg="white" borderRadius="md" boxShadow="sm">
                <SimpleCBA />
              </TabPanel>
              <TabPanel bg="white" borderRadius="md" boxShadow="sm">
                <AdvancedCBA />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </VStack>
      </Container>
    </Box>
  );
}
