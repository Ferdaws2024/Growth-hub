import { Button, FlatList, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { formatDate } from '../utils/myUtils';

const DATA = [
    {
        id: 1,
        title: 'Learning Hub',
        image: require('../assets/images/types/type1.png'),
        duration: 50,
        date: 1710935850
    },
    {
        id: 2,
        title: 'Museums',
        image: require('../assets/images/types/type2.png'),
        duration: 30,
        date: 1710831450
    },
    {
        id: 3,
        title: 'Kayak',
        image: require('../assets/images/types/type3.png'),
        duration: 35,
        date: 1710745050
    },
    {
        id: 4,
        title: 'Learn New Skill',
        image: require('../assets/images/types/type4.png'),
        duration: 45,
        date: 1710658650
    },
    {
        id: 5,
        title: 'London Tour ',
        image: require('../assets/images/types/type5.png'),
        duration: 60,
        date: 1710572250
    },
    {
        id: 6,
        title: 'Cycling',
        image: require('../assets/images/types/type5.png'),
        duration: 15,
        date: 1710485850
    },

]

const Favorites = () => {
    const [ascending, setascending] = useState(false)
    const [dataSource, setdataSource] = useState(DATA)
    const [showFilter, setshowFilter] = useState(false)
    const [selectedFilter, setselectedFilter] = useState('All')

    const handleSort = () => {
        if (ascending == true) {
            const sorted = dataSource.sort((a, b) => b.date - a.date)
        } else {
            const sorted = dataSource.sort((a, b) => a.date - b.date)
        }
        setascending(!ascending)
    }

    const durationList = [
        15,
        30,
        45,
        60,
        120,
        'All'
    ]

    const handleFilter = () => {
        if (selectedFilter == 'All') {
            setdataSource(DATA)
        } else {
            const filter = DATA.filter((x) => x.duration >= selectedFilter)
            setdataSource(filter)
        }
        setshowFilter(false)
    }

    return (
        <View style={styles.main}>

            {/* HEADER */}
            <View style={styles.headerContainer}>

                <Text style={styles.nameText}>Hi John!</Text>

                <Image
                    source={require('../assets/images/asset.png')}
                    style={styles.profileImg}
                />

            </View>

            {/* HEADER END */}


            <View style={styles.sortContainer}>
                <TouchableOpacity style={styles.row} onPress={() => handleSort()}>
                    <Text style={styles.sortTxt}>Sort By</Text>
                    <AntDesign name="caretup" size={20} color="#85B6FF" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.row} onPress={() => setshowFilter(!showFilter)}>
                    <Text style={styles.sortTxt}>Filter</Text>
                    <FontAwesome name="filter" size={20} color="#85B6FF" />
                </TouchableOpacity>

            </View>

            {/* SORT FILTER ENDS */}


            {
                showFilter &&
                <View style={{
                    width: '100%',
                    paddingHorizontal: '5%'
                }}>

                    <Text style={styles.sortTxt}>Show Activities with duration greater then</Text>

                    {
                        durationList.map((item, index) => (
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                paddingVertical: 5
                            }}
                                onPress={() => setselectedFilter(item)}
                            >
                                <Text style={styles.sortTxt}>{item}</Text>
                                {
                                    selectedFilter == item &&
                                    <AntDesign name="check" size={20} color="#85B6FF" />
                                }

                            </TouchableOpacity>
                        ))
                    }


                    <Button title='filter' onPress={() => handleFilter()} />
                </View>
            }




            <FlatList
                data={dataSource} //required props
                renderItem={({ item, index }) => (
                    <TouchableOpacity style={styles.itemContainer}>

                        <Image
                            source={item.image}
                            style={styles.itemImg}
                        />

                        <View style={styles.itemRow}>
                            <Text style={[styles.itemTxt, {
                                flex: 1
                            }]}>{item.title}</Text>

                            <View style={styles.row1}>
                                <AntDesign name="calendar" size={20} color="black" />
                                <Text style={styles.itemTxt}>{formatDate(item.date)}</Text>
                            </View>

                            <View style={styles.row2}>
                                <AntDesign name="clockcircleo" size={20} color="black" />
                                <Text style={styles.itemTxt}>{item.duration} mints</Text>
                            </View>


                        </View>

                    </TouchableOpacity>
                )} //reuired props
            />



        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    headerContainer: {
        height: 90,
        marginTop: Platform.OS === 'ios' ? 60 : 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    nameText: {
        fontSize: 24,
        fontWeight: '300'
    },
    profileImg: {
        width: 50,
        height: 50,
        borderRadius: 60
    },
    sortContainer: {
        borderTopWidth: 1,
        borderColor: "#E0D5D5",
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        paddingVertical: 15
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
    },
    sortTxt: {
        fontSize: 16,
        fontWeight: '300',
        marginRight: 5
    },
    itemContainer: {
        paddingHorizontal: '5%',
        marginVertical: 10
    },
    itemImg: {
        width: '100%',
        height: 160,
        borderRadius: 15
    },
    itemRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5
    },
    itemTxt: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#000000',
        marginLeft: 5,
    }
})