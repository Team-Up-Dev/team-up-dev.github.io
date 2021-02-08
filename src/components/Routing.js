import loadable from "@loadable/component";

const Navbar = loadable(() => import("./Navbar"), {
  fallback: (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark"
      style={{ height: "56px" }}
    />
  )
});

const Home = loadable(() => import("../containers/Home"));

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}
