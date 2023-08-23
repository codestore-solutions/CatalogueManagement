import {DeliverySlotsEnum} from './DeliverySlotsEnum';

export const DeliverySlotMapper = (deliverySlot: number) => {
  if (deliverySlot == DeliverySlotsEnum.Default10Am) {
    return 'Default(10am)';
  }
  if (deliverySlot == DeliverySlotsEnum.E6AmTo10Am) {
    return '6am to 10am';
  }
  if (deliverySlot == DeliverySlotsEnum.E10AmTo2Pm) {
    return '10am to 2pm';
  }
  if (deliverySlot == DeliverySlotsEnum.E2PmTo6Pm) {
    return '2pm to 6pm';
  }
  if (deliverySlot == DeliverySlotsEnum.E6PmTo10Pm) {
    return '6pm to 10pm';
  }
};
