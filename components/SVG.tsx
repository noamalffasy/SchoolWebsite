import * as React from "react";
import { Component } from "react";

interface Props extends React.SVGProps<SVGSVGElement> {}

class SVG extends Component<Props> {
  render() {
    const { children, ...props } = this.props;
    return <svg {...props}>{children}</svg>;
  }
}

export default SVG;
