import { FC, ReactNode, useMemo } from "react";
import { Link } from "react-router-dom";

import { isOuterLink } from "@/utils/tools";

interface Props {
  to: string;
  className?: string;
  children?: ReactNode | string;
  onClick?: () => void;
}

const ALink: FC<Props> = ({ to, className, children, onClick }) => {
  const isBlank = useMemo(() => isOuterLink(to), [to]);
  if (isBlank) {
    return (
      <a href={to} className={className} onClick={() => onClick?.()} target="_blank">
        {children || to}
      </a>
    );
  }
  return (
    <Link className={className} to={to} onClick={() => onClick?.()}>
      {children || to}
    </Link>
  );
};

export default ALink;
