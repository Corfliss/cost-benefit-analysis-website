import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Container, Heading, VStack } from '@chakra-ui/react';
import SimpleCBA from './features/simple/SimpleCBA.jsx';
import AdvancedCBA from './features/advanced/AdvancedCBA.jsx';

// Changed to default export to fix the "does not provide an export named 'default'" error
export default function App() {
  return (
    <Box minH="100vh" bg="gray.50">
      <Container maxW="container.md" py={8}>
        <VStack gap={6} align="stretch"> {/* Note: 'gap' is the modern replacement for 'spacing' in many Chakra/CSS setups */}
          <Heading size="lg" textAlign="center" color="blue.800">CBA Analyzer</Heading>
          <Tabs variant="enclosed" colorScheme="blue"> 
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