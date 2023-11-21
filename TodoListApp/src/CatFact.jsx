import React from 'react';
import { useEffect, useState } from 'react';

import { Text, Button } from 'react-native';

const CatFact = ( {} ) => {
    const [fact, setFact] = useState('');

    const fetchFact = async () => {
        try {
          const response = await fetch('https://meowfacts.herokuapp.com/');
          const data = await response.json();
    
          // Assuming the response has a 'data' property
          const newFact = data.data;
    
          setFact(newFact);
        } catch (error) {
          console.error('Error fetching cat fact:', error);
        }
      };

    useEffect(() => {
        fetchFact();
    }, []);

    const handleNewFact = () => {
        fetchFact();
    }

    return (
        <>
            <Text> {fact} </Text>
            <Button title="New Fact" onPress={handleNewFact} />
        </>
    );
}

export default CatFact;