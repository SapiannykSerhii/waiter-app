import {  useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { getTableById } from "../../Redux/tablesRedux"
import TableForm from "../features/TableForm/TableForm"
import PropTypes from 'prop-types';

const SingleTable = () => {
  const { id } = useParams()
  const table = useSelector(state => getTableById(state, parseInt(id) ))
  // console.log(table);

  if(!table) return <Navigate to="/"/>
  return (
    
    <TableForm table={table}/>
  )
}

TableForm.propTypes = {
  table: PropTypes.object
}

export default SingleTable