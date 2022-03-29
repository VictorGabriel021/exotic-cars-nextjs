import MainNavigation from "@components/layout/main-navigation";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <MainNavigation />
      {children}
    </>
  );
};

export default Layout;
