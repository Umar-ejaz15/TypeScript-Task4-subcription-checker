// Task 4: Enum and Reference Types Combo
// Define an enum for different subscription plans (e.g., Free, Basic, Premium).
// Create a User object type with properties like username, email, and subscriptionPlan (of the enum type).
// Write a function that checks if a User has a Premium subscription and returns a custom message.

enum subscriptionPlan {
  Free,
  Basic,
  Premium,
}

const users: {
  name: string;
  ph: number;
  subscription: subscriptionPlan;
}[] = [
  {
    name: "John",
    ph: 1234567890,
    subscription: subscriptionPlan.Free,
  },
  {
    name: "umar",
    ph: 9876543210,
    subscription: subscriptionPlan.Basic,
  },
  {
    name: "Bob",
    ph: 5555555555,
    subscription: subscriptionPlan.Premium,
  },
];

function checkSubscription(
  name: string,
  ph: number,
  subscription: subscriptionPlan
) {
  if (subscription === subscriptionPlan.Premium) {
    console.log(`${name} has a Premium subscription.`);
  } else {
    console.log(`${name} does not have a Premium subscription.`);
  }
}

users.forEach((user) => {
  checkSubscription(user.name, user.ph, user.subscription);
});
