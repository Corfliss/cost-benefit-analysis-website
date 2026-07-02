import { useState } from 'preact/hooks';
import { VStack, HStack, Input, Button, Text, Divider, Box, Heading, useToast } from '@chakra-ui/react';
import { Trash2, Plus } from 'lucide-preact';

export function SimpleCBA() {
  const [scenarios, setScenarios] = useState([
    { id: 1, name: '', benefits: '', costs: '', probability: 1 }
  ]);
  const toast = useToast();

  const addScenario = () => {
    setScenarios([...scenarios, { id: Date.now(), name: '', benefits: '', costs: '', probability: 1 }]);
  };

  const updateScenario = (id, field, value) => {
    setScenarios(scenarios.map(s => s.id === id ? { ...s, [field]: value } : s));
  };

  const removeScenario = (id) => {
    if (scenarios.length <= 1) return;
    setScenarios(scenarios.filter(s => s.id !== id));
  };

  const calculateResults = () => {
    let totalExpectedBenefit = 0;
    let totalExpectedCost = 0;

    scenarios.forEach(s => {
      const p = parseFloat(s.probability) || 0;
      const b = parseFloat(s.benefits) || 0;
      const c = parseFloat(s.costs) || 0;
      totalExpectedBenefit += b * p;
      totalExpectedCost += c * p;
    });

    const diff = totalExpectedBenefit - totalExpectedCost;
    
    toast({
      title: 'Analysis Complete',
      description: `Net Expected Value: ${diff.toFixed(2)}`,
      status: diff >= 0 ? 'success' : 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={4} align="stretch" pt={4}>
      <Heading size="md">Scenario Comparison</Heading>
      {scenarios.map((s) => (
        <Box key={s.id} p={4} borderWidth="1px" borderRadius="md">
          <VStack spacing={3} align="start">
            <HStack w="full">
              <Input placeholder="Scenario Name" value={s.name} onChange={(e) => updateScenario(s.id, 'name', e.target.value)} />
              <Button size="sm" onClick={() => removeScenario(s.id)} colorScheme="red" variant="ghost"><Trash2 size={18}/></Button>
            </HStack>
            <HStack w="full">
              <Input type="number" placeholder="Prob (0-1)" value={s.probability} onChange={(e) => updateScenario(s.id, 'probability', e.target.value)} />
              <Input type="number" placeholder="Benefit (+)" value={s.benefits} onChange={(e) => updateScenario(s.id, 'benefits', e.target.value)} />
              <Input type="number" placeholder="Cost (-)" value={s.costs} onChange={(e) => updateScenario(s.id, 'costs', e.target.value)} />
            </HStack>
          </VStack>
        </Box>
      ))}
      <Button leftIcon={<Plus size={18}/>} onClick={addScenario} variant="outline">Add Scenario</Button>
      <Divider />
      <Button colorScheme="blue" onClick={calculateResults}>Analyze Scenarios</Button>
    </VStack>
  );
}
