import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, CardImg, CardBody, CardTitle} from 'reactstrap';
import {parseLink} from "../App";

const ItemCard = ({title, text, link, img}) =>
  <Col lg={4} md={6} sm={12} xs={12}>
    <Card className="Section-card">
      <CardImg src={img}/>
      <CardBody>
        <CardTitle>
          {title}
        </CardTitle>

        <a href={parseLink(link)} className="btn btn-primary">
          {text}
        </a>
      </CardBody>
    </Card>
  </Col>;

const SectionBlock = ({section}) =>
  <section>
    <Row>
      <Col lg={12}>
        <h4>
          {section.name}
          {' '}
          <Link to={`/s/${section.slug}`} style={{marginLeft: 16}}>&#8663;</Link>
        </h4>
      </Col>
    </Row>

    <Row>
      {section.entries.map((v, i) => <ItemCard {...v} key={i}/>)}
    </Row>

    <hr/>
  </section>;

export default SectionBlock;
