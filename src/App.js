import React,{Component} from 'react';
import {Container} from 'native-base';
import {View,Text,TouchableOpacity} from 'react-native';
import Styles from './style';


export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      oprBtn : ['/','*','+','-','='],
      numBtn : ['7','8','9','4','5','6','1','2','3','C','0','.'],
      valText: '',
      valRes: '0',
      opr:'',
      num:'',
      num2:'',
      stat:0,
      disableOpr:false
    };
  }

  handleTouchNum = (data) => {
    const {valText,stat,num,num2} = this.state;
    this.props.prevState
    if(data === "C"){
      this.setState({
        valText:'',
        valRes:0,
        num:0,
        num2:0,
        stat:0,
        disableOpr:true
      })
    }else{
      if(stat == 1){
        this.setState({
          valText:valText + data,
          num2:num2 + data,
          disableOpr:false
        })
      }else if(stat == 2){
        this.setState({
          valText:data,
          valRes:0,
          num: num + data,
          num2: '',
          stat:0
        })
      }else{
        this.setState({
          valText:valText + data,
          num: num + data,
          disableOpr:false
        })
      }
      
    }
  }

  handleTouchOpr = (data) => {
    const {val,opr,valText,valRes,num,num2,disableOpr} = this.state;
    
        if(data == "="){
          if(opr == "+"){
            this.setState({
              valRes : parseFloat(num) +  parseFloat(num2),
              stat:2,
              num:'',
              disableOpr:true
            })
          }else  if(opr == "-"){
            this.setState({
              valRes : parseFloat(num) -  parseFloat(num2),
              stat:2,
              num:'',
              disableOpr:true
            })
          }else  if(opr == "/"){
            this.setState({
              valRes : parseFloat(num) / parseFloat(num2),
              stat:2,
              num:'',
              disableOpr:true
            })
          }else  if(opr == "*"){
            this.setState({
              valRes : parseFloat(num) *  parseFloat(num2),
              stat:2,
              num:'',
              disableOpr:true
            })
          }else{
            this.setState({
              valRes : '-'
            })
          }
        }else{
          this.setState({
            valText: valText + data,
            opr:data,
            stat:1,
            disableOpr:true
          })
        }
      
     
      // this.setState({
      //   valText:valText + data,
      //   opr:data
      // })
  }

  renderNum = (min,max) => {
    const {numBtn} = this.state;
    return(
      <View style={Styles.renderNumContainer}>
                {numBtn.map((data,index) => {
                  if(index >= min && index < max){
                  return(
                    <TouchableOpacity onPress={() => {this.handleTouchNum(data)}} style={Styles.numButtonContainer}>
                      <View  style={Styles.numPadButton}>
                        <Text style={Styles.numPadButtonText}>{data}</Text>
                      </View> 
                    </TouchableOpacity>
                  )
                  }
                })}
      </View>
    )
    
  }

  renderOpr = () => {
    const {oprBtn} = this.state;
    return(
      oprBtn.map((data,index) => {
        return(
          <TouchableOpacity style={Styles.oprPadContainer} disabled={this.state.disableOpr} onPress={() => {this.handleTouchOpr(data)}}>
            <View  style={Styles.oprButtonContainer}>
              <Text style={Styles.oprPadButtonText}>{data}</Text>
            </View> 
          </TouchableOpacity>
        )})
    )
    
  }


   render(){
     const {oprBtn,numBtn,valText,valRes} = this.state;
     return(
       <Container style={{flex:1,marginHorizontal:'3%',marginVertical:'3%'}}>
         <View style={Styles.topContainer}>
           <View style={Styles.topResultContainer}>
              <Text style={Styles.topResultText}>{valText}</Text>
           </View>
           <View style={Styles.bottomResultContainer}>
              <Text style={Styles.bottomResultText}>{valRes}</Text>
           </View>
         </View>
         <View style={Styles.bottomContainer}>
            <View style={Styles.numberPad}>
              {this.renderNum(0,3)}
              {this.renderNum(3,6)}
              {this.renderNum(6,9)}
              {this.renderNum(9,12)}
            </View>
            <View style={Styles.oprPad}>
              {this.renderOpr()}
            </View>
         </View>
       </Container>
     )
   }
  
}
