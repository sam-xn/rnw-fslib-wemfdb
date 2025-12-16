// Tests.jsx
import React from 'react';
import styles from './../styles';
import { useNavigate } from 'react-router-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { multiply } from 'testlib';

const result = multiply(3, 7);

export default function Tests() {
    const navigate = useNavigate();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Result: {result}</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigate(-1)}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
};
