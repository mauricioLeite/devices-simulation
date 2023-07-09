import { BrokerClient } from './broker-client';

export class Device {
    #uuid: string;
    #hash: string;
    #client: BrokerClient;

    
    constructor(uuid: string, hash: string) {
        this.#uuid = uuid;
        this.#hash = hash;
        this.#client = new BrokerClient(hash);
    }

    messageDevice(toDevice:string, message:any) {
        this.#client.publishMessage(JSON.stringify({
            fromDevice: this.#uuid,
            toDevice,
            message
        }));
    }

}