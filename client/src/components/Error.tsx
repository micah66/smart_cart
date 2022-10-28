import ErrorProps from "../interfaces/ErrorProps"

const Error = ({error}: ErrorProps) => {
  return (
    <>
      {error.isError && <div className="errorMessage">
        {error.message}
      </div>}
    </>
  )
}

export default Error