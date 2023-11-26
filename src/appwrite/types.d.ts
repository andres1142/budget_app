type AuthInputs = {
  email: string
  password: string
}

interface RegisterInputs extends AuthInputs {
  name: string
}

export type { AuthInputs, RegisterInputs }
