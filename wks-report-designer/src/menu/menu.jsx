import React from "react";
import { Menubar, Menu, MenuItem, Divider } from "react-desktop-menus"

export default class AppMenu extends React.Component {
    render() {

        return (
            <div id="menu-container">
                <Menubar>
                    <Menu label="File" className="menu">
                        <MenuItem label="Info" />
                        <MenuItem label="New" />
                        <MenuItem label="Open" />
                        <Divider />
                        <MenuItem label="Save" />
                        <MenuItem label="Save As" />
                        <MenuItem label="Preview" />
                        <MenuItem label="Share" />
                        <MenuItem label="Publish" />
                        <MenuItem label="Help" />
                        <MenuItem label="Get Started" />
                        <MenuItem label="Close" />
                        <Divider />
                        <MenuItem label="Account" />
                        <MenuItem label="Options" />
                        <MenuItem label="About" />
                    </Menu>

                    <Menu label="Home" className="menu">
                        <MenuItem label="Paste" />
                        <MenuItem label="Cut" />
                        <MenuItem label="Copy" />
                        <MenuItem label="Delete" />
                        <Divider />
                        <MenuItem label="Text Format" />
                        <Divider />
                        <MenuItem label="Align" />
                        <Divider />
                        <MenuItem label="Borders" />
                    </Menu>

                    <Menu label="Insert" className="menu">
                        <MenuItem label="Page" />
                        <MenuItem label="Dashboard" />
                        <Divider />
                        <MenuItem label="Bands" />
                        <MenuItem label="Bar Code" />
                        <MenuItem label="Shapes" />
                        <MenuItem label="Chart" />
                        <MenuItem label="Gauge" />
                        <MenuItem label="Map" />
                        <Divider />
                        <MenuItem label="Page Header" />
                        <MenuItem label="Page Footer" />
                        <MenuItem label="Group Header" />
                        <MenuItem label="Group Footer" />
                        <MenuItem label="Header" />
                        <MenuItem label="Footer" />
                        <MenuItem label="Data" />
                        <MenuItem label="Text" />
                        <MenuItem label="Rich Text" />
                        <MenuItem label="Image" />
                    </Menu>

                    <Menu label="Page" className="menu">
                        <MenuItem label="Margins" />
                        <MenuItem label="Orientation" />
                        <MenuItem label="Size" />
                        <MenuItem label="Columns" />
                        <MenuItem label="Watermark" />
                        <Divider />
                        <MenuItem label="Show Grid" />
                        <MenuItem label="Show Order" />
                        <MenuItem label="Show Rulers" />
                    </Menu>

                    <Menu label="Layout" className="menu">
                        <MenuItem label="Align to Grid" />
                        <MenuItem label="Align" />
                        <MenuItem label="Bring to Front" />
                        <MenuItem label="Send to Back" />
                        <MenuItem label="Move Forward" />
                        <MenuItem label="Move Backward" />
                        <Divider />
                        <MenuItem label="Size" />
                    </Menu>

                    <Menu label="Preview" className="menu">
                        <MenuItem label="Print" />
                        <MenuItem label="Open" />
                        <MenuItem label="Save" />
                        <MenuItem label="Send Email" />
                        <Divider />
                        <MenuItem label="Page Width" />
                        <MenuItem label="Full Screen" />
                    </Menu>
                </Menubar >
            </div>
        )
    }
}