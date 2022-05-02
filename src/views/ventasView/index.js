import { Button, Card, Col, Form, Input, Row, Table } from "antd";
import API from '../../api/index';

const Ventas = () => {

  const dataSource = [];
  
  const handleFinish = (values) => {
    console.log("finish: ", values);
    API.ventas.get(values.fechaInicial, values.fechaFinal)
      .then(({data}) =>{
        console.log("data: ", data);
      });
  }

  const columns = [
    {
      title: 'Documento',
      dataIndex: 'documento',
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
    },
    {
      title: 'Importe',
      dataIndex: 'importe',
    }
  ];

  return (
    <>
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
      <Table 
        dataSource={dataSource}
        columns={columns}
      />
    </>
  );
}

export default Ventas;