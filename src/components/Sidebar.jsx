// src/components/Sidebar.js
import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider style={{ background: "white" }}>
      <Menu theme="light" mode="inline">
        <Menu.Item key="1">
          <Link to="/books">Книги</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/rental">Аренда</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/rentors">Клиенты</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
