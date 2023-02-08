interface Props {
  duration: number
  finished: boolean
}

// ----
export const Box = ({
  duration,
  finished,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        opacity: finished ? 0 : 1,
        pointerEvents: 'none',
        transition: `opacity ${duration}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  )
}
