import axios from 'axios'

class Api{
    // Post
	async post_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("POST Url: ")
        console.log(endpoint)

        const config = {
            method: 'post',
            url: endpoint,
            // data: formData,
            data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    async get_ (endpoint) {
        console.log("GET url: "+endpoint)

        const config = {
            method: 'get',
            url: `${endpoint}`,
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const response = await axios(config);

        return response
       
	}

    // Put
	async put_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("PUT Url: ")
        console.log(endpoint)

        const config = {
            method: 'put',
            url: endpoint,
            // data: formData,
            data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    // delete
	async delete_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("PUT Url: ")
        console.log(endpoint)

        const config = {
            method: 'delete',
            url: endpoint,
            // data: formData,
            data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    // delete
	async delete2_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("PUT Url: ")
        console.log(endpoint)

        const config = {
            method: 'delete',
            url: endpoint,
            // data: formData,
            // data: params,
            // timeout: 500000,
            // params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }

    // Post 2. Using query params instead of data body
	async post2_(params, endpoint){
        // console.log("Login")
        console.log(params)
        console.log("POST Url: ")
        console.log(endpoint)

        const config = {
            method: 'post',
            url: endpoint,
            // data: formData,
            // data: params,
            // timeout: 500000,
            params: params,
            // params: { firstName: params.firstname, lastName: params.lastname, age: params.age, height: params.height, weight: params.weight, race: params.race, bloodType: params.bloodType, allergies: params.allergies, chronicIllnessStatus: params.chronicIllnessStatus, medicalCondition: params.medicalCondition, status: params.status, treatmentDate: params.treatmentDate }
            headers: {
                // "Access-Control-Allow-Origin":"*",
                // "AccessCode": merchantName,
                // "sourceSystem": merchantName,
                // 'crossDomain': true,
                // "withCredentials": true,
                // 'Ocp-Apim-Subscription-key': "c04b23f4fa6b4c59b1fff012d4cd20a7",
                // "Authorization": "Bearer "+sessionStorage.getItem("token")
            }
        }

        const res = await axios(config);

        console.log("Response is ")
        console.log(res)

        return await res
    }
}

export default Api