import type { Accessor, Component, ComponentProps, VoidProps } from "solid-js"
 
import createEmblaCarousel from "embla-carousel-solid"
import { ArrowLeft , ArrowRight } from "lucide-solid"
import {
  createContext,
  createEffect,
  createMemo,
  createSignal,
  mergeProps,
  splitProps,
  useContext
} from "solid-js"
 
import { cn } from "../../lib/utils"
import { Button, ButtonProps } from "./button"
import type { CreateEmblaCarouselType } from "embla-carousel-solid"
 
export type CarouselApi = CreateEmblaCarouselType[1]
 
type UseCarouselParameters = Parameters<typeof createEmblaCarousel>
type CarouselOptions = NonNullable<UseCarouselParameters[0]>
type CarouselPlugin = NonNullable<UseCarouselParameters[1]>
 
type CarouselProps = {
  opts?: ReturnType<CarouselOptions>
  plugins?: ReturnType<CarouselPlugin>
  orientation?: "horizontal" | "vertical"
  setApi?: (api: CarouselApi) => void
}
 
type CarouselContextProps = {
  carouselRef: ReturnType<typeof createEmblaCarousel>[0]
  api: ReturnType<typeof createEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: Accessor<boolean>
  canScrollNext: Accessor<boolean>
} & CarouselProps
 
const CarouselContext = createContext<Accessor<CarouselContextProps> | null>(null)
 
const useCarousel = () => {
  const context = useContext(CarouselContext)
 
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />")
  }
 
  return context()
}
 
const Carousel: Component<CarouselProps & ComponentProps<"div">> = (rawProps) => {
  const props = mergeProps<(CarouselProps & ComponentProps<"div">)[]>(
    { orientation: "horizontal" },
    rawProps
  )
 
  const [, rest] = splitProps(props, [
    "orientation",
    "opts",
    "setApi",
    "plugins",
    "class",
    "children"
  ])
 
  const [carouselRef, api] = createEmblaCarousel(
    () => ({
      ...props.opts,
      axis: props.orientation === "horizontal" ? "x" : "y"
    }),
    () => (props.plugins === undefined ? [] : props.plugins)
  )
  const [canScrollPrev, setCanScrollPrev] = createSignal(false)
  const [canScrollNext, setCanScrollNext] = createSignal(false)
 
  const onSelect = (api: NonNullable<ReturnType<CarouselApi>>) => {
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }
 
  const scrollPrev = () => {
    api()?.scrollPrev()
  }
 
  const scrollNext = () => {
    api()?.scrollNext()
  }
 
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      scrollPrev()
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      scrollNext()
    }
  }
 
  createEffect(() => {
    if (!api() || !props.setApi) {
      return
    }
 
    props.setApi(api)
  })
 
  createEffect(() => {
    if (!api()) {
      return
    }
 
    onSelect(api()!)
    api()!.on("reInit", onSelect)
    api()!.on("select", onSelect)
 
    return () => {
      api()?.off("select", onSelect)
    }
  })
 
  const value = createMemo(
    () =>
      ({
        carouselRef,
        api,
        opts: props.opts,
        orientation: props.orientation || (props.opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      }) satisfies CarouselContextProps
  )
 
  return (
    <CarouselContext.Provider value={value}>
      <div
        onKeyDown={handleKeyDown}
        class={cn("relative", props.class)}
        role="region"
        aria-roledescription="carousel"
        {...rest}
      >
        {props.children}
      </div>
    </CarouselContext.Provider>
  )
}
 
const CarouselContent: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  const { carouselRef, orientation } = useCarousel()
 
  return (
    <div ref={carouselRef} class="overflow-hidden">
      <div
        class={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", props.class)}
        {...rest}
      />
    </div>
  )
}
 
const CarouselItem: Component<ComponentProps<"div">> = (props) => {
  const [, rest] = splitProps(props, ["class"])
  const { orientation } = useCarousel()
 
  return (
    <div
      role="group"
      aria-roledescription="slide"
      class={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        props.class
      )}
      {...rest}
    />
  )
}
 
type CarouselButtonProps = VoidProps<ButtonProps>
 
const CarouselPrevious: Component<CarouselButtonProps> = (rawProps) => {
  const props = mergeProps<CarouselButtonProps[]>({ variant: "outline", size: "icon" }, rawProps)
  const [, rest] = splitProps(props, ["class", "variant", "size"])
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()
 
  return (
    <Button
      variant={props.variant}
      size={props.size}
      class={cn(
        "absolute  size-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        props.class
      )}
      disabled={!canScrollPrev()}
      onClick={scrollPrev}
      {...rest}
    >
      <ArrowLeft class="size-4" />
      <span class="sr-only">Previous slide</span>
    </Button>
  )
}
 
const CarouselNext: Component<CarouselButtonProps> = (rawProps) => {
  const props = mergeProps<CarouselButtonProps[]>({ variant: "outline", size: "icon" }, rawProps)
  const [, rest] = splitProps(props, ["class", "variant", "size"])
  const { orientation, scrollNext, canScrollNext } = useCarousel()
 
  return (
    <Button
      variant={props.variant}
      size={props.size}
      class={cn(
        "absolute size-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        props.class
      )}
      disabled={!canScrollNext()}
      onClick={scrollNext}
      {...rest}
    >
      <ArrowRight class="size-4" />
      <span class="sr-only">Next slide</span>
    </Button>
  )
}
 
export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext }