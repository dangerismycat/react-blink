import React from 'react';


const BLINK_INTERVAL = 750;

function toggleBlinkProp(prevState) {
  return { on: !prevState.on };
}


class Blink extends React.Component {
  constructor(props) {
    super(props);
    this.state = { on: true };
    this.toggleBlink = this.toggleBlink.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(this.toggleBlink, BLINK_INTERVAL);
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

export default Blink;
