import { Header } from "../";
import "./styles.css";

function Layout({ dataMenu, children }) {
  return (
    <>
      <Header dataMenu={dataMenu} />
      <main className="mc">{children}</main>
    </>
  );
}
export default Layout;
