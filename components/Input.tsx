import * as React from "react";
import { Component } from "react";

interface Props {
  label: string;
  type: string;
}

class Input extends Component<Props> {
  isEmpty = () => {
    if (
      (this.input as HTMLInputElement).value === "" ||
      (this.input as HTMLInputElement).value === undefined
    ) {
      return true;
    }

    return false;
  };

  selectInput = e => {
    e.persist();

    this.setState(prevState => ({
      ...prevState,
      focus: true,
      active: true
    }));
  };

  deselectInput = e => {
    e.persist();

    if (!this.isEmpty()) {
      this.setState(prevState => ({
        ...prevState,
        focus: true,
        active: false
      }));
    } else {
      this.setState(prevState => ({
        ...prevState,
        focus: false,
        active: false
      }));
    }
  };

  input: HTMLInputElement = null;
  state = { focus: false, active: false, class: "" };

  render() {
    return (
      <div
        className={
          this.state.focus
            ? "Input focus" + this.state.class
            : "Input" + this.state.class
        }
      >
        <label
          className={this.state.active ? "focus" : ""}
          htmlFor={this.props.type}
          onClick={e => {
            e.preventDefault();

            const input = this.input;
            (input as HTMLInputElement).focus();
          }}
          onFocus={this.selectInput}
          onBlur={this.deselectInput}
        >
          {this.props.label}
        </label>
        <span
          className={this.state.active ? "focus" : ""}
          onFocus={this.selectInput}
          onBlur={this.deselectInput}
        >
          <input
            id={this.props.type}
            name={this.props.type}
            type={this.props.type}
            required
            ref={input => {
              this.input = input;
            }}
          />
        </span>
        <style jsx>{`
          .Input {
            position: relative;
            width: 100%;
            margin-bottom: 2rem;
            cursor: text;
          }

          .Input label {
            display: block;
            position: absolute;
            color: rgba(0, 0, 0, 0.4);
            white-space: nowrap;
            right: 0;
            user-select: none;
            cursor: inherit;
            transition: all 0.3s;
            transform-origin: right top;
            z-index: 5;
          }

          .Input.focus label {
            transform: translateY(-75%) scale(0.75);
          }

          .Input label.focus {
            color: #3e618f;
          }

          .Input span {
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
            padding-bottom: 2px;
          }

          .Input span::after {
            content: "";
            display: block;
            margin: -0.1rem 0 0;
            border-bottom: 2px solid #3e618f;
            width: 100%;
            transform: scaleX(0);
            transition: all 0.3s;
          }

          .Input span.focus::after {
            transform: scaleX(1);
          }

          .Input span input {
            border: 0;
            position: relative;
            width: 100%;
            text-align: right;
            outline: 0;
            background: none;
            box-shadow: none;
          }

          .Input span input:-webkit-autofill {
            background: none !important;
            color: #131313 !important;
            -webkit-text-fill-color: #131313;
            box-shadow: 0 0 0px 1000px white inset;
          }

          .Input span input:-moz-autofill {
            background: none !important;
            color: #131313 !important;
            -webkit-text-fill-color: #131313;
            box-shadow: 0 0 0px 1000px white inset;
          }

          .Input span input:-o-autofill {
            background: none !important;
            color: #131313 !important;
            -webkit-text-fill-color: #131313;
            box-shadow: 0 0 0px 1000px white inset;
          }

          .Input span input:-khtml-autofill {
            background: none !important;
            color: #131313 !important;
            -webkit-text-fill-color: #131313;
            box-shadow: 0 0 0px 1000px white inset;
          }

          .Input span input,
          .Input span input::placeholder {
            color: #131313;
          }

          @media screen and (-webkit-min-device-pixel-ratio: 0) {
            .Input span input {
              padding: 0;
            }
          }
          @media (min-width: 768px),
            @media (min-width: 768px) and (-webkit-min-device-pixel-ratio: 1) {
            .Input.half:last-of-type {
              margin-right: 0;
              width: 50%;
            }
            .Input.half {
              width: calc(50% - 1rem);
              float: left;
              margin-right: 1rem;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Input;
