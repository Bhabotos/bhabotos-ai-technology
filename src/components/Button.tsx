import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

interface SharedProps {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type LinkButtonProps = SharedProps &
  Omit<LinkProps, 'className' | 'children'> & {
    to: string
    href?: undefined
  }

type AnchorProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    to?: undefined
  }

type ButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined
    to?: undefined
  }

type Props = LinkButtonProps | AnchorProps | ButtonProps

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3.5 text-base',
}

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-accent to-accent-2 text-bg font-semibold shadow-glow hover:brightness-110 active:brightness-95',
  secondary:
    'border border-border-strong bg-surface text-heading hover:bg-surface-hover hover:border-accent-border',
  ghost: 'text-text hover:text-heading hover:bg-white/5',
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, href, to, ...rest }: Props) {
  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...(rest as Omit<LinkProps, 'to' | 'className' | 'children'>)}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
