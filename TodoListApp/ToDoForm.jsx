import React from 'react';

import {
    View,
    TextInput,
    Button
  } from 'react-native';

import { styles } from './App';

function ToDoForm() {
    return (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task..."
          />
          <Button title="Add" />
        </View>
    );
};

export default ToDoForm;