async function hello(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello World using serverless!' }),
  };
}

export const handler = hello;


