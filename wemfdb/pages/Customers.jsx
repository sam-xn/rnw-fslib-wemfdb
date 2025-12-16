// Customers.jsx
import React from 'react';
import styles from './../styles';
import { useNavigate } from 'react-router-native';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Customers () {
    const navigate = useNavigate();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Customers Screen!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigate(-1)}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};
