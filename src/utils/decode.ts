export const decodeFunc = (token: string): any => {
  const tokenSplit = token.split('.')[1]
  const decodeToken = JSON.parse(atob(tokenSplit))
  return decodeToken
}
