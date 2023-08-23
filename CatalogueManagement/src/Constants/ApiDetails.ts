const AUTH_DOMAIN = 'https://backend-catalogue-dev.azurewebsites.net';
const DELIVERY_AGENT_DOMAIN = 'https://app-deliveryagent-dev.azurewebsites.net';

export const ApiDetails = {
  SIGN_IN: AUTH_DOMAIN + '/api/Account/signIn',
  GET_ACTIVE_TIME_SLOTS:
    DELIVERY_AGENT_DOMAIN + '/api/v1/TimeSlot/getAllActiveTimeSlots',
};
