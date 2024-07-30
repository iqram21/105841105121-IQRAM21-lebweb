import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';

class Home extends Component {
    render() {
        const mainImage = require('./../assets/01.jpg');
        const newImages = [
            { source: require('./../assets/02.jpg'), title: 'Spider Gwen', subtitle: '10$' },
            { source: require('./../assets/03.jpg'), title: 'Spider-man', subtitle: '12$' },
            { source: require('./../assets/04.jpg'), title: 'ghost Rider', subtitle: '15$' },
            { source: require('./../assets/05.jpg'), title: 'X-Men', subtitle: '14$' },
        ];

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.mainImageContainer}>
                        <Image source={mainImage} style={styles.mainImage} />
                        <View style={styles.overlay}>
                            <Text style={styles.overlayText}>Comic sale</Text>
                            <TouchableOpacity style={styles.checkButton}
                            onPress={()=> this.props.navigation.navigate('Shop')}>
                                <Text style={styles.checkButtonText}>Check</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.newSection}>
                        <Text style={styles.newTitle}>New</Text>
                        <Text style={styles.newSubtitle}>You've never seen it before!</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.newImagesContainer}>
                            {newImages.map((item, index) => (
                                <View key={index} style={styles.imageWrapper}>
                                    <Image source={item.source} style={styles.newImage} />
                                    <Text style={styles.imageTitle}>{item.title}</Text>
                                    <Text style={styles.imageSubtitle}>{item.subtitle}</Text>
                                </View>
                            ))}
                        </ScrollView>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    mainImageContainer: {
        position: 'relative',
    },
    mainImage: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        buttom: 40,
        left: 20,
        right: 20,
        alignItems: 'flex-start',
        marginTop: 270,
    },
    overlayText: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
    },
    checkButton: {
        backgroundColor: 'red',
        paddingVertical: 10,
        paddingHorizontal: 40,
        marginTop: 10,
        borderRadius: 25,
    },
    checkButtonText: {
        color: '#ffffff',
        fontSize: 16,
    },
    newSection: {
        padding: 20,
    },
    newTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    newSubtitle: {
        color: '#888888',
        marginVertical: 10,
        fontSize: 20,
    },
    newImagesContainer: {
        flexDirection: 'row',
    },
    imageWrapper: {
        marginRight: 16,
        alignItems: 'center',
    },
    newImage: {
        width: 150,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    imageTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 5,
    },
    imageSubtitle: {
        fontSize: 15,
        color: 'red',
    },
});