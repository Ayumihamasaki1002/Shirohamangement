import { useNavigate,useLocation } from "react-router-dom";
import { Menu } from "antd";
import type { MenuProps } from "antd";
import { useState, useEffect } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Option 1", "page1", <PieChartOutlined />),
  getItem("Option 2", "page2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "page3"),
    getItem("Bill", "page4"),
    getItem("Alex", "page5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "page6"),
    getItem("Team 2", "page7"),
  ]),
  getItem("Files", "page8", <FileOutlined />),
];

const MainMenu: React.FC = () => {
  const toNavigate = useNavigate();
  let {pathname}:{pathname:string} = useLocation();
  let i:string[] = []
  const [openKeys, setOpenkeys] = useState([""]);


  useEffect(()=>{
    //有点捞这个地方，之后看看有什么办法改掉
    if(pathname === 'page3'|| pathname === 'page4'||pathname === 'page5')setOpenkeys(['sub1'])
    else if(pathname === 'page6'|| pathname === 'page7')setOpenkeys(['sub2'])
  },[])
  // 通过defaultSelectedKeys，处理路径和菜单按钮匹配
  i = pathname.split('/')
  pathname = i[i.length-1]



  // 菜单切换路由
  const menuChicked = (e: { key: string }) => {
    toNavigate(`/home/${e.key}`);
    
  };


  // 展开处理
  const handleOnCollapse = (keys: string[]) => {
    setOpenkeys([keys[keys.length - 1]]);
    console.log(openKeys);
  };

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[pathname]}
      mode="inline"
      items={items}
      onClick={menuChicked}
      onOpenChange={handleOnCollapse}
      openKeys={openKeys}
    />
  );
};
export default MainMenu;
