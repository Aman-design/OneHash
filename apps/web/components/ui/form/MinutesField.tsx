import classNames from "classnames";
import type { InputHTMLAttributes, ReactNode } from "react";
import React, { forwardRef } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode;
};

const MinutesField = forwardRef<HTMLInputElement, Props>(({ label, ...rest }, ref) => {
  return (
    <div className="block sm:flex">
      {!!label && (
        <div className="min-w-48 mb-4 sm:mb-0">
          <label htmlFor={rest.id} className="flex h-full items-center text-sm font-medium text-gray-700">
            {label}
          </label>
        </div>
      )}
      <div className="w-full">
        <div className="relative rounded-sm">
          <input
            {...rest}
            ref={ref}
            type="number"
            className={classNames(
              "block w-full rounded-sm border-gray-300 pl-2 pr-12 text-sm",
              rest.className
            )}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-sm text-gray-500" id="duration">
              mins
            </span>
          </div>
        </div>
      </div>
    </div>
  );
});

MinutesField.displayName = "MinutesField";

export default MinutesField;
