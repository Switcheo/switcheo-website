import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Paths } from "src/utils/paths";

const NotFound: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace(Paths.home);
  }, [router]);
  
  return null;
};

export default NotFound;
