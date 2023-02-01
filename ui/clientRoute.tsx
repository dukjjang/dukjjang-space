"use client";

import Link from "next/link";

const clientRoute = ({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) => {
  return <Link href={route}>{children}</Link>;
};

export default clientRoute;
