require("dotenv").config();

import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  // defaults to process.env["ANTHROPIC_API_KEY"]
  apiKey:process.env.ANTHROPIC_API_KEY,
});

async function main(){
    anthropic.messages.stream({
        messages: [{role: 'user', content: "Hello"}],
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1024,
}).on('text', (text) => {
    console.log(text);
});
}

main();
