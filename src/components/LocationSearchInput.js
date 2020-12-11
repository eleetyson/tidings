import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import uuid from 'react-uuid'

export default class LocationSearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = { address: '' }
  }

  handleChange = address => {
    this.setState({ address })
  }

  handleSelect = selectedAddress => {
    geocodeByAddress(selectedAddress)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.props.handleCallback(selectedAddress)
        this.setState({ address: selectedAddress })
      })
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={{ componentRestrictions: {country: 'us'}, types: ['address'] }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Recipient address',
                className: 'location-search-input',
                autoComplete: "new-password"
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item'
                return (
                  <div key={uuid()} { ...getSuggestionItemProps(suggestion, {className}) } >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }

}
