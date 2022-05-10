import TableForm from './TableForm/TableForm';
import { useDispatch } from 'react-redux';
import { updateSingleTable } from '../../Redux/tablesRedux';
import { useNavigate } from 'react-router-dom';

const EditTableForm = ({ table }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSubmit = tableData => {
    dispatch(updateSingleTable(tableData));
    navigate("/");
  }

  return (
    <TableForm action={handleSubmit} table={table} actionText='Update' />
  )
};

export default EditTableForm;