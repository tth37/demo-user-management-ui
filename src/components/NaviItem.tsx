import { useNavigation } from "react-navi";
import { Menu } from "semantic-ui-react";

interface PropsType {
  href: string;
  position?: "left" | "right";
  children?: any;
}

const NaviItem: React.FC<PropsType> = (props) => {
  const navigation = useNavigation();

  return (
    <Menu.Item
      style={{ cursor: "pointer" }}
      onClick={() => navigation.navigate(props.href)}
      position={props.position}
    >
      {props.children}
    </Menu.Item>
  );
};

export default NaviItem;
