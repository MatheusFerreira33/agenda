import {UserProvider} from './UserContext'

interface iChildren {
  children: React.ReactNode;
}

export const Providers = ({ children }: iChildren) => <UserProvider>{children}</UserProvider>
