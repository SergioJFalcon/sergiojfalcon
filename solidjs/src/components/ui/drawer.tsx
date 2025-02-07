import type { Component, ComponentProps } from "solid-js"
import { splitProps } from "solid-js"

import * as DrawerPrimitive from "corvu/drawer"

import { cn } from "../../lib/utils"

const Drawer = DrawerPrimitive.Root

const DrawerTrigger = DrawerPrimitive.Trigger

const DrawerPortal = DrawerPrimitive.Portal

const DrawerClose = DrawerPrimitive.Close

const DrawerOverlay: Component<DrawerPrimitive.OverlayProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <DrawerPrimitive.Overlay class={cn("fixed inset-0 z-50 bg-black/80", props.class)} {...rest} />
  )
}

const DrawerContent: Component<DrawerPrimitive.ContentProps> = (props) => {
  const [, rest] = splitProps(props, ["class", "children"])
  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        class={cn(
          "bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border",
          props.class
        )}
        {...rest}
      >
        <div class="bg-muted mx-auto mt-4 h-2 w-[100px] rounded-full" />
        {props.children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

const DrawerHeader: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("grid gap-1.5 p-4 text-center sm:text-left", props.class)} {...rest} />
}

const DrawerFooter: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return <div class={cn("t-auto flex flex-col gap-2 p-4", props.class)} {...rest} />
}

const DrawerTitle: Component<DrawerPrimitive.LabelProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <DrawerPrimitive.Label
      class={cn("text-lg font-semibold leading-none tracking-tight", props.class)}
      {...rest}
    />
  )
}

const DrawerDescription: Component<DrawerPrimitive.DescriptionProps> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  return (
    <DrawerPrimitive.Description
      class={cn("text-muted-foreground text-sm", props.class)}
      {...rest}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription
}
