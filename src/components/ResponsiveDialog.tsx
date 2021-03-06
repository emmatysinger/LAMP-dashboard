// Core Imports
import React from "react"
import { Dialog, DialogProps, Icon, IconButton, Slide, useTheme, useMediaQuery } from "@material-ui/core"

const SlideUp: any = React.forwardRef((props: any, ref) => <Slide direction="up" {...props} ref={ref} />)

//
export default function ResponsiveDialog({
  transient,
  animate,
  fullScreen,
  children,
  ...props
}: {
  transient?: boolean
  animate?: boolean
  fullScreen?: boolean
  children?: any
} & DialogProps) {
  const sm = useMediaQuery(useTheme().breakpoints.down("sm"))
  return (
    <Dialog {...props} fullScreen={!!fullScreen ? true : sm} TransitionComponent={!!animate ? SlideUp : undefined}>
      {!!transient && (
        <IconButton
          style={{
            position: "fixed",
            left: 16,
            top: 16,
            background: "#ffffff66",
            WebkitBackdropFilter: "blur(5px)",
            zIndex: 99999,
          }}
          onClick={props.onClose as any}
          aria-label="Close"
        >
          <Icon>close</Icon>
        </IconButton>
      )}
      {children}
    </Dialog>
  )
}
