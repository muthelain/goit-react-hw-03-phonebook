import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styled';

export class Filter extends Component {
  render() {
    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput onChange={this.props.onFilterChange} />
      </FilterLabel>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
