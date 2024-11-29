import { z } from "zod";

export const editProfileFormSchema = z.object({
  profile_picture: z
    .union([z.string().length(0), z.string().min(4)])
    .optional()
    .transform((e) => (e === "" ? undefined : e)),
  name: z.string().min(4, {
    message: "Name must be at least 4 characters.",
  }),
  username: z.string().min(4, {
    message: "Username must be at least 4 characters.",
  }),
  email: z.string().email("Invalid email format").min(5, {
    message: "Email must be at least 5 characters.",
  }),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long.")
    .regex(/[a-z]/, "Password must include at least one lowercase letter.")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter.")
    .regex(/\d/, "Password must include at least one number.")
    .regex(
      /[\W_]/,
      "Password must include at least one symbol (e.g., @, #, $)."
    )
    .optional()
    .or(z.literal("")),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  present_address: z
    .string()
    .min(4, {
      message: "Address must be at least 4 characters.",
    })
    .optional()
    .or(z.literal("")),
  permanent_address: z
    .string()
    .min(4, {
      message: "Address must be at least 4 characters.",
    })
    .optional()
    .or(z.literal("")),
  city: z
    .string()
    .min(2, {
      message: "City must be at least 2 characters.",
    })
    .optional()
    .or(z.literal("")),
  postal_code: z
    .string()
    .min(5, {
      message: "Postal Code must be at least 5 characters.",
    })
    .optional()
    .or(z.literal("")),
  country: z
    .string()
    .min(2, {
      message: "Country must be at least 2 characters.",
    })
    .optional()
    .or(z.literal("")),
});
