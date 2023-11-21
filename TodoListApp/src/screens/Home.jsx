import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Button } from 'react-native';

import ToDoList from '../ToDoList';
import ToDoForm from '../ToDoForm';
import CatFact from '../CatFact';

function Home( {navigation} ) {

    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
        'Test'
    ]);

    const handleAddTask = (task) => {
        setTasks([...tasks, task]);
    };
    
    return (
        <>
            <SafeAreaView>
                <ToDoList tasks={ tasks } />
                <ToDoForm addTask={ handleAddTask } />

                <Button
                    title="Go to About"
                    onPress={() => navigation.navigate('About')} //Takes user to About screen using the navigation prop and navigate method
                />

                <CatFact />
            </SafeAreaView>
        </>
    );
}

export default Home;