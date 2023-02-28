import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Alert,

} from 'react-native'
import React, { useEffect, useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-crop-picker';
import Toast from 'react-native-toast-message';

const signIn = (props) => {
    const [checked, setChecked] = React.useState('first');
    const [loading, setLoading] = useState(false);
    const [name,setName] = useState()
    const [password,setPassword] = useState()
    const [email, setEmail] = useState(null);
    const [rNumber, setRNumber] = useState(null);
    const [dob, setdob] = useState(null);
    const [country, setCountry] = useState(null);
    
    // setLoading(true)

    const Signup = () => {
        if (name === null) {
            Toast.show({
                type: 'error',
                text1: "Warning",
                text2: "Please enter your name",
            });
            return;
        }
        if (email === null) {
            Toast.show({
                type: 'error',
                text1: "Warning",
                text2: "Please enter your email",
            });
            return;
        }
        if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            Toast.show({
                type: 'error',
                text1: "Warning",
                text2: "You have entered an invalid email address!",
            });
            return;
        }
        if (password === null) {
            Toast.show({
                type: 'error',
                text1: "Warning",
                text2: "Please enter your DOB",
            });
            return;
    
        }
        if (password === null) {
            Toast.show({
                type: 'error',
                text1: "Warning",
                text2: "Please enter your phone number",
            });
            return;
    
        }  
        const userDetails = {
            email: email,
            name:name,
            rNumber:rNumber,
            dob:dob,
            country:country,
        }
        console.log('userDetails',userDetails);
        Alert.alert (JSON.stringify(userDetails));
        props.navigation.navigate('registration',{userDetails})
    }
   


    // const []
    const galleryopen = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
        });
    }
    
    return (
        <SafeAreaView style={styles.conatiner}>
            <Toast style={{ zIndex: 100 }} ref={ref => Toast.setRef(ref)} />
            <ScrollView>
                <TouchableOpacity style={styles.backiconviewmain} onPress={() => props.navigation.navigate.goBack()}>
                    <AntDesign name='left'
                        color='#000'
                        size={20} style={styles.leftstyleicon}></AntDesign>
                </TouchableOpacity>
                <View style={styles.profilecircleview}>
                    <FontAwesome5 name='user-alt'
                        color='#ccc'
                        size={50} style={styles.useralticonstyle}></FontAwesome5>
                    <TouchableOpacity style={styles.cameraview} onPress={galleryopen}>
                        <Feather name='camera'
                            size={13}
                            color='#000' style={styles.camerastyle}></Feather>
                    </TouchableOpacity>
                </View>
                <View style={styles.samualview}>
                <Text style={styles.uploadtxt}>samuel_picture</Text>
                </View>
                <Text style={styles.nametxt}>PERSONAL INFORMATION</Text>
                <View style={styles.inputbtnview}>
                    <TextInput placeholder='Full Name' placeholderTextColor='gray'
                        multiline={true}
                        onChangeText={txt => {
                            setName(txt);
                        }}
                        value={name}
                        style={styles.placeholderstyle}></TextInput>
                </View>
                <View style={styles.inputbtnview}>
                    <TextInput placeholder='Email Address' placeholderTextColor='gray'
                        multiline={true}
                        onChangeText={txt => {
                            setEmail(txt);
                        }}
                        value={email}
                        style={styles.placeholderstyle}></TextInput>
                </View>
                <View style={styles.inputbtnview}>
                    <TextInput placeholder='DOB' placeholderTextColor='gray'
                        multiline={true}
                        onChangeText={txt => {
                            setdob(txt);
                        }}
                        value={dob}
                        style={styles.placeholderstyle}></TextInput>
                </View>
                <View style={styles.inputbtnview}>
                    <TextInput placeholder='Country' placeholderTextColor='gray'
                   
                        onChangeText={txt => {
                            setCountry(txt);
                        }}
                        value={country}
                        style={styles.placeholderstyle}></TextInput>
                </View>
                <View style={styles.inputbtnview}>
                    <TextInput placeholder='Phone Number*' placeholderTextColor='gray'
                        keyboardType='number-pad'
                        style={styles.placeholderstyle}
                        onChangeText={txt => setRNumber(txt)}
                            value={rNumber}></TextInput>
                </View>
                <TouchableOpacity onPress={() =>Signup() }
                    style={styles.signupbtnview}
                    disabled={loading}>
                    {!loading && <Text style={styles.signuptxt}>Next</Text>}
                    {loading && (
                        <Text style={styles.signuptxt}>
                            <ActivityIndicator size={25} color={'#fff'} />
                        </Text>
                    )}
                </TouchableOpacity>
              
            </ScrollView>
        </SafeAreaView>
    )
}

