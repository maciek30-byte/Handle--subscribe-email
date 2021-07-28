export type User = { username: string; pass: string };

export const host: User = {
    username: "mailofcola@gmail.com",
    pass: "Cola1234@",
};

export const subscriber: User = {
    username: "mailofcola2@gmail.com",
    pass: "Cola1234@",
};

export const htmlMessage = `
<a href='http://localhost:3114/email'>Click me</a>`;

export const secondMessage = `
 <h1>Processing complete</h1>
 `;

export const confirmMessage = `<h1> email delivered properly<h1/>`;
