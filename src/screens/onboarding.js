import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import BgBackground from '../components/bgBackground'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AppContext } from '../context/appContext'
import { useNavigation } from '@react-navigation/native'

const Onboarding = () => {
    const { settype, } = useContext(AppContext)
    const navigation = useNavigation()

    const [step, setstep] = useState(1)

    const TYPES_DATA = [
        {
            id: 1,
            title: 'Learning Hub',
            image: require('../assets/images/types/type1.png')
        },
        {
            id: 2,
            title: 'Museums',
            image: require('../assets/images/types/type2.png')
        },
        {
            id: 3,
            title: 'Kayak',
            image: require('../assets/images/types/type3.png')
        },
        {
            id: 4,
            title: 'Learn New Skill',
            image: require('../assets/images/types/type4.png')
        },
        {
            id: 5,
            title: 'London Tour ',
            image: require('../assets/images/types/type5.png')
        },
        {
            id: 6,
            title: 'Cycling',
            image: require('../assets/images/types/type5.png')
        },

    ]

    const handleNext = () => {
        if (step == 3) {
            // navogate sign in screen
        } else {
            setstep((prev) => prev + 1)
        }
    }

    const handleSkip = () => {
        setstep(3)
    }

    const onSelect = (item) => {
        settype(item)
        navigation.navigate("Login")
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/branding.png')}
                    style={styles.img}
                />
            </View>
            <BgBackground>
                <View style={styles.context}>

                    {/* STEP 1 */}

                    {
                        step == 1 && (
                            <View style={styles.step1}>
                                <Text style={styles.txt1}>Discover Your Next Adventure</Text>
                                <Text style={[styles.txt1, styles.txt2]}>Begin your journey towards personal growth and enhanced wellbeing. Explore a curated selection of activities designed to enrich your free time and foster new skills.</Text>
                            </View>
                        )
                    }

                    {/* STEP 2 */}

                    {
                        step == 2 && (
                            <View style={styles.step1}>
                                <Text style={styles.txt1}>Connect and Grow Together</Text>

                                <Image
                                    source={require('../assets/images/asset.png')}
                                    style={styles.step2Img}
                                />

                                <Text style={[styles.txt3, styles.txt2]}>Your not alone on this journey. Join a community of like-minded students. Share your experiences, challenges, and achievements. Participate in group activities, discussions, and workshops designed to foster collaboration and mutual growth</Text>
                            </View>
                        )
                    }
                    {
                        step == 3 && (
                            <View style={styles.step3}>
                                <Text style={styles.txt4}>SELECT ONE</Text>

                                <View style={styles.typeContainer}>
                                    {
                                        TYPES_DATA.map((item, index) => (
                                            <TouchableOpacity
                                                key={index}
                                                onPress={() => onSelect(item)}
                                            >
                                                <Image
                                                    source={item.image}
                                                    style={styles.typeImg}
                                                />

                                                <Text style={styles.typeTxt}>{item.title}</Text>
                                            </TouchableOpacity>
                                        ))
                                    }
                                </View>

                            </View>
                        )
                    }


                </View>

                {
                    step != 3 &&
                    <View style={styles.btnContainer}>
                        <Text
                            onPress={() => handleSkip(0)}
                            style={styles.txt}>Skip</Text>

                        <Text
                            onPress={() => handleNext()}
                            style={styles.txt}>Next</Text>
                    </View>
                }

            </BgBackground>

        </View>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    container: {
        backgroundColor: "#20385E",
        height: '30%',
        width: '100%',
        borderBottomRightRadius: 75,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: '120%',
        height: 200
    },
    context: {
        flex: 1,
    },
    btnContainer: {
        height: 50,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    txt: {
        color: '#FFFFFF',
        fontSize: 16
    },
    step1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    txt1: {
        color: '#FFFFFF',
        fontSize: 22
    },
    txt2: {
        fontWeight: '200',
        textAlign: 'center',
        marginTop: '15%'
    },
    step2Img: {
        width: '100%',
        height: '30%',
        marginTop: '10%'
    },
    txt3: {
        fontSize: 13,
        color: '#FFFFFF',
    },
    step3: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: '5%'
    },
    txt4: {
        color: '#FFFFFF',
        fontSize: hp(2.8),
        marginVertical: hp(4)
    },
    typeImg: {
        width: wp(40),
        height: hp(12),
        borderRadius: hp(1)
    },
    typeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

    },
    typeTxt: {
        fontSize: hp(1.5),
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: hp(2)
    }
})