import React from 'react';
import IconSearch from 'material-ui/svg-icons/action/search';
import AutoComplete from 'material-ui/AutoComplete';
import { COLOR_INACTIVE, COLOR_HOVER, COLOR_LIGHT_TEXT } from 'styles/icons';

const SearchBox = ({ dataSource, onNewRequest }) => {
  return (
    <div className="search_box">
      <IconSearch color={COLOR_INACTIVE} />
      <AutoComplete
        dataSource={dataSource}
        filter={AutoComplete.caseInsensitiveFilter}
        onNewRequest={onNewRequest}
        maxSearchResults={10}
        hintText="Search"
        fullWidth
        underlineFocusStyle={{ borderColor: COLOR_HOVER }}
        inputStyle={{ color: COLOR_LIGHT_TEXT }}
      />
    </div>
  )
};

export default SearchBox;
