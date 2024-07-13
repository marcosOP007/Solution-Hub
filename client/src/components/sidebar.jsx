import React from "react";
import { Menu,Space } from 'antd'
import {HomeOutlined, MenuOutlined,CalendarOutlined,UsergroupAddOutlined } from '@ant-design/icons'
import '../style/sidebar.css'
const MySidebar = () => {
  return (
    <Space>
    <Menu theme="dark" mode="inline" className="menu-bar">
      <Menu.Item  icon={<MenuOutlined />} className="btn-side">
      </Menu.Item>
      <Menu.Item  className="btn-side" icon={<UsergroupAddOutlined />} > 
      </Menu.Item>
      <Menu.Item  className="btn-side"  icon={<CalendarOutlined />} > 
      </Menu.Item>
    </Menu>
    </Space>
  );
};

export default MySidebar;
