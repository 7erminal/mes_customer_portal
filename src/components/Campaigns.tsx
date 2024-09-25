import React, { useContext, useEffect, useState } from "react";
import ApplicationContext from "../resources/ApplicationContext";
import {Campaign} from '../resources/types/applicationTypes';
// @ts-ignore
import Api from "../apis/apis.js"
// @ts-ignore
import { ROUTES } from "../apis/endpoints.js"

const Campaigns: React.FC = ()=>{
    const applicationContext = useContext(ApplicationContext)
    const [campaigns, setCampaigns] = useState<Array<Campaign>>()
    
    useEffect(()=>{
        getCampaigns()
    },[])
    const getCampaigns = async ()=>{
        console.log("About to go get campaigns")
        const url = `${ROUTES.getCampaigns}?id=${applicationContext?.user?.UserId}`;

        await new Api().get_(url).then((response: any)=>{
            console.log("Response is ...")
            console.log(response)
            if(response.status==202){
                console.log("RESPONSE::: ")
                console.log(response.data)
                if(response.data.StatusCode == 200){
                    console.log("Success!")
                    setCampaigns(response.data.Result)
                }
            } else {
                
            }
        }).catch((error: any)=> {
        console.log("Error returned is ... ")
        console.log(error)
        
        })
    }

    return <div className="container-fluid py-4">
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0">
            <h6>Campaigns</h6>
          </div>
          <div className="card-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Campaign</th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Recipient email & number</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
                    <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Scheduled Time</th>
                    <th className="text-secondary opacity-7">Type</th>
                  </tr>
                </thead>
                <tbody>
                    {
                        campaigns?.map((cpg: Campaign, i: number)=>{
                            var class_ = ""
                            cpg.active==0 ? class_ = "badge badge-sm bg-gradient-warning" : cpg.active==2 ? class_ = "badge badge-sm bg-gradient-warning" : cpg.active==4 ? class_ = "badge badge-sm bg-gradient-danger" : cpg.active==1 ? class_ = "badge badge-sm bg-gradient-success" : cpg.active
                            return <tr key={i}>
                            <td>
                              <div className="d-flex px-2 py-1">
                                {/* <div>
                                  <img src="../assets/img/team-2.jpg" className="avatar avatar-sm me-3" alt="user1" />
                                </div> */}
                                <div className="d-flex flex-column justify-content-center">
                                  <h6 className="mb-0 text-sm">{cpg.title}</h6>
                                  <p className="text-xs text-secondary mb-0">{cpg.message}</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <p className="text-xs font-weight-bold mb-0">{cpg.recipient_email}</p>
                              <p className="text-xs text-secondary mb-0">{cpg.recipient_number}</p>
                            </td>
                            <td className="align-middle text-center text-sm">
                              <span className={class_}>{cpg.active==0 ? "Unprocessed" : cpg.active==2 ? "Pending" : cpg.active==4 ? "Errors occurred" : cpg.active==0 ? "Success" : cpg.active}</span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">{cpg.scheduledTime}</span>
                            </td>
                            <td className="align-middle text-center">
                              <span className="text-secondary text-xs font-weight-bold">{cpg.type}</span>
                            </td>
                            {/* <td className="align-middle">
                              <a href="javascript:;" className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                Edit
                              </a>
                            </td> */}
                          </tr>
                        })
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
}

export default Campaigns