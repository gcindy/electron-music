import * as React from "react";
import { Layout } from "antd";

import "./index.scss";
import SideBar from "../../components/sideBar/SideBar";
import HeaderContainer from "../../components/header/Header";
// content中的内容
import Banner from "../banner";
import PlayList from "../recommendedPlayList";
import ExclusiveList from "../exclusiveBroadcast";
import PlayVedio from "../playVedio";

// import FooterContainer from "../../components/footer/Footer";

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content } = Layout;

class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <Layout className="layOut">
          <Sider className="left-layout-sider">
            <SideBar />
          </Sider>
          <Layout>
            <Header>
              <HeaderContainer />
            </Header>
            <Content>
              <div className="content-box">
                <Banner />
                <PlayList />
                <ExclusiveList />
                <PlayVedio />
              </div>
            </Content>
            {/* <Content> {this.props.children}</Content> */}
          </Layout>
        </Layout>
        {/* <Footer>
          <FooterContainer />
        </Footer> */}
      </div>
    );
  }
}

export default BasicLayout;
