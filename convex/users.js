import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const CreateUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (existing.length === 0) {
      return await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        credit: 5000,
      });
    }

    return existing[0];
  },
});
export const UpdateUserToken = mutation({
  args: {
    Id: v.id("users"),
    credit: v.number(),   // ✅ match schema
  },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.Id, {
      credit: args.credit,   // ✅ match schema
    });
  },
});
