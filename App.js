import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
    class App extends Component {
        render() {
            return (
                <View style={styles.container}>
                    <Icon name="home-outline" size={30} />
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        marginTop: 15
                    }}>Hello World</Text>
                </View>
            )
        }
    }
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
    });
    export default App;
