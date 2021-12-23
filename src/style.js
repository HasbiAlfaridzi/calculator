import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    topContainer:{flex:1,backgroundColor:'white'},
    topResultContainer:{width:'100%',height:'30%',backgroundColor:'white',position:'absolute',bottom:90,justifyContent:'flex-end',paddingBottom:'1%'},
    topResultText:{alignSelf:'flex-end',fontSize:60},
    bottomResultContainer:{width:'100%',height:'30%',backgroundColor:'white',position:'absolute',bottom:0,justifyContent:'flex-end',paddingBottom:'1%'},
    bottomResultText:{alignSelf:'flex-end',fontSize:60},
    bottomContainer:{flex:1.5,backgroundColor:'white',flexDirection:'row'},
    numberPad:{flex:2.5,backgroundColor:'white'},
    oprPad:{flex:1,backgroundColor:'white'},
    renderNumContainer:{flex:1,backgroundColor:'white',flexDirection:'row'},
    numButtonContainer:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d5d4',marginHorizontal:'2%',marginVertical:'3%',borderRadius:5},
    numPadButton:{borderRadius:10,alignItems:'center',justifyContent:'center'},
    numPadButtonText:{fontSize:22,fontWeight:'bold'},
    oprPadContainer:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d5d4',marginHorizontal:'1%',marginVertical:'6%',borderRadius:6},
    oprPadButtonText:{fontSize:22,fontWeight:'bold'},
    oprButtonContainer:{borderRadius:10,alignItems:'center',justifyContent:'center'}
})