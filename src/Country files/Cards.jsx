import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css'
import { dataContext } from '../App';
import { useNavigate } from 'react-router-dom';

function Cards({data}) {
  const {setSelected}=useContext(dataContext)
  const navigate=useNavigate()

  const gosingle=()=>{
    setSelected(data)
    navigate(`/single/{data.cca3}`)
  }
  return (
    <div>
  <Card style={{ width: '18rem' }} onClick={gosingle}>
      <Card.Img className='imgflag' variant="top" src={data.flags.png} />
      <Card.Body>
        <Card.Title>{data.name.common}</Card.Title>
        <Card.Text>
          population:{data.population}
        </Card.Text>
        <Button variant="primary">{data.name.common}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cards