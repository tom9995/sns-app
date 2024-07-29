import React, { useContext, useEffect, useState } from "react";
import { SessionContext } from "../SessionProvider";

export function Pagination(props: any) {
  return (
    <div className="flex justify-center mt-[16px]">
      <button
        className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={props.onPrev}
        disabled={props.onPrev == null}
      >
        Previous
      </button>
      <button
        className="flex items-center justify-center px-3 h-8 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={props.onNext}
        disabled={props.onNext == null}
      >
        Next
      </button>
    </div>
  );
}
