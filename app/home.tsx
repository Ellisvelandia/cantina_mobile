import { View, Text, Image, TextInput, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import className from "twrnc"
import PersonIcon from '@/assets/PersonIcon'
import BellIcon from '@/assets/BellIcon'
import SearchIcon from '@/assets/SearchIcon'
import beers from '../assets/data/beers.json'

const home = () => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const [filteredBeers, setFilteredBeers] = React.useState(beers)

    useEffect(() => {
        const filtered = beers.filter((beer) =>
            beer.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredBeers(filtered)
    }, [searchQuery]);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>

            <View style={className`flex-1`}>
                <View style={className`p-5 justify-between flex-row items-center`}>
                    <PersonIcon />
                    <BellIcon />
                </View>
                <View style={className`p-5 pt-0`}>
                    <Text style={className`text-lg font-semibold `}>Hello , Ellis</Text>
                    <Text style={className`text-3xl font-bold`}>Make your order with us, feel like a
                        <Text style={className`text-orange-500 px-2`}>
                            home
                        </Text>
                    </Text>
                </View>
                <View style={className`p-1 px-2 bg-gray-100 rounded-full mx-5 flex-row justify-start items-center gap-2`}>
                    <TextInput placeholder='Search here' style={className`flex-1 text-lg font-semibold text-gray-500 p-3 rounded-l-full`}
                        value={searchQuery} onChangeText={(text) => setSearchQuery(text)}
                    />
                    <SearchIcon />
                </View>

                <View>
                    <FlatList horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={className`gap-5 p-5`} data={filteredBeers} keyExtractor={(item) => item.id.toString()} renderItem={({ item }) => (
                        <View>
                            <Image source={{ uri: item.imagePath }} style={className`h-15 w-15`} />
                            <Text style={className`text-md font-semibold text-gray-500 mt-1`}>{item.name}</Text>
                        </View>
                    )} />
                </View>
                <View>
                    <Text style={className`text-lg font-semibold p-5`}>Recommended</Text>
                    <FlatList
                        data={beers.slice(0, 6)}
                        keyExtractor={(item) => item.id.toString()}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={className`items-center px-2`}>
                                <Image source={{ uri: item.imagePath }} style={className`h-28 w-40`} />
                                <Text style={className`text-md text-center font-semibold text-gray-500 mt-1`}>{item.name}</Text>
                            </View>
                        )}

                    />

                </View>
            </View>
        </ScrollView>
    )
}

export default home