import React, {Component} from "react";
import {Line} from 'react-chartjs-2';
import Stocks from "./stocks.js";

class Chart extends Component {
	constructor (props){
		super(props);
		this.state = {
			chartData:props.chartData
	    }    
  	}



	render (){
		return (
		 <div className= "chart">
		 	<Line
				data={this.state.chartData}				
				options={{
					maintainAspectRatio: false,
					tooltips: {
						enabled: true
					},
					// title:{
					// 	display:true,
					// 	text:"AAPL",
					// 	fontSize:25
					// },
					legend:{
						display:false
					}					
				}}
			/>
		 </div>
			)
	}
}

export default Chart