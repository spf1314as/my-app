import React, {Component} from 'react'
function BoilingVerdict(props) {
    if( props.celsius >= 100){
        return <p>水烧开了</p>
    }
    return <p>水不会烧开</p>
}



const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit"
}
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

class TemperatureInput extends Component{
    constructor(props){
        super(props)
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature: ''
        };
    }
    handleChange = (e) => {
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend> enter temperature in {scaleNames[scale]}</legend>
                <input type="number" value = {temperature} onChange={this.handleChange} />

            </fieldset>
        )
    }


}

class Calculator extends Component {
    constructor(props){
        super(props)
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }

    handleCelsiusChange = (temperature) =>{
        this.setState({
            scale: 'c',
            temperature
        })
    }

    handleFahrenheitChange = (temperature) => {
        this.setState({
            scale: 'f',
            temperature
        })
    }

    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f'? tryConvert(temperature,toCelsius): temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit): temperature;
        return (
            <div>
                <TemperatureInput scale="c" temperature = {celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale="f" temperature = {fahrenheit} onTemperatureChange = {this.handleFahrenheitChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
                 
            </div>


        )
    }
}

export default Calculator