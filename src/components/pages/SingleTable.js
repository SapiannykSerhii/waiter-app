import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getTableById } from "../../Redux/tablesRedux"

const SingleTable = () => {
  const { id } = useParams()
  const tableData = useSelector(state => getTableById(state, parseInt(id) ))
  console.log(tableData);
  return (
    <h2>{tableData.id}</h2>
  )
}

export default SingleTable