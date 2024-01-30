"use client";

import { DataTable } from "./data-table";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { columns } from "./results-columns";

export default function Results({
  scores,
}: {
  scores: {
    position: number;
    country: string;
    score: number;
  }[];
}) {
  const [showRanking, setShowRanking] = useState(false);

  return (
    <>
      {showRanking ? (
        <div className="flex flex-col items-center justify-center">
          <DataTable columns={columns} data={scores} />
          <div className="flex space-x-2">
            <Link href="/select">
              <Button variant="secondary" className="mb-14">
                Try again <ArrowLeftIcon className="ml-2" />
              </Button>
            </Link>
            <Link href="/#all-data">
              <Button variant="link" className="mb-14">
                Check all data
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 leading-tight tracking-tighter ">
          <p className="dark:text-neutral- text-xl text-neutral-500 dark:text-neutral-300">
            You should move to...
          </p>
          <p className="text-6xl font-bold">{`${scores.at(0)?.country}!`}</p>
          <Button
            variant="outline"
            className="mt-3"
            onClick={() => setShowRanking(!showRanking)}
          >
            Show ranking
          </Button>
        </div>
      )}
    </>
  );
}
