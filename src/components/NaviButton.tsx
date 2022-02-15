import { useNavigation } from "react-navi";
import { Button } from "semantic-ui-react";

interface PropsType {
  href: string;
  children?: any;
}

const NaviButton: React.FC<PropsType> = (props) => {
  const navigation = useNavigation();

  return (
    <Button onClick={() => navigation.navigate(props.href)}>
      {props.children}
    </Button>
  );
};

export default NaviButton;
