import React, { PropTypes } from 'react';


const DEFAULT_INTERVAL = 750;

function toggleBlinkProp(prevState) {
  return { on: !prevState.on };
}


class Blink extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { on: true };
    this.toggleBlink = this.toggleBlink.bind(this);
  }

  componentDidMount() {
    const interval = this.props.interval || DEFAULT_INTERVAL;
    this.timer = setInterval(this.toggleBlink, interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleBlink() {
    this.setState(toggleBlinkProp);
  }

  render() {
    const visibility = this.state.on ? 1 : 0;

    return (
      <div style={{ opacity: visibility }}>
        {this.props.children}
      </div>
    );
  }
}

Blink.propTypes = {
  interval: PropTypes.number,
};

export default Blink;
