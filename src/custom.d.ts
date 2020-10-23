declare module 'next-cookies' {
  const nextCookie: (ctx: NextPageContext) => Record<string, unknown>
  export default nextCookie
}
