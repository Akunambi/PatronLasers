import { StyleSheet,ScrollView, Pressable, Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Icon from 'react-native-ionicons'
import BottomTabBar from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

const ProductHome = ({navigation}) => {
  return (
    <View>
      <View><Text style={styles.scrollHeader}>Related To You</Text></View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.push('Product Info')}>
        <View style={[styles.card]}>
          <Image style={styles.prodImg} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product One</Text>
          </View>
        </Pressable>
        <View style={[styles.card]}>                                             
          <Image style={styles.prodImg} source={require('../assets/product2.png')}/>
          <Text style={styles.cardText}>Product Two</Text>
        </View>
        <View style={[styles.card,]}>
          <Image style={styles.prodImg} source={require('../assets/product4.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card]}>
          <Image style={styles.prodImg} source={require('../assets/1-7.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.card, styles.card]}>
          <Image style={styles.prodImg} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
      </View>
      </ScrollView>
      <View><Text style={styles.scrollHeader}>New Arrivals</Text></View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scroll}>
      <View style={styles.container}>
      <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product One</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/product1.png')}/>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product Two</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/product2.png')}/>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product Three</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/product4.png')}/>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Product Four</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga hic quod vel cumque dolore recusandae quam maiores, doloremque enim inventore error ducimus laborum consequuntur. Pariatur recusandae aliquid vel reiciendis sed!</Text>
            </View>
      <Image style={styles.prodImgSmallRec} source={require('../assets/1-7.png')}/>
        </View>
      </View>
      </ScrollView>
      <View><Text style={styles.scrollHeader}>Must See Products</Text></View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.containersec}>
      <View>
      <View style={styles.scrollsec}>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product One</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product2.png')}/>
          <Text style={styles.cardText}>Product Two</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product4.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        </View>
        <View style={styles.scrollsec}>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product2.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product4.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        </View>
        <View style={styles.scrollsec}>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        <View style={[styles.RecCardSmall]}>
        <Image style={styles.prodImgSmall} source={require('../assets/product1.png')}/>
          <Text style={styles.cardText}>Product Three</Text>
        </View>
        </View>
        </View>
        </ScrollView>
        </View>
  )
}

export default ProductHome

const styles = StyleSheet.create({
  scroll:{
  },
  scrollsec:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  scrollHeader:{
    fontFamily:'Inter',
    fontSize:20,                                                                                      
    textTransform:'uppercase',
    textAlign:'left',
    margin:5,
    color:'#eee0cb',
  },
  container:{
    flex:1,
    flexDirection:'row'
  },
  containersec:{
    height:250,
    marginBottom:450
  },
  card:{
    textAlign:'base-line',
    alignItems:'center',
    margin:10,
    width: 150,
    height: 180,
    borderRadius: 5,
    elevation:30,
    backgroundColor: '#1b2a41',
  },
  RecCard:{
    flex:1,
    flexDirection:'row-reverse',
    width: 380,
    height: 150,
    margin:10,
    borderRadius: 10,
    elevation:30,
    backgroundColor: '#1b2a41'
  },
  RecCardInfo:{
    top:10,
    left:10,
    height:100,
    width:230,
    textAlign:'left',
    color:'black'
  },
  RecCardSmall:{
    alignItems:'center',
    width: 120,
    height: 150,
    margin: 2,
    marginTop:5,
    elevation:30,
    borderRadius: 5,
    backgroundColor: '#1b2a41',
  },
  prodImg:{
    height:150,
    width:250,
    resizeMode:'contain'
  },
  prodImgSmall:{
    margin:-5,
    height:140,
    width:240,
    resizeMode:'contain'
  },
  prodImgSmallRec:{
    top:-15,
    left:-20,
    height:150,
    width:230,
    resizeMode:'contain'
  },
  pressBtn:{
    fontFamily:'Inter-Regular',
    alignContent:'center',
    marginTop:60,
    marginLeft:8,
    borderRadius:50,
    width:80,
    height:80
  },
  RecCardTitle:{
    fontFamily:'Inter',
    color:'#66666e',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'left',
  },
  RecCardPara:{
    fontFamily:'Inter',
    fontSize:15,
    textAlign:'left',
    color:'#e6e6e9',
  },
  cardText:{
    fontFamily:'Roboto',
    color:'#e6e6e9',
  },
  pressTxt:{
    fontFamily:'Roboto-thin',
    fontSize:20,
    marginTop:30,
    textAlign:'center'
  },
  })