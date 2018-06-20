import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from '../styles/PulseStyles';

class Pulse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      color: this.props.color,
      numPulses: this.props.numPulses,
      maxDiameter: this.props.diameter,
      speed: this.props.speed,
      duration: this.props.duration,
      pulses: [],
    };
  }

  componentDidMount = () => {
    const { numPulses, duration, speed } = this.state;
    this.setState({ started: true });
    let a = 0;
    while (a < numPulses) {
      this.createPulseTimer = setTimeout(() => {
        if (this.mounted) {
          const { pulses } = this.state;
          const pulse = {
            pulseKey: pulses.length + 1,
            diameter: 0,
            opacity: 0.5,
          };
          pulses.push(pulse);
          this.setState({ pulses });
        }
      }, a * duration);
      a += 1;
    }
    this.timer = setInterval(() => {
      this.updatePulse();
    }, speed);
  }

  componentWillUnmount = () => {
    this.mounted = false;
    clearTimeout(this.createPulseTimer);
    clearInterval(this.timer);
  }

  mounted = true;

  updatePulse = () => {
    if (this.mounted) {
      const pulses = this.state.pulses.map((p, i) => {
        const { maxDiameter } = this.state;
        const newDiameter = (p.diameter > maxDiameter ? 0 : p.diameter + 2);
        const centerOffset = (maxDiameter - newDiameter) / 2;
        const opacity = Math.abs((newDiameter / this.state.maxDiameter) - 1);
        const pulse = {
          pulseKey: i + 1,
          diameter: newDiameter,
          opacity: (opacity > 0.5 ? 0.5 : opacity),
          centerOffset,
        };
        return pulse;
      });
      this.setState({ pulses });
    }
  }

  render() {
    const {
      maxDiameter,
      color,
      started,
      pulses,
    } = this.state;
    const { insideDiameter } = this.props;
    const containerStyle = { width: maxDiameter, height: maxDiameter };

    return (
      <View style={styles.container}>
        {started &&
          <View style={containerStyle}>
            {pulses.map(pulse => (
              <View
                key={pulse.pulseKey}
                style={[
                  styles.pulse,
                  {
                    backgroundColor: color,
                    width: pulse.diameter,
                    height: pulse.diameter,
                    opacity: pulse.opacity,
                    borderRadius: pulse.diameter / 2,
                    top: pulse.centerOffset,
                    left: pulse.centerOffset,
                  },
                ]}
              />
            ))}
          </View>
        }
        <View
          style={[
            styles.pulse,
            {
              backgroundColor: color,
              width: insideDiameter,
              height: insideDiameter,
              borderRadius: insideDiameter / 2,
            },
          ]}
        />
      </View>
    );
  }
}

Pulse.propTypes = {
  color: PropTypes.string,
  numPulses: PropTypes.number,
  diameter: PropTypes.number,
  speed: PropTypes.number,
  duration: PropTypes.number,
  insideDiameter: PropTypes.number,
};

Pulse.defaultProps = {
  color: 'blue',
  numPulses: 3,
  diameter: 400,
  speed: 10,
  duration: 1000,
  insideDiameter: 20,
};

export default Pulse;
