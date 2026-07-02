import React, { useState } from 'react';
import { VStack, HStack, Input, Button, Text, Divider, Box, Heading, useToast } from '@chakra-ui/react';
import { Trash2, Plus } from 'lucide-react';

export default function AdvancedCBA() {
  const [costs, setCosts] = useState([{ id: 1, label: '', value: 0 }]);
  const [benefits, setBenefits] = useState([{ id: 1, label: '', value: 0 }]);
  const toast = useToast();

  const addItem = (setter) => {
    setter(prev => [...prev, { id: Date.now(), label: '', value: 0 }]);
  };

  const updateItem = (setter, id, field, value) => {
    setter(prev => prev.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const removeItem = (setter, id) => {
    setter(prev => prev.length > 1 ? prev.filter(item => item.id !== id) : prev);
  };

  const calculateAll = () => {
    const totalCosts = costs.reduce((acc, c) => acc + (parseFloat(c.value) || 0), 0);
    const totalBenefits = benefits.reduce((acc, b) => acc + (parseFloat(b.value) || 0), 0);
    const netBenefit = totalBenefits - totalCosts;
    const bcr = totalCosts > 0 ? (totalBenefits / totalCosts).toFixed(2) : '0';

    toast({
      title: 'Calculation Complete',
      description: `Net Benefit: ${netBenefit.toFixed(2)} | BCR: ${bcr}`,
      status: netBenefit >= 0 ? 'success' : 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack gap={6} align="stretch" pt={4}>
      <Heading size="md">Advanced Analysis</Heading>
      
      <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading size="sm" mb={3}>Benefits</Heading>
        {benefits.map(b => (
          <HStack key={b.id} mb={2}>
            <Input placeholder="Label" value={b.label} onChange={(e) => updateItem(setBenefits, b.id, 'label', e.target.value)} />
            <Input type="number" placeholder="Value" value={b.value} onChange={(e) => updateItem(setBenefits, b.id, 'value', e.target.value)} />
            <Button size="sm" onClick={() => removeItem(setBenefits, b.id)} colorScheme="red" variant="ghost"><Trash2 size={18}/></Button>
          </HStack>
        ))}
        <Button size="sm" mt={2} leftIcon={<Plus size={16}/>} onClick={() => addItem(setBenefits)} variant="outline">Add Benefit</Button>
      </Box>

      <Box p={4} borderWidth="1px" borderRadius="md">
        <Heading size="sm" mb={3}>Costs</Heading>
        {costs.map(c => (
          <HStack key={c.id} mb={2}>
            <Input placeholder="Label" value={c.label} onChange={(e) => updateItem(setCosts, c.id, 'label', e.target.value)} />
            <Input type="number" placeholder="Value" value={c.value} onChange={(e) => updateItem(setCosts, c.id, 'value', e.target.value)} />
            <Button size="sm" onClick={() => removeItem(setCosts, c.id)} colorScheme="red" variant="ghost"><Trash2 size={18}/></Button>
          </HStack>
        ))}
        <Button size="sm" mt={2} leftIcon={<Plus size={16}/>} onClick={() => addItem(setCosts)} variant="outline">Add Cost</Button>
      </Box>

      <Divider />
      <Button colorScheme="blue" size="lg" onClick={calculateAll}>Run Analysis</Button>
    </VStack>
  );
}