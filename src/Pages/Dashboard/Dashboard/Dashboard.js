import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Link, Route, Switch, useRouteMatch
} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import AddADoctor from '../AddADoctor/AddADoctor';
import AddAService from '../AddAService/AddAService';
import Admin from '../Admin/Admin';
import ManageAllAppoinments from '../ManageAllAppoinments/ManageAllAppoinments';
import ManageAllServices from '../ManageAllServices/ManageAllServices';
import MyBookings from '../MyBookings/MyBookings';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import './Dashboard.css';

const Dashboard = () => {
    const {handleSignOut,admin} = useAuth();
    let { path, url } = useRouteMatch();
    return (
        <Container className="dashboard-container overflow-hidden">
            <div className="dashboard-title">
                <h1>Dashboard</h1>
            </div>
            <Row >
                <Col className="dashboard-link-main" md={3} xs={12} sm={12}>
                    <div className="dashboard-link">
                       
                        {
                            admin ? <ul>
                            <li><Link to={`${url}/makeAnAdmin`}>Make An Admin</Link></li>
                            <li><Link to={`${url}/manageAllServices`}>Manage All Services</Link></li>
                            <li><Link to={`${url}/manageAllAppoinments`}>Manage All Appoinments</Link></li>
                            <li><Link to={`${url}/addAService`}>Add A Service</Link></li>
                            <li><Link to={`${url}/addADoctor`}>Add A Doctor</Link></li>
                            <button onClick={handleSignOut}>Logout</button>
                            </ul> : 
                            <ul>
                            <li><Link to={`${url}/MyBookings`}>My Bookings</Link></li>
                            <li><Link to={`${url}/pay`}>Pay</Link></li>
                            <li><Link to={`${url}/review`}>Review</Link></li>
                            <button onClick={handleSignOut}>Logout</button>
                            </ul>
                        }
                    </div>
                </Col>
                <Col className="my-3" md={9} xs={12} sm={12}>
                {admin ? 
                    <Switch> 
                        <Route exact path={path}>
                            <ManageAllServices/>
                        </Route>
                        <Route path={`${path}/makeAnAdmin`}>
                        <Admin/>
                        </Route>
                        <Route path={`${path}/manageAllServices`}>
                            <ManageAllServices/>
                        </Route>
                        <Route path={`${path}/addAService`}>
                            <AddAService/>
                        </Route>
                        <Route path={`${path}/manageAllAppoinments`}>
                            <ManageAllAppoinments/>
                        </Route>
                        <Route path={`${path}/addADoctor`}>
                            <AddADoctor/>
                        </Route>
                    </Switch>
                    :
                    <Switch>
                            <Route exact path={path}>
                                <MyBookings/>
                            </Route>
                            <Route path={`${path}/pay`}>
                                <Pay/>
                            </Route>
                            <Route path={`${path}/MyBookings`}>
                                <MyBookings/>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review/>
                            </Route>
                    </Switch>
                }
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;