import React from 'react'
import ReactDOM from 'react-dom'
import debounce from 'debounce'

class Search extends React.Component {

  componentDidMount () {
    this.input = ReactDOM.findDOMNode(this.refs.input)
  }

  onFocus () {
    // animate on focus
    this.input = ReactDOM.findDOMNode(this.refs.input)
    this.input.setSelectionRange(0, this.input.value.length)
  }

  onBlur () {
    // TODO animate on blur
  }

  onChange () {
    this.props.onChange(this.input.value)
  }

  render () {
    let { wait, onBlur, onFocus } = this.props

    const attrs = {
      className: this.props.className,
      disabled: this.props.disabled,
      onBlur: onBlur || this.onBlur.bind(this),
      onFocus: onFocus || this.onFocus.bind(this),
      onChange: debounce(this.onChange.bind(this), wait || 0)
    }

    return <input ref='input' {...attrs} />
  }
}

Search.propTypes = {
  className: React.PropTypes.string,
  disabled: React.PropTypes.bool,
  wait: React.PropTypes.number,
  onBlur: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onFocus: React.PropTypes.func
}

Search.defaultProps = {
  className: '',
  disabled: false,
  debounce: 0
}

export default Search
