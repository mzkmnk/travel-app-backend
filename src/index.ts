import {Elysia,t} from "elysia";
import {UserQuery} from "./database/queries/user.query";
import cors from "@elysiajs/cors";

const app = new Elysia();

app.use(cors({
  origin:'http://localhost:4200'
}))

app.get('/user/:id',async ({params:{id}}) => {
  return {
    exist:await UserQuery().readById({id})
  }
});

app.post('/user/create',async ({body}) =>{

  console.log(body);

  const user = await UserQuery().create({data:{...body}})

  return {
    data:user[0],
  }

},{
  body:t.Object({
    id:t.String(),
    username:t.String(),
    email:t.String()
  })
});

app.listen(process.env.PORT || 3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
