export default function Register(){
    return(
        <>
        <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row justify-content-center align-items-center h-100">
      <div className="col-12 col-lg-9 col-xl-7">
        <div className="card shadow-2-strong card-registration" style={{borderRadius: "15px"}}>
          <div className="card-body p-4 p-md-5">
            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="firstName" className="form-control form-control-lg" />
                    <label className="form-label" for="firstName">Full Name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline datepicker w-100">
                    <input type="date" className="form-control form-control-lg" id="birthdayDate" />
                    <label for="birthdayDate" className="form-label">Birthday</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <div className="form-outline datepicker w-100">
                    <input type="password" className="form-control form-control-lg" id="password" />
                    <label for="password" className="form-label">Password</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline datepicker w-100">
                    <input type="password" className="form-control form-control-lg" id="re-password" />
                    <label for="re-password" className="form-label">Re-Password</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input type="email" id="emailAddress" className="form-control form-control-lg" />
                    <label className="form-label" for="emailAddress">Email</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4 pb-2">
                  <div className="form-outline">
                    <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                    <label className="form-label" for="phoneNumber">Phone Number</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-4 d-flex align-items-center">

                  <h6 className="mb-2 pb-1">Gender: </h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                           value="option1" checked />
                    <label className="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                           value="option2" />
                    <label className="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                           value="option3" />
                    <label className="form-check-label" for="otherGender">Other</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <select className="select form-control-lg">
                    <option value="1" disabled>Choose option</option>
                    <option value="2">Subject 1</option>
                    <option value="3">Subject 2</option>
                    <option value="4">Subject 3</option>
                  </select>
                  <label className="form-label select-label">Choose option</label>
                </div>
              </div>
              <div className="mt-4 pt-2">
                <input className="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}