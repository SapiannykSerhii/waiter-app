import { Button } from "react-bootstrap";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { getAllTables } from "../../Redux/tablesRedux"
import LoadingSpinner from "../common/LoadingSpinner";


const Tables = () => {
  const tables = useSelector(state => getAllTables(state))
  // console.log(tables)
  
  return (
    <section>
      <div  className="d-flex justify-content-between">
        <h1 className="mb-5">All Tables</h1>
      </div>
      { tables.length === 0 && <LoadingSpinner/>}
      {
        tables.map( table => (
          <div key={table.id} className="d-flex border-bottom align-items-center">
            <h3 className="m-0">Table {table.id}</h3>
            <p className="ps-4 m-0"><span className="fw-bold">Status</span> {table.status}</p>
            <Link className="ms-auto p-2" to={`/table/${table.id}`} key={table.id}>
              <Button variant="primary">Showe more</Button>
            </Link>
          </div>
        ))
      }
    </section>
  );
}

export default Tables