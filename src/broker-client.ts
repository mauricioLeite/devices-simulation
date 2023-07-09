import mqtt, { MqttClient } from 'mqtt';

export class BrokerClient {
    #client: MqttClient;
    #publishTopic: string;
    #deviceHash: string;

    constructor(deviceHash: string) {
        // Implement BROKER authentication
        this.#publishTopic = 'v1/devices/sendMessage'
        this.#deviceHash = deviceHash;
        this.#client = mqtt.connect(this.#formatAddress());
        this.#init();
    }

    #init() {
        this.#client.on("connect", () => {
            console.log(`CONNECTED... LISTENING: v1/devices/message/${this.#deviceHash}`);
            this.#client.subscribe(`v1/devices/message/${this.#deviceHash}`);
            this.#client.on('message', this.processMessage)
        })
        
        this.#client.on("error", (error) => { 
            console.log(`Can't connect: ${error}`); 
        });
    }

    processMessage (topic: string, message: any, packet: any) {
            // Proccess message here;
            let str = `\nTOPIC: ${topic} RECEIVED --\n`;
            str += `message:${message}`;
            console.log(str);
    }

    publishMessage(message: string) {
        this.#client.publish(this.#publishTopic, message);
    }

    #formatAddress() {
        const broker = process.env.MQTT_BROKER_ADDR;
        const address = `mqtt://${broker}` + ((process.env.ENV === 'dev') ? ':1883' : '');
        return address;
    }

}


