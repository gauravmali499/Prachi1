const FeedBackForm = () => {


    return (
        <>
            <div className="mx-0 mx-sm-auto" style={{ width: "800px", marginTop: "7%" }} >
                <div className="card">
                    <div className="card-header bg-dark">
                        <h5 className="card-title text-white mt-2" id="exampleModalLabel">Feedback request</h5>
                    </div>
                    <div className="modal-body">
                        <div className="text-center">
                            <i className="far fa-file-alt fa-4x mb-3 text-primary"></i>
                            <p>
                                <strong>Your opinion matters</strong>
                            </p>
                            <p>
                                Let's know about your opinion on products?
                                <strong>Give us your feedback.</strong>
                            </p>
                        </div>

                        <hr />

                        <form className="px-4" action="">
                            <p className="text-center"><strong>Rate the product out of 5:</strong></p>

                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radioExample1" />
                                <label className="form-check-label" htmlFor="radioExample1">
                                    1
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radioExample2" />
                                <label className="form-check-label" htmlFor="radioExample2">
                                    2
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radioExample3" />
                                <label className="form-check-label" htmlFor="radioExample3">
                                    3
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radioExample4" />
                                <label className="form-check-label" htmlFor="radioExample4">
                                    4
                                </label>
                            </div>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="radio" name="exampleForm" id="radioExample5" />
                                <label className="form-check-label" htmlFor="radioExample5">
                                    5
                                </label>
                            </div><br />

                            <p className="text-start"><strong>Tell us about your experience with the product.</strong></p>

                            {/* <!-- Message input --> */}
                            <div className="form-outline mb-4">
                                <textarea className="form-control" id="form4Example3" ></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer text-end">
                        <button type="button" className="btn" style={{ backgroundColor: "#11aaab" }}>Save</button>
                    </div>
                </div>
            </div>



        </>
    )
}

export { FeedBackForm }