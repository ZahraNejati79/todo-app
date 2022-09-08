import Navigation from "../components/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="my-24 flex items-center justify-center">
        <div className="flex items-center justify-center">{children}</div>
      </main>
    </>
  );
};

export default Layout;
