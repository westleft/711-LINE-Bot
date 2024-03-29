// Function handler to receive the text.
import { WebhookEvent, TextMessage, MessageAPIResponseBase, FlexMessage } from '@line/bot-sdk';
const client = require("../config").client;

import { flexMessageData } from "../template/flexMessages/receiver";

export const textEventHandler = async (
  event: WebhookEvent
): Promise<MessageAPIResponseBase | undefined> => {    
  // Process all variables here.

  if (event.type !== "message" || event.message.type !== "text") {
    return;
  }

  // Process all message related variables here.
  const { replyToken } = event;
  const { text } = event.message;

  if (text !== "我要寄件") return;

  const response: FlexMessage = {
    type: "flex", 
    altText: "請選擇收件人",
    contents: flexMessageData
  };

  // Reply to the user.
  await client.replyMessage(replyToken, response);
};
