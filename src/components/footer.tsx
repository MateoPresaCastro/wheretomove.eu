import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="flex h-10 items-center justify-center py-6">
      <div className="flex w-96 max-w-2xl items-center justify-center text-xl">
        <Link
          target="_blank"
          href="https://github.com/MateoPresaCastro/wheretomove.eu"
        >
          <Button
            variant="link"
            size="sm"
            className="text-sm text-neutral-600 dark:text-neutral-600"
          >
            <FaGithub className="text-xl dark:text-neutral-500" />
            <p className="pl-2">By Mateo Presa Castro</p>
          </Button>
        </Link>
      </div>
    </footer>
  );
}
