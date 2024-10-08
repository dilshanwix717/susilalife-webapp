import React from "react";
import cancel from "/assets/images/cancel.png";

const Cancel = () => {
    return (

        <div class="d-flex justify-content-center align-items-center min-vh-100">
            <div class="d-flex flex-column justify-content-center align-items-center">
                <div class="my-5 text-center d-flex flex-column justify-content-center align-items-center">
                    <img
                        src={cancel}
                        alt="cancel"
                        width={220}
                        height={220}
                        className="mix-blend-multiply"
                    />
                    <h3 className="text-center fw-bold fs-1 mt-5">
                        Something Went Wrong
                    </h3>
                    <a
                        href="/"
                        className="btn btn-success btn-lg mt-4 px-4 py-2"
                    >
                        Go To Homepage
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Cancel;

