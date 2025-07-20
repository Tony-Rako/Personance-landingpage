import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { X } from "lucide-react";
import PropTypes from "prop-types";

const ToastProvider = ToastPrimitive.Provider;

const ToastViewport = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitive.Viewport
    ref={ref}
    className={`fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px] ${className || ""}`}
    {...props}
  />
));
ToastViewport.displayName = ToastPrimitive.Viewport.displayName;
ToastViewport.propTypes = {
  className: PropTypes.string,
};

const Toast = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variantStyles = {
    default: "border bg-white text-gray-950",
    destructive: "destructive border-red-500 bg-red-500 text-white",
  };

  return (
    <ToastPrimitive.Root
      ref={ref}
      className={`group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all ${variantStyles[variant]} ${className || ""}`}
      {...props}
    />
  );
});
Toast.displayName = ToastPrimitive.Root.displayName;
Toast.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "destructive"]),
};

const ToastAction = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitive.Action
    ref={ref}
    className={`inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${className || ""}`}
    {...props}
  />
));
ToastAction.displayName = ToastPrimitive.Action.displayName;
ToastAction.propTypes = {
  className: PropTypes.string,
};

const ToastClose = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitive.Close
    ref={ref}
    className={`absolute right-2 top-2 rounded-md p-1 text-gray-950/50 opacity-0 transition-opacity hover:text-gray-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 ${className || ""}`}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitive.Close>
));
ToastClose.displayName = ToastPrimitive.Close.displayName;
ToastClose.propTypes = {
  className: PropTypes.string,
};

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitive.Title
    ref={ref}
    className={`text-sm font-semibold ${className || ""}`}
    {...props}
  />
));
ToastTitle.displayName = ToastPrimitive.Title.displayName;
ToastTitle.propTypes = {
  className: PropTypes.string,
};

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => (
  <ToastPrimitive.Description
    ref={ref}
    className={`text-sm opacity-90 ${className || ""}`}
    {...props}
  />
));
ToastDescription.displayName = ToastPrimitive.Description.displayName;
ToastDescription.propTypes = {
  className: PropTypes.string,
};

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
};