import React from "react";

const UserDashboard = () => (
    <>
        <div className="container  mt-4">
            <div className="row">
                <div className="col-4">
                    <div className="card mt-4 border border-secondary">
                        <ul className="list-group list-group-flush">
                            <div className="card-header ">
                                <strong>User Dashboard </strong>
                            </div>
                            <li className="list-group-item ">My Course</li>
                            <li className="list-group-item ">Favourite Course</li>
                            <li className="list-group-item ">Recomended Course</li>
                            <li className="list-group-item ">Profile Setting</li>
                            <li className="list-group-item ">Change Password</li>
                            <li className="list-group-item ">Logout</li>
                        </ul>
                    </div>
                </div>
                <div className="col-8 mt-4">
                    <table className="table border border-radius">
                        <thead>
                            <tr>
                                <th colSpan={3}>My Courses</th>
                            </tr>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Created By</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider table-divider-color">
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colSpan={2}>Larry the Bird</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
);

export default UserDashboard;
