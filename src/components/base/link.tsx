import type { Url } from 'next/dist/shared/lib/router/router';
import * as Anchor from 'next/link';
import type { HTMLAttributeAnchorTarget, LinkHTMLAttributes } from 'react';
import { cn } from '../../library';

type LinkProps = Omit<
  LinkHTMLAttributes<HTMLAnchorElement>,
  'aria-label' | 'href'
> & {
  target?: HTMLAttributeAnchorTarget;
  ariaLabel: string;
  href: Url;
};

export const Link = ({
  href,
  target,
  ariaLabel,
  rel,
  className,
  children,
  ...props
}: LinkProps) => {
  return (
    <Anchor.default
      target={target}
      aria-label={ariaLabel}
      rel={rel ?? target === '_blank' ? 'noreferrer noopener' : rel}
      href={href}
      className={cn(className)}
      {...props}
    >
      {children}
    </Anchor.default>
  );
};

Link.displayName = 'Link';
