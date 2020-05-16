export function signIn(email: string, password: string): Promise<{}> {
    return new Promise(resolve => setTimeout(resolve, 100))
}