import React from 'react';
import styles from './styles';
import { StatusBar, useColorScheme, View } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';

import Home from './pages/Home';
import POs from './pages/POs';
import Jobs from './pages/Jobs';
import Customers from './pages/Customers';
import DeliverySlips from './pages/DeliverySlips';
import Invoices from './pages/Invoices';

import TestsDB from './pages/Tests-DB';
import TestsFD from './pages/Tests-FD';
import TestsLib from './pages/Tests-Lib';

export default function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <NativeRouter>
            <View style={styles.homescreen}>
                <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pos" element={<POs />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/delivery-slips" element={<DeliverySlips />} />
                    <Route path="/invoices" element={<Invoices />} />

                    <Route path="/tests-db" element={<TestsDB />} />
                    <Route path="/tests-fd" element={<TestsFD />} />
                    <Route path="/tests-lib" element={<TestsLib />} />
                </Routes>
            </View>
        </NativeRouter>
    );
}

