import React from 'react'
import { FaSearch } from "react-icons/fa";
import {ClayInput} from '@clayui/form';
import ClayManagementToolbar from '@clayui/management-toolbar';


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
                <FaSearch
                  className="navbar-breakpoint-d-none"
                  displayType="unstyled"
                  symbol="times"
                />
                <FaSearch
                  className="text-primary"
                  displayType="unstyled"
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