import { useState } from "react"
import { Form,Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { updateSingleTable } from "../../../Redux/tablesRedux"
import shortid from "shortid"
import LoadingSpinner from "../../common/LoadingSpinner"
import styles from "../TableForm/TableForm.module.scss"
import PropTypes from 'prop-types'

const TableForm = ({ table, action ,actionText }) => {

  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [status, setStatus] = useState(table.status)
  const [peopleAmount, setPeopleAmount] = useState(table.peopleAmount)
  const [maxPeopleAmount, setMaxPeopleAmount] = useState(table.maxPeopleAmount)
  const [bill, setBill] = useState(table.bill)

  const [isLoading, setIsLoading] = useState(false)

  const statusNames = ['Busy', 'Cleaning', 'Free', 'Reserved']
  const otherStatuses = statusNames.filter(statusName => statusName !== status)
  // console.log(otherStatuses);

  const handleSubmit = () => {
    setIsLoading(true)
    // dispatch(updateSingleTable({status, peopleAmount, maxPeopleAmount, bill, id}))
    action({status, peopleAmount, maxPeopleAmount, bill, id})
    navigate('/')
    // console.log("test", handleSubmit);
  }
  const handlePeopleAmount = n => {
   if (n > maxPeopleAmount){
     setPeopleAmount(maxPeopleAmount)
   }else if (n <= 0){
     setPeopleAmount(0)
   }else {
     setPeopleAmount(n)
   }
  }

  const handleMaxPeopleAmount = n =>{
    if(peopleAmount >= n){
      setPeopleAmount(n)
      setMaxPeopleAmount(n)
    }else if (n >= 10){
      setMaxPeopleAmount(10)
    }else {
      setMaxPeopleAmount(n)
    }
  }

  const handleStatus = status => {
    if (status === 'Busy'){
      setBill(0)
      setStatus(status)
    } else if (status === 'Free' || status === 'Cleaning'){
      setPeopleAmount(0)
      setStatus(status)
    }else if(status === 'Reserved'){
      setPeopleAmount(0)
      setMaxPeopleAmount(10)
      setBill(0)
      setStatus(status)
    }else {
      setStatus(status)
    }
  }

  
  
  return(
    <>
      <h1>Table {table.id}</h1>
      {isLoading && <LoadingSpinner/>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlid="status" className="d-flex justify-content-start align-items-center mt-3">
            <Form.Label className="fw-bold mx-2 ">Status: </Form.Label>
            <Form.Select className="w-25" 
            onChange={e => handleStatus(e.target.value)} 
            value={status}
            >
              <option value={status}>{status}</option>
                {
                  otherStatuses.map(statusName => (
                    <option key={shortid()} value={statusName}>{statusName}</option>
                  ))
                }
            </Form.Select>
          </Form.Group>

          <Form.Group constrolid="peopleAmount" className="d-flex justify-content-start align-items-center mt-3">
              <Form.Label className="fw-bold mx-2">People:  </Form.Label>

            <div className={styles.numberInput}>
              <Form.Control 
                type="number"
                value={peopleAmount}
                onChange={e => handlePeopleAmount(e.target.value)}>
              </Form.Control>
            </div>  

              <p className="mx-2 mt-3">/</p>

            <div className={styles.numberInput}>   
              <Form.Control
              type="number"
              value={maxPeopleAmount}
              onChange={e => handleMaxPeopleAmount(e.target.value)}>
              </Form.Control> 
            </div>

          </Form.Group>

         {  
          (status === 'Busy' || status === 'Reserved') &&    
          <Form.Group controlId="bill" className="d-flex justify-content-start    align-items-center mt-2 w-25">
            <Form.Label className="fw-bold mx-2">Bill:</Form.Label>
              <p className="mt-2 mx-2 fw-bold">$</p>
            <div className={styles.numberInput}>  
              <Form.Control
                type="number"
                value={bill}
                onChange={e => setBill(e.target.value)}
              />
            </div>
          </Form.Group>
          } 

            <Button className="mt-3 mx-2" type="submit" variant="primary">{actionText}</Button>

        </Form>
    </>   
  )
}

TableForm.propTypes = {
  table: PropTypes.object,
  action: PropTypes.func,
  actionText: PropTypes.string,
};

export default TableForm