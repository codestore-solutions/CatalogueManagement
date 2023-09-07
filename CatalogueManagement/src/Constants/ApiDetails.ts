const AUTH_DOMAIN = 'https://backend-catalogue-dev.azurewebsites.net';
const DELIVERY_AGENT_DOMAIN = 'https://app-deliveryagent-dev.azurewebsites.net';
const ORDER_BOOKING_DOMAIN = 'https://app-orderbooking-dev.azurewebsites.net';

export const ApiDetails = {
  SIGN_IN: AUTH_DOMAIN + '/api/Account/signIn',
  GET_ACTIVE_TIME_SLOTS:
    DELIVERY_AGENT_DOMAIN + '/api/v1/TimeSlot/getAllActiveTimeSlots',
  GET_ALL_ADDRESS: ORDER_BOOKING_DOMAIN + '/api/v1/address/get-all-addresses',
};
