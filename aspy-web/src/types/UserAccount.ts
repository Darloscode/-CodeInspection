
/* example
name: "Alice Johnson",
        identity: 987654321,
        email: "alice.johnson@gmail.com",
        phone: 987654321,
        role: "admin" */

export interface UserAccount {
    id: number;
    name: string;
    identity: number;
    email: string;
    phone: number;
    role: string;
}