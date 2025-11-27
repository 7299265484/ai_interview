import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),           // ✅ Add parentheses
    email: v.string(),          // ✅ Already correct
    credit: v.number(),         // ✅ Already correct
    subscriptionID: v.optional(v.string())  // ✅ Already correct
  }),
  DiscussionRoom:defineTable({
    coachingOption: v.string(),
    topic:v.string(),
    expertName:v.string(),
    conversation:v.optional(v.any())
  })

})
