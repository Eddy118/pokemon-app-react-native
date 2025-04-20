import * as Sentry from "@sentry/react-native";
import React from "react";

type ErrorBoundaryProps = {
  children: React.ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  return (
    <Sentry.ErrorBoundary fallback={<></>}>{children}</Sentry.ErrorBoundary>
  );
};

export default ErrorBoundary;
