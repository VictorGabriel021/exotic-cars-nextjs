import MainNavigation from "@components/layout/main-navigation";

const Layout: React.FC = (props) => {
  return (
    <>
      <MainNavigation />
      {props.children}
    </>
  );
};

export default Layout;
