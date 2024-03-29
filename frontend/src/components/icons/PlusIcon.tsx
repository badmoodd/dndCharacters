import { HTMLProps } from "preact/compat"

type PlusIconProps = {

} & HTMLProps<SVGSVGElement>

export const PlusIcon = (props: PlusIconProps) => (
 <svg class={props.class} onClick={props.onClick} fill="none" viewBox="0 0 24 24" height="2em" width="2em">
 <path
   fill="currentColor"
   d="M12 6a1 1 0 011 1v4h4a1 1 0 110 2h-4v4a1 1 0 11-2 0v-4H7a1 1 0 110-2h4V7a1 1 0 011-1z"
 />
 <path
   fill="currentColor"
   fillRule="evenodd"
   d="M5 22a3 3 0 01-3-3V5a3 3 0 013-3h14a3 3 0 013 3v14a3 3 0 01-3 3H5zm-1-3a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v14z"
   clipRule="evenodd"
 />
</svg>
)