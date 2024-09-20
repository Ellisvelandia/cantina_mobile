import { View, Text, Image, Pressable, Animated } from 'react-native'
import React, { useRef, useEffect } from 'react'
import className from "twrnc"
import { router, useRouter } from 'expo-router'

const index = () => {
    const router = useRouter()


    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.4)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            })
        ]).start();

    }, [])

    return (
        <Pressable onPress={() => router.push('/home')} style={className`bg-orange-500 flex-1 justify-center items-center w-full h-full`}>
            <Animated.View style={[{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
                <Image source={require('../assets/logo.webp')} style={className`w-30 h-30`} />
            </Animated.View>

            <Animated.View style={[{ opacity: fadeAnim, transform: [{ scale: scaleAnim }] }]}>
                <Text style={className`text-white text-5xl font-bold p-4`}>Beer Ellis</Text>
                <Text style={className`text-white text-lg font-semibold p-1`}>Beer Pos system is always right!</Text>
            </Animated.View>
        </Pressable>
    )
}

export default index