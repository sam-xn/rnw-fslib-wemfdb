// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    homescreen: {
        flex: 2,
        padding: '12px',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        color: 'red',
    },
    button: {
        padding: 12,
        backgroundColor: '#007AFF',
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    link: {
        padding: 12,
        backgroundColor: '#007AFF',
        alignItems: 'center',
        margin: 16,
        borderRadius: 8,
    },
    linkText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
