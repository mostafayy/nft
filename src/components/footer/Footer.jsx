import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Col, Row,ListGroup,ListGroupItem } from 'reactstrap'
import './footer.css'
const Footer = () => {
  const MY_Acconut=[

    {
      display:'Author Profile',
      url:'/seller-profile'
    },
    {
      display:'Create Item',
      url:'/create'
    },
    {
      display:'Author Profile',
      url:'/seller-profile'
    },
    {
      display:'Collection',
      url:'/market'
    },
    {
      display:'Edit profile',
      url:'/edit-profile'
    },
  ]
  const Resoures=[

    {
      display:'Help center',
      url:'#'
    },
    {
      display:'partner',
      url:'#'
    },
    {
      display:'community',
      url:'#'
    },
    {
      display:'Activity',
      url:'#'
    },
  ]
  const COMPANY=[

    {
      display:'About',
      url:'#'
    },
    {
      display:'Career',
      url:'#'
    },
    {
      display:'Ranking',
      url:'#'
    },
    {
      display:'Contact Us',
      url:'/contact'
    },
  ]
  return (
    <footer className='footer'>
<Container>
<Row>
  <Col lg='3' md='6' sm='6'>
  <div className="logo">
    <h2 className="d-flex gap-2 align-items-center">
<span><i className='ri-fire-fill'></i></span>
NFTs
    </h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, laborum ad. Nostrum nemo aliquid reiciendis aspernatur dolor nam ex placeat maxime tempore soluta, aperiam dolore cumque eos, doloribus facere a.</p>
</div>

  </Col>
  <Col lg='2' md='3' sm='6'>
    <h5>My account</h5>
    <ListGroup className='list-group'>
      {
        MY_Acconut.map((item,index)=>(
<ListGroupItem key={index} className='list-item'>
<Link to={item.url}>{item.display}</Link>
</ListGroupItem>
        ))
      }
    </ListGroup>
  </Col>
  <Col lg='2' md='3' sm='6'>
    <h5>Rsources</h5>
    <ListGroup className='list-group'>
      {
        Resoures.map((item,index)=>(
<ListGroupItem key={index} className='list-item'>
<Link to={item.url}>{item.display}</Link>
</ListGroupItem>
        ))
      }
    </ListGroup>
  </Col>
  <Col lg='2' md='3' sm='6'>
    <h5>Company</h5>
    <ListGroup className='list-group'>
      {
        COMPANY.map((item,index)=>(
<ListGroupItem key={index} className='list-item'>
<Link to={item.url}>{item.display}</Link>
</ListGroupItem>
        ))
      }
    </ListGroup>
  </Col>
  <Col lg='3' md='6' sm='6'>
<h5>NewSletter</h5>
<input type="text" className="newsletter" placeholder='Email' />
<div className="social-links d-flex gap-3 align-items-center">
<span><Link to='#'><i className='ri-facebook-line'></i></Link></span>
<span><Link to='#'><i className='ri-instagram-line'></i></Link></span>
<span><Link to='#'><i className='ri-twitter-line'></i></Link></span>
<span><Link to='#'><i className='ri-telegram-line'></i></Link></span>
<span><Link to='#'><i className='ri-discord-line'></i></Link></span>
</div>


</Col>
<Col lg='12' className='mt-4 text-center'><p className='copyright'>

  copyrights 2022 ,Devploped by mostafa yahya tech Daiary All Right Recerved 
</p>
</Col>

</Row>



</Container>
    </footer>
  )
}

export default Footer