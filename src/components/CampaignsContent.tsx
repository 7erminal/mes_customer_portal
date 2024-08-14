import React from "react";
import SideMenu from "./SideMenu";
import HeadNav from "./HeadNav";
import CreateCampaign from "./CreateCampaign";
import { Row } from "react-bootstrap";

type Props = {
    page: string
}

const CampaignsContent: React.FC<Props> = ({page})=>{
    return <>
        <SideMenu page={page} />
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
            <HeadNav page={page} />
            <div className="container-fluid py-4">
            <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Your balance</p>
                    <h5 className="font-weight-bolder mb-0">
                      GHS3,000
                      {/* <span className="text-success text-sm font-weight-bolder">+55%</span> */}
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Today's Usage</p>
                    <h5 className="font-weight-bolder mb-0">
                      1,300
                      <span className="text-success text-sm font-weight-bolder">+3%</span>
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Number of clients</p>
                    <h5 className="font-weight-bolder mb-0">
                      +3,462
                      {/* <span className="text-danger text-sm font-weight-bolder">-2%</span> */}
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-capitalize font-weight-bold">Total notifications sent</p>
                    <h5 className="font-weight-bolder mb-0">
                      0
                      {/* <span className="text-success text-sm font-weight-bolder">+5%</span> */}
                    </h5>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow text-center border-radius-md">
                    <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                <Row className="my-2">
                    <CreateCampaign />
                </Row>
            </div>
        </main>
        </>
}

export default CampaignsContent