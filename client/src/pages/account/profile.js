
const profile = () => {
  return (
    <div>
     <div className="container mt-5">
  <div className="row">
    <div className="col-md-6 offset-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">My Account</h5>
          <hr />
          <div className="text-center mb-4">
            <img
              src="user-profile-image.jpg"
              className="rounded-circle"
              alt="User Profile Image"
              width={150}
              height={150}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              defaultValue="John Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              defaultValue="johndoe@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="interests" className="form-label">
              Interests
            </label>
            <ul className="list-group">
              <li className="list-group-item">Travel</li>
              <li className="list-group-item">Photography</li>
              <li className="list-group-item">Sports</li>
            </ul>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default profile
