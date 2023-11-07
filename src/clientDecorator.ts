import { FacebookNotifier } from "./decorator/facebookNotifier";
import { Notifier } from "./decorator/notifier";
import { SlackNotifier } from "./decorator/slackNotifier";
import { SmsNotifier } from "./decorator/smsNotifier";
let stackNotifier = new Notifier();

stackNotifier = new SlackNotifier(stackNotifier);
stackNotifier = new FacebookNotifier(stackNotifier);
stackNotifier = new SmsNotifier(stackNotifier);

stackNotifier.sendMessage("Hello World from Client");

//this pattern is following the desing on that site https://refactoring.guru/design-patterns/decorator
