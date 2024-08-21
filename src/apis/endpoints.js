// const authenticationBaseUrl = `http://localhost:8080`;
// const customerBaseUrl = `http://localhost:8083`;
// const businessBaseUrl = `http://127.0.0.1:8000`
const authenticationBaseUrl = `http://15.236.128.186:8010`;
const customerBaseUrl = `http://15.236.128.186:8013`;
const businessBaseUrl = `http://15.236.128.186:8011`

const authenticationApiEndpoints = `${authenticationBaseUrl}/v1`;
const customerApiEndpoints = `${customerBaseUrl}/v1`;

// USERS ENDPOINT
const users = `${customerApiEndpoints}/users`;
// CUSTOMERS ENDPOINT
const customers = `${customerApiEndpoints}/customers`;
// CUSTOMERS CATEGORIES
const customerCategories = `${customerApiEndpoints}/customer-categories`;
// CUSTOMER ACCOUNTS
const customerAccounts = `${customerApiEndpoints}/accounts`;
// NEWSLETTER
const newsletterCustomers = `${customerApiEndpoints}/newsletter`;
// AUTHENTICATION API
const authenticateLocal = `${authenticationApiEndpoints}/auth`;
// AUTHENTICATION OAUTH
const authenticateOAuth = `${authenticationApiEndpoints}/oauth`;
// ONBORD
const onboardBaseUrl = `${businessBaseUrl}/api`

export const ROUTES = {
    
   ///////// THIRD PARTY ENDPOINTS /////
   // CUSTOMER PORTAL
//    customerPortal: customerPortalUrl,
    // GET CUSTOMER SUBSCRIPTION
    // getCustomerSubscription: (leadId) => `${customersApiEndPointBase}/subscription/${leadId}`, // Append lead ID
    // GET CUSTOMER SUBSCRIPTION WITH ACCOUNT NUMBER
    // getCustomerSubscriptionWithAccountNumber: (accountNumber) => `${customersApiEndPointBase}/subscription/accountnumber?accountnumber=${accountNumber}`, // Account number should be appended

    // SIGN UP
    signUp: `${users}/sign-up`,
    // SIGN IN
    login: `${authenticateLocal}/login`,
    
    // ONBOARD BUSINESS DETAILS
    onboard: `${onboardBaseUrl}/onboard/business-details/`,

    // GET USER USING USERNAME
    getUserByUsername: (username) => `${users}/get-user-by-username/${username}`
}





