import * as React from "react";
import { Component } from "react";

interface Props {
  id: string;
  name: string;
  placeholder: string;
}

class Select extends Component<Props> {
  isEmpty = () => {
    if (this.select.value === "" || this.select.value === undefined) {
      return true;
    }

    return false;
  };

  selectInput = e => {
    e.persist();

    this.select.click();

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

  select: HTMLSelectElement = null;
  state = { focus: false, active: false };

  render() {
    const { id, name, placeholder, children } = this.props;
    return (
      <div className={this.state.focus ? "Select focus" : "Select"}>
        <label
          className={this.state.active ? "focus" : ""}
          htmlFor={name}
          onClick={e => {
            e.preventDefault();

            this.select.focus();
          }}
          onFocus={this.selectInput}
          onBlur={this.deselectInput}
        >
          {placeholder}
        </label>
        <div
          className={`select-wrapper${this.state.active ? " focus" : ""}`}
          onFocus={this.selectInput}
          onBlur={this.deselectInput}
        >
          <select
            name={name}
            id={id}
            required
            ref={select => (this.select = select)}
          >
            <option value="" />
            {children}
          </select>
        </div>
        <div className="arrow" />
        <style jsx>{`
          .Select {
            position: relative;
            width: 100%;
            margin-bottom: 2rem;
            cursor: pointer;
          }

          .Select label {
            display: block;
            position: absolute;
            color: rgba(0, 0, 0, 0.4);
            white-space: nowrap;
            right: 0;
            user-select: none;
            pointer-events: none;
            cursor: inherit;
            transition: all 0.3s;
            transform-origin: right top;
            z-index: 5;
          }

          .Select.focus label {
            transform: translateY(-75%) scale(0.75);
          }

          .Select label.focus {
            color: #3e618f;
          }

          .Select .select-wrapper {
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
            padding-bottom: 2px;
          }

          .Select .select-wrapper::after {
            content: "";
            display: block;
            transform: scaleX(0) translateY(0.25rem);
            margin: -0.15rem 0 0 0;
            border-bottom: 2px solid #3e618f;
            width: 100%;
            transition: all 0.3s;
          }

          .Select .select-wrapper.focus::after {
            transform: scaleX(1) translateY(0.25rem);
          }

          .Select .select-wrapper select {
            display: block;
            width: 100%;
            text-align: right;
            direction: rtl;
            appearance: none;
            border: 0;
            transform: translateX(0.3rem);
          }

          .Select .select-wrapper select option:empty {
            display: none;
          }

          .Select .arrow {
            position: absolute;
            height: 0;
            width: 0;
            border-color: rgba(0, 0, 0, 0.38) transparent;
            border-style: solid;
            border-width: 6px 6px 0 6px;
            left: 5px;
            bottom: 10px;
            pointer-events: none;
          }
        `}</style>
      </div>
    );
  }
}

export default Select;
