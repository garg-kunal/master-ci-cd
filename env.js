const secretName = JSON.parse(
  JSON.stringify(`My_Secret_Name: ${process.env.LESSON_NAME}`)
);

console.log(secretName);
