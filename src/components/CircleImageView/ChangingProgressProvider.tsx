import * as React from 'react';

interface ChangingProgressProviderProps {
  values: number[];
  interval: number;
  children?: any;
}

class ChangingProgressProvider extends React.Component<
  ChangingProgressProviderProps
> {
  static defaultProps = {
    interval: 100,
  };

  state = {
    valuesIndex: 0,
  };

  componentDidMount() {
    const intervalDraw = setInterval(() => {
      this.setState({
        valuesIndex: ((this.state.valuesIndex + 1) % this.props.values.length),
      });
    }, this.props.interval);

    intervalDraw;

    setTimeout(() => {
        clearInterval(intervalDraw);
    },900)
  }

  render() {
    return this.props.children(this.props.values[this.state.valuesIndex]);
  }
}

export default ChangingProgressProvider;
