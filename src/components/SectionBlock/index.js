import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap';
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

const ItemCardOverlay = ({title, text, link, img}) =>
  <Col lg={4} md={6} sm={12} xs={12}>
    <a href={parseLink(link)}>
      <Card className="Section-card Section-card-overlay">
        <CardImg src={img} overlay/>
        <CardImgOverlay>
          <div style={{position: 'absolute', bottom: 10}}>
            <span style={{backgroundColor: '#50abff', padding: 3, borderRadius: 3, fontSize: 12}}>{text}</span>
            <CardTitle>
              {title}
            </CardTitle>
          </div>
        </CardImgOverlay>
      </Card>
    </a>
  </Col>;

class SectionBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collapse: false
    }
  }

  collapseToggleHandle() {
    this.setState({
      collapse: !this.state.collapse,
    })
  }

  render() {
    const {section} = this.props;

    return (
      <section>
        <Row>
          <Col lg={12}>
            <h4>
              <button onClick={this.collapseToggleHandle.bind(this)}
                      className="btn btn-light btn-sm"
                      style={{cursor: 'pointer'}}>
                <i className={`fa fa-${this.state.collapse ? 'plus' : 'minus'}`}/></button>
              {' '}
              {section.name}
              {' '}
              <Link to={`/s/${section.slug}`} style={{marginLeft: 16}}>&#8663;</Link>
            </h4>
          </Col>
        </Row>

        <Row>
          {
            this.state.collapse ? null : section.entries.map((v, i) =>
                section.version == 'overlays' ?
                  <ItemCardOverlay {...v} key={i}/> :
                  <ItemCard {...v} key={i}/>
              )
          }
        </Row>

        <hr style={{marginTop: 6}}/>
      </section>
    )
  }
}

export default SectionBlock;
