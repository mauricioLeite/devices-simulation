import { Device } from './device';

const device1 = new Device('9874c55e-fa94-4bea-b827-5410d3cdc12d', 'a');
const device2 = new Device('12ca8246-39b9-4100-945d-5e304bd7b7a9', 'b');
const device3 = new Device('2c5c676f-67d8-465d-ba32-f3a1c7e9c620', 'c');

setTimeout(() => {
    device1.messageDevice('12ca8246-39b9-4100-945d-5e304bd7b7a9', {control: 'ON'});

    device2.messageDevice('2c5c676f-67d8-465d-ba32-f3a1c7e9c620', {control: 'ON'});
    
    device3.messageDevice('9874c55e-fa94-4bea-b827-5410d3cdc12d', {control: 'OFF'});
    
}, 3000);


