require("dotenv").config();
const functionDescriptions = require("../functionDescription/index");
const availableFunctions = require("./open_functions");

async function callGPTFunctions(messages, functions) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API}`,
    },
    // construct the request payload
    // using the entire chat history (global.messages)
    // sending an external request to the OpenAI API
    body: JSON.stringify({
      model: "gpt-4-turbo",
      temperature: 0.3,
      messages: messages,
      functions: functions,
      function_call: "auto",
    }),
  });
  return response;
}

async function analyseQuery(message) {
  let gptMessageHistory = [];
  let systemMessage = {
    role: "system",
    content:
      "You are a Telegram bot, specialized in the field of Blockchain technology. Your primary task is to promptly respond to user inquiries in a highly professional manner",
  };
  gptMessageHistory.push(systemMessage);
  let userMessage = { role: "user", content: message };
  gptMessageHistory.push(userMessage);
  let response = await callGPTFunctions(
    gptMessageHistory,
    functionDescriptions
  );
  if (!response.ok) {
    // if the request was not successful, parse the error
    const error = await response.json();
    // log the error for debugging purposes
    console.error("OpenAI API Error:", error);
    // return an error response to the client
    return { status: "error", data: error.message };
  }
  let data = await response.json();
  if (data?.choices?.length > 0) {
    const responseMessage = data?.choices[0]?.message;
    if (responseMessage?.function_call) {
      console.log(
        "function call ============&&&&&&&&&&&&*******************&&&&&&&&&&&&&&&&++++++++>>>>>>>>",
        responseMessage.function_call.name,
        responseMessage.function_call.arguments
      );
      const functionName = responseMessage.function_call.name;
      const functionToCall = availableFunctions[functionName];
      const functionArgs = JSON.parse(responseMessage.function_call.arguments);
      let functionResponse;
      if (functionName == "weiToEther") {
        functionResponse = await functionToCall(functionArgs.wei);
      } else {
        if (functionName == "etherToWei") {
            console.log('======>',functionArgs, functionArgs.ether);
          functionResponse = await functionToCall(functionArgs.ether);
        } else {
          functionResponse = await functionToCall(functionArgs.account_address);
        }
      }

      console.log("functionResponse", functionResponse);

      gptMessageHistory.push(responseMessage);
      console.log("Ppppppppppppppppppppppp +++++++++>>>", responseMessage);
      gptMessageHistory.push({
        role: "function",
        name: functionName,
        content: JSON.stringify(functionResponse),
      });
      response = await callGPTFunctions(
        gptMessageHistory,
        functionDescriptions
      );
      //   console.log('response',response);
      // response = await callGPTFunctions(global[_id].messages, functions);
      data = await response.json();
      const botAnswer = data?.choices?.[0]?.message?.content;
      return botAnswer;
    } else {
      const botAnswer = data?.choices?.[0]?.message?.content;
      return botAnswer;
    }
  }
}

// analyseQuery('explain the contract present at 0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413 in short description')
//     .then(sourceCode => {
//         if (sourceCode) {
//             console.log('Contract Source Code:', sourceCode);
//         } else {
//             console.log('No source code found or error occurred');
//         }
//     });

module.exports = analyseQuery;
