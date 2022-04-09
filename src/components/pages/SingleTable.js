import {  useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { getTableById } from "../../Redux/tablesRedux"
import TableForm from "../features/TableForm/TableForm"

const SingleTable = () => {
  const { id } = useParams()
  const table = useSelector(state => getTableById(state, parseInt(id) ))
  // console.log(table);

  if(!table) return <Navigate to="/"/>
  return (
    
    <TableForm table={table}/>
  )
}

export default SingleTable