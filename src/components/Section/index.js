import React from "react";
import {Card, Col, CardImg, CardBody, CardTitle, Row} from "reactstrap";
import './style.css';
import {Link} from "react-router-dom";

const ItemCard = ({title, text, link, img}) =>
  <Col lg={4} md={6} sm={12} xs={12}>
    <Card className="Section-card">
      <CardImg src={img}/>
      <CardBody>
        <CardTitle>
          {title}
        </CardTitle>

        <a href={link} className="btn btn-primary">
          {text}
        </a>
      </CardBody>
    </Card>
  </Col>;

export default class Section extends React.Component {
  render() {
    const {slug, title, data} = this.props;

    return (
      <section>
        <Row>
          <Col lg={12}>
            <h4>
              {title}
              {' '}
              <Link to={`/s/${slug}`} style={{marginLeft: 16}}>&#8663;</Link>
            </h4>
          </Col>
        </Row>

        <Row>
          {data.map((v, i) => <ItemCard {...v} key={i}/>)}
        </Row>

        <hr/>
      </section>
    )
  }
}