export default signIn

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#CCC"

    },
    backiconviewmain: {
        width: "100%",
        height: 30,
        // backgroundColor:"red"
    },
    leftstyleicon: {
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        paddingTop: 4,
        paddingLeft: 5
    },
    registrationtxt: {
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        fontSize: 22,
        color: "#000"
    },
    pleasetxt: {
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        color: "#000"
    },
    profilecircleview: {
        width: 100,
        height: 100,
        borderRadius: 70,
        borderWidth: 2,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 40,
        borderColor: "#fff",
        backgroundColor: "#D3D3D3"
    },
    useralticonstyle: {
        justifyContent: "center",
        alignSelf: "center",
        paddingTop: 15
    },
    cameraview: {
        width: 25,
        height: 25,
        borderRadius: 20,
        backgroundColor: '#fff',
        // position:"absolute",
        marginLeft: 70,
    },
    camerastyle: {
        justifyContent: "center",
        alignSelf: "center",
        paddingTop: 5
    },
    uploadtxt: {
        justifyContent: "center",
        textAlign: "center",
        alignSelf: "center",
        fontSize: 14,
        color: "red",
        fontWeight:"500"
    },
    nametxt: {
        color: "gray",
        marginLeft: 30,
        marginTop: 20,
        fontSize: 10,
        fontWeight:'500',
        marginVertical:5

    },
    inputbtnview: {
        width: "85%",
        height: 35,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 4,
        marginVertical: 6
    },
    placeholderstyle: {
        paddingLeft: 10,
        fontSize: 11
    },
    nametxtemail: {
        color: "#000",
        marginLeft: 30,
        marginTop: 15,
        fontSize: 13
    },
    radibtnmainview: {
        width: "85%",
        height: 45,
        // backgroundColor: "red",
        justifyContent: "space-between",
        alignSelf: "center",
        flexDirection: "row"
    },
    malebtnview: {
        width: 135,
        height: 37,
        borderRadius: 30,
        backgroundColor: "#404040",
        marginHorizontal: 5,
        flexDirection: "row"
    },
    maletxt: {
        color: "#fff",
        paddingTop: 8,
        fontWeight: "500"
    },
    borderviewname1: {
        width: "85%",
        height: 45,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 8,
        marginTop: 4,
        flexDirection: "row"

    },
    paswordview: {
        width: '88%',
        height: 44,
        // backgroundColor:"green",
    },
    eyeview: {
        width: 35,
        height: 50,
        // backgroundColor:"red",

    },
    eyewithlineview: {
        marginTop: 12
    },
    emailtxtstyles: {
        color: "#000",
        fontWeight: "300",
        fontSize: 13
    },
    signupbtnview: {
        width: '85%',
        height: 35,
        backgroundColor: "red",
        justifyContent: 'center',
        alignSelf: "center",
        elevation: 8,
        marginVertical: 15,
        borderRadius:4,


    },
    signuptxt: {
        color: "#fff",
        justifyContent: "center",
        textAlign: "center",
        fontSize: hp('2%'),
        fontWeight: "600"
    },
    accounttxthave: {
        color: "#000",
        fontWeight: "400",
        fontSize: 12
    },
    logintxt: {
        color: "#14366A",
        fontWeight: "400",
    },
    flexDirectionview:
    {
        flexDirection: "row",
        justifyContent: "center",
        alignSelf: "center",
        marginVertical: 10
    },
    accounttxt: {
        color: "#6B6B6B",
        fontWeight: "400"
    },
    logintxt1: {
        color: "red",
        fontWeight: "400",
        marginBottom: 7,
        fontSize: 13
    },
    samualview:{
        width:"80%",
        height:30,
        justifyContent:"center",
        alignSelf:"center",
        backgroundColor:"#fff",
        elevation:8,
        borderRadius:4,
        marginTop:15
    }
})