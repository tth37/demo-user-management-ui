import { useNavigation } from "react-navi";
import { Item } from "semantic-ui-react";

interface PropsType {
  href: string;
  children?: any;
}

const NaviItem: React.FC<PropsType> = (props) => {
  const navigation = useNavigation();

  return (
    <Item
      style={{ cursor: "pointer" }}
      onClick={() => navigation.navigate(props.href)}
    >
      {props.children}
    </Item>
  );
};

export default NaviItem;
