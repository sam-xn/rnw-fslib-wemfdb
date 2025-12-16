// Tests.jsx
import React, { useState, useEffect } from "react";
import styles from './../styles';
import { useNavigate } from 'react-router-native';
import { View, ScrollView, Text, TouchableOpacity, TextInput } from 'react-native';
import { Search } from 'lucide-react';

import CustomerService from './../http/customer.service';
export default function Tests() {
    const navigate = useNavigate();

    const [filter, setFilter] = useState("business");
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        if (filter === "business") {
            CustomerService.getAll()
                .then((response) => {
                    setCustomers(response.data.sort((a, b) => a.company.localeCompare(b.company)));
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        else {
            ContactService.getType(filter)
                .then((response) => {
                    setCustomers(response.data.sort((a, b) => a.company.localeCompare(b.company)));
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }, [filter]);

    //// ------------------------------------------------------------------------------------ SearchBar 

    //const [searchCompany, setSearchCompany] = useState("");
    //function findBy(e) {
    //    e.preventDefault();

    //    if (filter === "business") {
    //        CustomerService.searchCompany(searchCompany, filter)
    //            .then((response) => {
    //                setCustomers(response.data.sort((a, b) => a.company.localeCompare(b.company)));
    //            })
    //            .catch((e) => {
    //                console.log(e);
    //            });
    //    }
    //    else {
    //        ContactService.searchCompany(searchCompany, filter)
    //            .then((response) => {
    //                setCustomers(response.data.sort((a, b) => a.id - b.id));
    //            })
    //            .catch((e) => {
    //                console.log(e);
    //            });
    //    }
    //}

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tests Screen!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigate(-1)}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>

            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={true} >
                <View style={{ padding: 10 }}>

                    {/* Header Row */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            paddingVertical: 8,
                            borderBottomWidth: 1,
                            borderBottomColor: "#ccc",
                        }}
                    >
                        <Text style={styles.text}>Company</Text>
                        <Text style={styles.text}>Phone</Text>
                    </View>

                    {/* Data Rows */}
                    {customers.map((c) => (
                        <View
                            key={c.company}
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingVertical: 10,
                                borderBottomWidth: 1,
                                borderBottomColor: "#eee",
                            }}
                        >
                            <Text style={styles.text}>{c.company}</Text>
                            <Text style={styles.text}>{c.phone}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};
