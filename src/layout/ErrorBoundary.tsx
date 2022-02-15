import { observer } from "mobx-react-lite";
import React from "react";
import { PageErrorType } from "../common/errorType";

interface PropsType {
  children: any;
}

interface StateType {
  errorType: PageErrorType | null;
}

export default class ErrorBoundary extends React.Component<
  PropsType,
  StateType
> {
  constructor(props: PropsType) {
    super(props);
    this.state = { errorType: null };
  }

  static getDerivedStateFromError(error: any) {
    console.log(error);
    return { errorType: error };
  }

  render() {
    if (!this.state.errorType) {
      return this.props.children;
    }
    switch (this.state.errorType) {
      case PageErrorType.UNAUTHORIZED:
        return <h1>unauthorized</h1>;
      case PageErrorType.NETWORK_ERROR:
        return <h1>network error</h1>;
      default:
        return <h1>unknown error</h1>;
    }
  }
}
