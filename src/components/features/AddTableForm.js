import { useNavigate } from "react-router-dom";
import TableForm from "./TableForm/TableForm";
import { useDispatch } from "react-redux";
import { addTableRequest } from "../../Redux/tablesRedux";

const AddTableForm = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const table = {
    status: 'Free',
    peopleAmount: 0,
    maxPeopleAmount: 10,
    bill: 0,
  }

  const handleSubmit = tableData => {
    dispatch(addTableRequest(tableData));
    navigate("/");
  }
  return (
    <TableForm action={handleSubmit} table={table} actionText={'Add table'} />
  )
}

export default AddTableForm