import React,{ Component} from 'react';

import CalcButton from '../components/CalcButton';

// 計算機 App
class CalcApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      show: '',
      complete: false,
      preNumber: '',
      operator: ''
      //curNumber: ''
    };
  }
 
  resetState = () => 
    this.setState({
      input: '',
      show: '',
      operator: '',
      preNumber: '',
      complete: false
  })
  
  addToInput = (val) => {
    // last input is =
    if(this.state.complete === true) {
      this.setState({
        input: val,
        show: val,
        complete: false
      })
    }
    //else if(this.state.preNumber !=='')
    else{
      this.setState(ps =>({
        input: ps.input + val,
        show: ps.input + val
      }))
    }
  }
  addZeroInput = val => {
    if(this.state.input !== '0')
      this.setState(ps =>({
        input: ps.input + val,
        show: ps.input + val
      }))
  }
  addDecimal = val => {
    if(this.state.input.indexOf(".") === -1)
    this.setState(ps=>({
      input: ps.input + val,
      show: ps.input + val
    }))
  }
  negative = () => {
    if(this.state.input === '') return
    let num = Number(this.state.input)
      this.setState({
        input: (num * -1 ),
        show: (num * -1 )  
      })
  }
  percent = () => {
    if(this.state.input === '') return
    let num = Number(this.state.input)
      this.setState({
        input: num / 100,
        show: num / 100
       })
  }
  add = () => {
    if(this.state.operator !== ''){
      this.calculate()
      this.setState({
        input: '', 
        operator: 'plus'})
    }
    else{
      this.setState({
        preNumber: this.state.input,
        input : '',
        operator: "plus"
      })
    }
  }
  subtract = () => {
    if(this.state.show === ''){
      this.setState({input: "-"})
    }
    else if(this.state.operator !== '') {
      this.calculate()
      this.setState({
        input: '', 
        operator: 'minus'})
    }
    else{
      this.setState({
        preNumber: this.state.input,
        input : '',
        operator: "minus"
      })
    }
  }
  multiply = () => {
    if(this.state.operator !== ''){
      this.calculate()
      this.setState({
        input: '', 
        operator: 'multipy'})
    }
    else{
      this.setState({
        preNumber: this.state.input,
        input : '',
        operator: "multiply"
      })
    }
  }
  divide = () => {
    if(this.state.operator !== ''){
      this.calculate()
      this.setState({
        input: '', 
        operator: 'divide'})
    }
    else{
      this.setState({
        preNumber: this.state.input,
        input : '',
        operator: "divide"
      })
    }
  }
  equate = () => {
    this.calculate()
    this.setState({
      complete: true,
      operator: ''
    })
  }
  calculate = () => {
    if(this.state.input === '') return

    if(this.state.operator === "plus"){
      this.setState(ps=>({
        input: parseFloat(ps.preNumber) + parseFloat(ps.input),
        preNumber: parseFloat(ps.preNumber) + parseFloat(ps.input),
        show: parseFloat(ps.preNumber) + parseFloat(ps.input)
      }))
    }
    else if(this.state.operator === "minus"){
      this.setState(ps=>({
        input: parseFloat(ps.preNumber) - parseFloat(ps.input),        
        preNumber: parseFloat(ps.preNumber) - parseFloat(ps.input),
        show: parseFloat(ps.preNumber) - parseFloat(ps.input)
      }))
    }
    else if(this.state.operator === "multiply"){
      this.setState(ps=>({
        input: parseFloat(ps.preNumber) * parseFloat(ps.input),
        preNumber: parseFloat(ps.preNumber) * parseFloat(ps.input),
        show: parseFloat(ps.preNumber) * parseFloat(ps.input)
      }))
    }
    else if(this.state.operator === "divide"){
      this.setState(ps=>({
        input: parseFloat(ps.preNumber) / parseFloat(ps.input),
        preNumber: parseFloat(ps.preNumber) / parseFloat(ps.input),
        show: (parseFloat(ps.preNumber) / parseFloat(ps.input)).toFixed(4)
      }))
    }
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  render() {
    const {show} = this.state  
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{show}</div> 
          </div>
          <div className="calc-row">
             <CalcButton onClick={this.resetState} >AC</CalcButton>
             <CalcButton onClick={this.negative}>+/-</CalcButton>
             <CalcButton onClick={this.percent}>%</CalcButton>
             <CalcButton onClick={this.divide} className="calc-operator">÷</CalcButton>
          </div>
          <div className="calc-row">
             <CalcButton onClick={this.addToInput} className="calc-number">7</CalcButton>
             <CalcButton onClick={this.addToInput} className="calc-number">8</CalcButton>
             <CalcButton onClick={this.addToInput} className="calc-number">9</CalcButton>
             <CalcButton onClick={this.multiply} className="calc-operator">x</CalcButton>
          </div>
          <div className="calc-row">
             <CalcButton onClick={this.addToInput} className="calc-number">4</CalcButton>
             <CalcButton onClick={this.addToInput} className="calc-number">5</CalcButton>
             <CalcButton onClick={this.addToInput} className="calc-number">6</CalcButton>
             <CalcButton onClick={this.subtract} className="calc-operator">-</CalcButton>
          </div>
          <div className="calc-row">
             <CalcButton onClick={this.addToInput} className="calc-number">1</CalcButton>
             <CalcButton onClick={this.addToInput} className="calc-number">2</CalcButton>
             <CalcButton onClick={this.addToInput} className="calc-number">3</CalcButton>
             <CalcButton onClick={this.add} className="calc-operator">+</CalcButton>
          </div>
          <div className="calc-row">
             <CalcButton onClick={this.addZeroInput} className="bigger-btn">0</CalcButton>
             <CalcButton onClick={this.addDecimal} className="calc-number">.</CalcButton>
             <CalcButton onClick={this.equate} className="calc-operator">=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
