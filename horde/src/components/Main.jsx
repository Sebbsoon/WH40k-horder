import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Footer, Header } from "antd/es/layout/layout";
const items = [
  { key: 1, label: `Rules` },
  { key: 2, label: "" },
];
function Main() {
  return (
    <>
      <Layout>
        <Header>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
          ></Menu>
        </Header>
        <Layout>
          <Sider></Sider>
          <Content></Content>
          <Sider></Sider>
        </Layout>
        <Footer></Footer>
      </Layout>
    </>
  );
}
export default Main;
