import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    Container: {
    },
    Container2: {
        padding: 15,
        paddingTop: 25,
        backgroundColor: "#fafafa",
        borderWidth: 1,
        borderColor: "grey",
        backgroundColor: "#F6F6F6",
        borderBottomWidth:0

    },
    TI: {
        borderWidth: 0.5,
        width: "85%",
        alignSelf: "center",
        borderRadius: 13,
        height: 42,
        

    },
    HeaderTitle: {
        fontSize: 20,
        fontWeight: "800",
        textAlign: "center",
        marginBottom: 15,
        color: "black",
        width:"80%"
    },
    line: {
        height: 1,
        width: "100%",
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: "black"
    },
    TItext: {
        width: "80%",
        alignSelf: "center",
        marginTop: 12,
        marginBottom: 5,
        fontSize: 13,
        fontWeight: "300",
        color: "black"
    },
    buton: {
        padding: 10,
        backgroundColor: "#F44",
        marginTop: 25,
        width: 200,
        alignSelf: "center",
        marginBottom: 150
    },
    TouchTxt: {
        fontSize: 15,
        alignSelf: "center",
        fontWeight: "800"
    },
    formikTxt: {
        fontSize: 11,
        alignSelf: "center",
        color: "#f44",
        marginTop: 2
    },
    modalCloseStyle: { 
        position: "absolute", 
        bottom: 20, 
        alignSelf:"center", 
        backgroundColor: "#f44",
        width:125,
        height:35,
        borderRadius:45
    },
    modalTextStyle:{
        fontSize:16,
        alignSelf:"center",
        marginTop:5
    }
})
export default Styles;