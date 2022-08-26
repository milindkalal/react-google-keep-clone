import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  LightbulbOutlined as Lightbulb,
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";

const NavList = () => {
  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <Lightbulb />,
    },
    {
      id: 2,
      name: "Archive",
      icon: <Archive />,
    },
    {
      id: 3,
      name: "Trash",
      icon: <Delete />,
    },
  ];

  return (
    <List>
      {navList.map((list) => (
        <ListItem button key={list.id}>
          <ListItemIcon>{list.icon}</ListItemIcon>
          <ListItemText primary={list.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
