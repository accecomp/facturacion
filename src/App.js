import { Button, Card, Col, Form, Input, Layout, Row, Tabs } from "antd";
import { BrowserRouter, Routes } from "react-router-dom";
import logo from './img/electrosur_header.png'
import Ventas from './views/ventasView/index';

const { TabPane } = Tabs;

function App() {
  return (
    <Layout>
      <Layout.Header className="navbar" style={{ position: 'fixed', zIndex: 1, width: '100%'}}>
        <div className="mx-auto">
          <img alt="Logo" src={logo} />
        </div>
        <div>
          <a href="http://192.168.30.253" className="btn-regresar">Regresar Menú<br/>Principal</a>
        </div>
      </Layout.Header>
      <Layout.Content className="site-layout" style={{ padding: '0 50px', marginTop: 110}}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Ventas" key="1">
            <Ventas/>
          </TabPane>
          <TabPane tab="Facturas" key="2">
            Facturas
          </TabPane>
        </Tabs>
      </Layout.Content>
    </Layout>
  );
}

export default App;

/*
<Card>
          <Form
            onFinish={handleFinish}
            autoComplete="off"
          >
            <Row>
              <Col offset={1}>
                <Form.Item
                  label="Fecha Inicial"
                  name="fechaInicial"
                >
                  <Input allowClear type={"date"} />
                </Form.Item>
              </Col>
              <Col offset={1}>
                <Form.Item
                  label="Fecha FInal"
                  name="fechaFinal"
                >
                  <Input allowClear type={"date"} />
                </Form.Item>
              </Col>
              <Col offset={1}>
                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Buscar
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        */