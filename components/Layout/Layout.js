import NavBar from "../NavBar/NavBar";

export default function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
}
