import {Query} from "./query.type.ts";

export const queries = [
    {
        id: "query1",
        text: `select * from users where id=?`
    },
    {
        id: "query2",
        text: `select id from users`
    }
] satisfies Query[];
