import { BaseNotifier } from "./baseNotifier";
import { Notifier } from "./notifier";

export class FacebookNotifier extends BaseNotifier {
  constructor(private readonly notifier:Notifier) {
    super()
  }
  sendMessage(message:string) {
    this.notifier.sendMessage(message);
    console.log(`Message sent to the Facebook was: ${message}`);
  }
}
