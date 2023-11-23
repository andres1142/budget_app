type AuthInputs = {
  email: string
  password: string
}

interface CreateUserAccount extends AuthInputs {
  name: string
}

export type { AuthInputs, CreateUserAccount }
