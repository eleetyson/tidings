// using a component that interacts with the Google Places API to autocomplete address input field
import React, { Component } from 'react'
import PlacesAutocomplete, { geocodeByAddress, getLatLng} from 'react-places-autocomplete'
import uuid from 'react-uuid'

export default class SearchInput extends Component {

  // passing new input value up to parent state via callback function
  handleChange = event => {
    this.props.handleAddressInputChange(event)
  }

  // on dropdown selection, passing address selection up to parent via callback function
  handleSelect = event => {
    // update input field text before invoking callback
    this.props.handleAddressInputChange(event)

    geocodeByAddress(event)
      .then(results => getLatLng(results[0]))
      .then(result => {
        this.props.handleAddressInputSelect(event)
      })
      .catch(error => console.error('Error', error))
  }

  render() {
    return (
      <PlacesAutocomplete
        value={this.props.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
        searchOptions={{ componentRestrictions: {country: 'us'}, types: ['address'] }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Recipient address *',
                className: 'location-search-input',
              })}
              autoComplete={'' + Math.random()}
              required
            />

            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active ? 'suggestion-item--active  dropdown' : 'suggestion-item  dropdown'
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
