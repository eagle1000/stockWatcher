import React, {Component} from "react";
import {Line} from 'react-chartjs-2';

class Chart extends Component {

	constructor (props){
		super(props);
		this.state = {
			chartData: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [
				 {
		            label: "title",
		            backgroundColor: 'rgb(255, 99, 132)',
		            borderColor: 'rgb(255, 99, 132)',
		            data: [0, 10, 5, 2, 20, 30, 45]
        	     }
        	   ]
		     }
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
					}

				}}
			/>
		 </div>
			)
	}
}

export default Chart