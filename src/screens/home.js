import { Image, ScrollView, StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useContext } from 'react'
import BgBackground from '../components/bgBackground'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { AntDesign } from '@expo/vector-icons';
import { AppContext } from '../context/appContext';
const Home = () => {
  const { user } = useContext(AppContext)

  const DATA = [
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

  return (
    <BgBackground>

      {/* HEADER */}
      <View style={styles.header}>

        <Image
          source={require('../assets/images/new.png')}
          style={styles.img}
        />

        <AntDesign name="menufold" size={24} color="#A5C0F3" />

      </View>
      {/* ENDS */}

      <ScrollView contentContainerStyle={{
        paddingHorizontal: '5%'
      }}>

        {/* LIST HEADER */}
        <View style={styles.listheader}>
          <Text style={styles.txt}>My activities</Text>
          <Text style={styles.txt}>See all</Text>
        </View>

        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={styles.img1}
            >
            </Image>
          )}
        />



        {/* LIST HEADER */}
        <View style={styles.listheader}>
          <Text style={styles.txt}>Suggested for you</Text>
        </View>

        <FlatList
          data={DATA}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={styles.img2}
            >
            </Image>
          )}
        />


        {/* LIST HEADER */}
        <View style={styles.listheader}>
          <Text style={styles.txt}>Recent</Text>
        </View>

        <FlatList
          data={DATA}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={styles.img3}
            >

            </Image>
          )}
        />
      </ScrollView>

    </BgBackground>
  )
}

export default Home

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 'auto',
    marginTop: hp(10),
    marginBottom: hp(3),
    paddingHorizontal: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 60
  },
  txt: {
    fontSize: 24,
    fontWeight: '300',
    color: "#FFFFFF"
  },
  listheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(2),

  },
  img1: {
    width: wp(45),
    height: hp(13),
    marginRight: 10,
    borderRadius: hp(1),
    marginVertical: hp(2)
  },
  img2: {
    width: wp(60),
    height: hp(15),
    marginRight: 10,
    borderRadius: hp(1),
    marginVertical: hp(2)
  },
  img3: {
    width: wp(40),
    height: hp(11),
    marginRight: 10,
    borderRadius: hp(1),
    marginVertical: hp(2)
  }
})