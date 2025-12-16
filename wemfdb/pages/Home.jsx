// Home.jsx
import React from 'react';
import styles from './../styles';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';


export default function HomeScreen () {
    return (
        <View style={{ flex: 1 }}>
            <Link to="/pos" style={styles.link}>
                <Text style={styles.linkText}>Go to POs</Text>
            </Link>
            <Link to="/jobs" style={styles.link}>
                <Text style={styles.linkText}>Go to Jobs</Text>
            </Link>
            <Link to="/customers" style={styles.link}>
                <Text style={styles.linkText}>Go to Customers</Text>
            </Link>
            <Link to="/delivery-slips" style={styles.link}>
                <Text style={styles.linkText}>Go to Delivery Slips</Text>
            </Link>
            <Link to="/invoices" style={styles.link}>
                <Text style={styles.linkText}>Go to Invoices</Text>
            </Link>
            <Link to="/tests-db" style={styles.link}>
                <Text style={styles.linkText}>Go to Tests-DB</Text>
            </Link>
            <Link to="/tests-fd" style={styles.link}>
                <Text style={styles.linkText}>Go to Tests-FD</Text>
            </Link>

            {/*<Link to="/tests-lib" style={styles.link}>*/}
            {/*    <Text style={styles.linkText}>Go to Tests-lib</Text>*/}
            {/*</Link>*/}
        </View>
    );
};