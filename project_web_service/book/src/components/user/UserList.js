import React, { useEffect, useState } from "react"
import * as userService from "../../service/UserService"
export default function UserList() {
    const [users, setUsers] = useState([]);
    const display = async () => {
        try {
            const res = await userService.getAllUser();
            console.log(res);
            setUsers(res)
        } catch (error) {
            console.log("Error");
        }
    }
    useEffect(() => {
        display();
    }, [])
    return (
        <>
            <div className="container">
                <div className="table-responsive">
                <div className="row mb-1">
                        <div className="col-6">
                            <div className="row mb-1">
                                <div className="col-12">
                                    <h3 style={{ textAlign: "center" }}>User Management</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <input style={{ borderRadius: "10px" }} />
                                        <span className="m-2">
                                            <i class="bi bi-search"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                            </svg>
                                        </span>
                                        <span>
                                            <i class="bi bi-plus-square"></i>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
                                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>name</th>
                                <th>Gender</th>
                                <th>BirthDay</th>
                                <th>Phone</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.map((user) => {
                                return (
                                    <React.Fragment key={user.id}>
                                        <tr >
                                            <td scope="row">{user.count}</td>
                                            <td>{user.name}</td>
                                            <td>{user.gender ? "Female" : "Male"}</td>
                                            <td>{user.dob}</td>
                                            <td>{user.phone}</td>
                                            <td>{user.role.name}</td>
                                            <td>
                                                <button type="button" class="btn btn-outline-danger m-1 " data-bs-toggle="modal" data-bs-target="#modalId">
                                                    Delete
                                                </button>
                                                <button type="button" class="btn btn-outline-primary " data-bs-toggle="modal" data-bs-target="#modalId">
                                                    Update
                                                </button>

                                                <div class="modal fade" id="modalId" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                                                    <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm" role="document">
                                                        <div class="modal-content">
                                                            <div class="modal-header">
                                                                <h5 class="modal-title" id="modalTitleId">Modal title</h5>
                                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                            </div>
                                                            <div class="modal-body">
                                                                Body
                                                            </div>
                                                            <div class="modal-footer">
                                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                                <button type="button" class="btn btn-primary">Save</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>


                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })}
                        </tbody>
                    </table>
                    <script>
                        const myModal = new bootstrap.Modal(document.getElementById('modalId'), options)
                    </script>
                </div>
            </div>
        </>
    )
}