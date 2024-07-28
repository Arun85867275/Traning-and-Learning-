import { LightningElement,api } from 'lwc';

export default class IndiaPrivateLwc extends LightningElement {
  messaging = 'public property';
  @api recordId;
}