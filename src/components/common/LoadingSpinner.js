import { Spinner } from "react-bootstrap"

const LoadingSpinner = () => {

  return (
    <div className="my-5 d-flex justify-content-center">
      <Spinner animation="border" role="status" variant="primary">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  )
}

export default LoadingSpinner