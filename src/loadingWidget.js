import React, {Component} from 'react';
import "./loadingWidget.css"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
        const dashArray = radius * Math.PI * 2;
        const dashOffset = dashArray - dashArray * this.props.percentage / 100;

        return (
            <svg
            width={this.props.sqSize}
            height={this.props.sqSize}
            >
                <circle
                className="circle-background"
                cx={this.props.sqSize / 2}
                cy={this.props.sqSize / 2}
                r={radius}
                strokeWidth={`${this.props.strokeWidth}px`} />
                <circle
                className="circle-progress"
                cx={this.props.sqSize / 2}
                cy={this.props.sqSize / 2}
                r={radius}
                strokeWidth={`${this.props.strokeWidth}px`}
                transform={`rotate(-90 ${this.props.sqSize / 2} ${this.props.sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }} />
                <text
                className="progressText"
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle">
                {`${this.props.percentage}%`}
                </text>
            </svg>
        );
    }
}