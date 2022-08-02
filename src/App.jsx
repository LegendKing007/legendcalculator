import React, { Component } from "react";
import "./App.css";
import Display from "./display";
import DarkLightMode from "./darkLightMode";

class App extends Component {
	state = {
		display: "",
		answer: "",
		color: "black",
		buttonColors: "rgb(235, 235, 235)",
	};

	displayNumber = (event) => {
		this.setState({ display: this.state.display.concat(event) });
	};

	clearDisplay = (event) => {
		this.setState({ display: "", answer: "" });
	};

	handleDelete = () => {
		const displayedItem = this.state.display;
		const deletedItem = displayedItem.substring(
			0,
			this.state.display.length - 1
		);
		this.setState({ display: deletedItem });
	};

	calculateResult = () => {
		if (this.state.display.includes("sin")) {
			this.calculateSine();
		} else if (this.state.display.includes("cos")) {
			this.calculateCos();
		} else if (this.state.display.includes("tan")) {
			this.calculateTan();
		} else if (this.state.display.includes("pi")) {
			this.calculatePi();
		} else {
			const result = Number(eval(this.state.display));
			this.setState({ answer: result });
		}
	};

	toggleMode = (event) => {
		if (event === this.state.color) {
			this.setState({ color: "white", buttonColors: "rgb(41,41,41)" });
		} else {
			this.setState({
				color: "black",
				buttonColors: "rgb(235, 235, 235)",
			});
		}
	};

	calculateSine = (event) => {
		const value = this.state.display;
		const name2 = value.slice(3, 5);
		const convertedString = Number(name2);
		const radians = Math.PI / 180;
		const radians2 = radians * convertedString;
		const result = Math.sin(radians2);
		this.setState({ answer: result });
	};
	calculateCos = (event) => {
		const value = this.state.display;
		const name2 = value.slice(3, 5);
		const convertedString = Number(name2);
		const radians = Math.PI / 180;
		const radians2 = radians * convertedString;
		const result = Math.cos(radians2);
		this.setState({ answer: result });
	};
	calculateTan = (event) => {
		const value = this.state.display;
		const name2 = value.slice(3, 5);
		const convertedString = Number(name2);
		const radians = Math.PI / 180;
		const radians2 = radians * convertedString;
		const result = Math.tan(radians2);
		this.setState({ answer: result });
	};

	calculatePi = () => {
		const pi = Math.PI;
		this.setState({ display: pi });
	};

	render() {
		return (
			<div style={{ color: `${this.state.color}` }}>
				<DarkLightMode toggleMode={this.toggleMode} />
				<Display
					display={this.state.display}
					answer={this.state.answer}
				/>

				<div className="container">
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("sin")}
					>
						sin
					</div>
					<div
						className="buttons"
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						onClick={() => this.displayNumber("cos")}
					>
						cos
					</div>
					<div
						className="buttons"
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						onClick={() => this.displayNumber("tan")}
					>
						tan
					</div>
					<div
						className="buttons"
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						onClick={() => this.displayNumber("pi")}
					>
						pi
					</div>
					<div
						className="buttons"
						style={{
							backgroundColor: "rgb(255, 79, 79)",
						}}
						onClick={() => this.clearDisplay()}
					>
						C
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("(")}
					>
						(
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber(")")}
					>
						)
					</div>
					<div
						style={{
							backgroundColor: "rgb(255, 179, 0)",
						}}
						className="buttons"
						onClick={() => this.displayNumber("/")}
					>
						/
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("7")}
					>
						7
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("8")}
					>
						8
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("9")}
					>
						9
					</div>
					<div
						style={{
							backgroundColor: "rgb(255, 179, 0)",
						}}
						className="buttons"
						onClick={() => this.displayNumber("*")}
					>
						x
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("4")}
					>
						4
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("5")}
					>
						5
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("6")}
					>
						6
					</div>
					<div
						style={{
							backgroundColor: "rgb(255, 179, 0)",
						}}
						className="buttons"
						onClick={() => this.displayNumber("-")}
					>
						-
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("1")}
					>
						1
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("2")}
					>
						2
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("3")}
					>
						3
					</div>
					<div
						style={{
							backgroundColor: "rgb(255, 179, 0)",
						}}
						className="buttons"
						onClick={() => this.displayNumber("+")}
					>
						+
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber("0")}
					>
						0
					</div>
					<div
						style={{
							backgroundColor: `${this.state.buttonColors}`,
						}}
						className="buttons"
						onClick={() => this.displayNumber(".")}
					>
						.
					</div>
					<div
						style={{
							backgroundColor: "rgb(255, 79, 79)",
						}}
						className="buttons"
						onClick={() => this.handleDelete()}
					>
						del
					</div>
					<div
						style={{
							backgroundColor: "rgb(0, 255, 153)",
						}}
						className="buttons"
						onClick={() => this.calculateResult()}
					>
						=
					</div>
				</div>
			</div>
		);
	}
}

export default App;
