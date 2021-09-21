import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const NotFound: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);
  
  return null;
};

export default NotFound;
