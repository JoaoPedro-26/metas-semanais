import fastify from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { Client } from "pg";
import * as dotenv from "dotenv";
import { createGoalRoute } from "./routes/create-goal";
import { createCompletionRoute } from "./routes/create-completion";
import { getPedingGoalsRoute } from "./routes/get-pending.goals";
import { getWeekSummaryRoute } from "./routes/get-week-summary";
import fastifyCors from "@fastify/cors";

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .then(() => {
    console.log("Conectado ao banco de dados Neon!");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err.stack);
  });

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, {
  origin: "*",
});

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/test-db", async (request, reply) => {
  try {
    const res = await client.query("SELECT NOW()");
    return { message: "Conexão bem-sucedida!", timestamp: res.rows[0] };
  } catch (err) {
    return { error: "Erro ao consultar o banco de dados", details: err };
  }
});

app.register(getPedingGoalsRoute);

app.register(createGoalRoute);

app.register(createCompletionRoute);

app.register(getWeekSummaryRoute);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("HTTP server running on port 3333");
  });
