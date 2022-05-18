import React from 'react'
import {ClayButtonWithIcon} from '@clayui/button';
import {ClayInput} from '@clayui/form';
import ClayManagementToolbar from '@clayui/management-toolbar';
const spritemap = "/icons.svg";

const ToolBar = () => {
  return (
    <ClayManagementToolbar>
      <ClayManagementToolbar.ItemList>
        <ClayManagementToolbar.Search>
          <ClayInput.Group>
            <ClayInput.GroupItem>
              <ClayInput
                aria-label="Search"
                className="form-control input-group-inset input-group-inset-after"
                defaultValue=""
                type="text"
              />
              <ClayInput.GroupInsetItem after tag="span">
                <ClayButtonWithIcon
                  className="navbar-breakpoint-d-none"
                  displayType="unstyled"
                  spritemap={spritemap}
                  symbol="times"
                />
                <ClayButtonWithIcon
                  displayType="unstyled"
                  spritemap={spritemap}
                  symbol="search"
                  type="submit"
                />
              </ClayInput.GroupInsetItem>
            </ClayInput.GroupItem>
          </ClayInput.Group>
        </ClayManagementToolbar.Search>
      </ClayManagementToolbar.ItemList>
    </ClayManagementToolbar>
  )
}

export default ToolBar