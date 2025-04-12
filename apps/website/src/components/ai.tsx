import { queryAI } from '@tarriffix/ai';

// Example usage wrapped in an async IIFE
(async () => {
  const response = await queryAI('Say 1 word. ');
  console.log(response);
})();

export const AI = queryAI;

