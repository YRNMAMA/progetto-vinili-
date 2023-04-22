import Toolbar from "./shared/components/Toolbar";

export function Layout({ children }: any) {
  return (
    <>
      <Toolbar />
      {children}
    </>
  )
}
