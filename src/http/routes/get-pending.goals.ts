import { z } from "zod";
import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekPedingGoals } from "../../functions/get-week-pending-goals";

export const getPedingGoalsRoute: FastifyPluginAsyncZod = async (app) => {
  app.get("/pending-goals", async () => {
    const { pendingGoals } = await getWeekPedingGoals();

    return { pendingGoals };
  });
};
