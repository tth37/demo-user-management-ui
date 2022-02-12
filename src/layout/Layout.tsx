import { observer } from "mobx-react-lite";

interface PropsType {
  children: any;
}

const Layout: React.FC<PropsType> = (props: PropsType) => {
  return (
    <div>
      <header>2333</header>
      {props.children}
    </div>
  );
};

export default observer(Layout);
