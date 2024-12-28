import React from "react"

export interface LabelProps {
    className?: string,
    children?: React.ReactNode
}

export default function Label({ className, children }: LabelProps) {
    return (
        <span className={`bg-sugar text-sugar-800 text-xs uppercase px-2.5 py-0.5 rounded border border-sugar-400 ${className}`}>
            {children}
        </span>
    )
}
