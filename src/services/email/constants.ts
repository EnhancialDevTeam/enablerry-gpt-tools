// Email service configuration
export const EMAIL_TEMPLATE_MAPPINGS = {
  FEEDBACK: {
    from_name: 'from_name',     // Maps to {{from_name}} in template
    message: 'message',         // Maps to {{message}} in template
    rating: 'rating',           // Maps to {{rating}} in template
    email: 'from_email',        // Maps to {{email}} in template
  },
  GPT_IDEA: {
    from_name: 'from_name',     // Maps to {{from_name}} in template
    message: 'description',     // Maps to {{message}} in template
    email: 'from_email',        // Maps to {{email}} in template
    tool_name: 'tool_name',     // Maps to {{tool_name}} in template
    use_case: 'use_case',       // Maps to {{use_case}} in template
  }
} as const;